
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GuideMessage {
  text: string;
  element?: string;
}

export function AnimeGuide() {
  const [scrollY, setScrollY] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<GuideMessage>({ text: "Hi! I'm your portfolio guide. Hover over elements to learn more!" });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.volume = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  const handleElementHover = (element: string, message: string) => {
    setCurrentMessage({ text: message, element });
    setShowMessage(true);
    speakText(message);
  };

  useEffect(() => {
    // Add hover listeners to elements
    const elements = {
      '[data-guide="hero"]': "Welcome to Vignesh's portfolio! This is where his journey begins.",
      '[data-guide="about"]': "Here you'll learn about Vignesh's skills and expertise in AI and Data Science.",
      '[data-guide="projects"]': "Check out these amazing projects showcasing technical capabilities!",
      '[data-guide="education"]': "Vignesh's academic achievements and certifications are displayed here.",
      '[data-guide="experience"]': "Professional experience and internship highlights are featured in this section.",
      '[data-guide="contact"]': "Ready to connect? Use this form to get in touch with Vignesh!",
      '[data-guide="social"]': "Connect with Vignesh on social platforms and GitHub.",
      '[data-guide="theme"]': "Switch between light and dark themes for better viewing experience.",
    };

    const addListeners = () => {
      Object.entries(elements).forEach(([selector, message]) => {
        const element = document.querySelector(selector);
        if (element) {
          element.addEventListener('mouseenter', () => handleElementHover(selector, message));
          element.addEventListener('mouseleave', () => setShowMessage(false));
        }
      });
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(addListeners, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Anime Character */}
      <motion.div
        className="fixed right-4 z-50 pointer-events-none"
        style={{
          top: Math.min(100 + scrollY * 0.1, window.innerHeight - 200),
        }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="relative">
          {/* Anime Character SVG */}
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white cursor-pointer pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessage(!showMessage)}
          >
            <div className="text-white text-2xl font-bold">VG</div>
            {/* Anime-style eyes */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </motion.div>

          {/* Speech Bubble */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute right-24 top-0 pointer-events-auto"
              >
                <Card className="p-3 max-w-xs bg-background/95 backdrop-blur border shadow-lg">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{currentMessage.text}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => speakText(currentMessage.text)}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0"
                      onClick={() => setShowMessage(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  {/* Speech bubble tail */}
                  <div className="absolute right-0 top-4 transform translate-x-1 -translate-y-1/2">
                    <div className="w-0 h-0 border-l-8 border-l-border border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating animation indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide Guide' : 'Show Guide'}
      </Button>
    </>
  );
}
