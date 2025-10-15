import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { fetchGeminiResponse, type ChatMessage } from "@/lib/gemini";
import siteContext from "@/assets/data/prompt.xml?raw";
import { Loader2, MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return Math.random().toString(36).slice(2);
};

type LocalMessage = ChatMessage & { id: string };

const INITIAL_MESSAGE: LocalMessage = {
  id: "assistant-welcome",
  role: "assistant",
  content:
    "Hi! I'm your AI assistant. Ask me anything about Jonathan's works, skills, or portfolio.",
};

const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<LocalMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) return;

    const userMessage: LocalMessage = {
      id: generateId(),
      role: "user",
      content: trimmed,
    };

    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInputValue("");
    setIsLoading(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const assistantReply = await fetchGeminiResponse(
        conversation.map(({ role, content }) => ({ role, content })),
        {
          signal: controller.signal,
          systemPrompt: siteContext,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unexpected error occurred while contacting Gemini.";

      toast({
        variant: "destructive",
        title: "Unable to reach Gemini",
        description: message,
      });
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] sm:w-[380px] bg-background border border-border shadow-xl rounded-2xl overflow-hidden"
          >
            <header className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
              <div>
                <p className="text-sm font-semibold">AI Portfolio Assistant</p>
                <p className="text-xs text-muted-foreground">
                  Powered by Google Gemini
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleToggle}
              >
                <X className="h-4 w-4" />
              </Button>
            </header>

            <div
              className="max-h-[380px] overflow-y-auto px-4 py-3 space-y-3 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-muted
  [&::-webkit-scrollbar-thumb]:bg-primary/20
  dark:[&::-webkit-scrollbar-track]:bg-muted
  dark:[&::-webkit-scrollbar-thumb]:bg-primary/20"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm whitespace-pre-wrap ${
                      message.role === "assistant"
                        ? "bg-primary/10 border border-primary/20 text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border/60 bg-background">
              <div className="flex items-end gap-2 px-3 pb-3">
                <Textarea
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about the portfolio..."
                  className="resize-none text-sm"
                  rows={2}
                  disabled={isLoading}
                />
                <Button
                  size="icon"
                  className="h-10 w-10 shrink-0"
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={handleToggle}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default AIChatbox;
