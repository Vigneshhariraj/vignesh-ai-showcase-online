
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Volume2, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GuideMessage {
  text: string;
  element?: string;
}

export function AnimeGuide() {
  const [position, setPosition] = useState({ x: window.innerWidth - 120, y: 100 });
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState<GuideMessage>({ 
    text: "Hi! I'm your portfolio guide. Hover over sections to learn more!" 
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });

  const speakText = (text: string) => {
    // Stop any current speech
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        utterance.volume = 0.8;
        
        // Use a more natural voice if available
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
          voice.name.includes('Google') || 
          voice.name.includes('Microsoft') ||
          voice.lang.startsWith('en')
        );
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        
        speechSynthesis.speak(utterance);
      }, 100);
    }
  };

  const handleElementHover = (element: string, message: string) => {
    console.log('Hover detected on:', element);
    setCurrentMessage({ text: message, element });
    setShowMessage(true);
    speakText(message);
  };

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - 100, e.clientX - dragStart.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragStart.current.y));
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Update position on window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition(prev => ({
        x: Math.min(prev.x, window.innerWidth - 100),
        y: Math.min(prev.y, window.innerHeight - 100)
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Load voices when available
    const loadVoices = () => {
      if ('speechSynthesis' in window) {
        speechSynthesis.getVoices();
      }
    };

    if ('speechSynthesis' in window) {
      speechSynthesis.addEventListener('voiceschanged', loadVoices);
      loadVoices();
    }

    // Enhanced hover detection with better selectors
    const elements = {
      '[data-guide="about"]': "Here you'll discover Vignesh's technical skills in AI, Machine Learning, and Data Science!",
      '[data-guide="projects"]': "Explore these impressive projects showcasing real-world applications of AI and ML!",
      '[data-guide="education"]': "Check out Vignesh's academic journey and professional certifications!",
      '[data-guide="experience"]': "Learn about Vignesh's internships and professional experience in tech!",
      '[data-guide="contact"]': "Ready to collaborate? Use this form to get in touch with Vignesh!",
      '[data-guide="theme"]': "Switch between light and dark themes for the best viewing experience!",
      '.hero-section': "Welcome to Vignesh Hariraj's portfolio - your gateway to AI and Data Science excellence!",
      '.projects-grid': "These projects demonstrate cutting-edge AI and ML implementations!",
      '.skills-section': "Discover the technical arsenal powering Vignesh's AI solutions!",
      '.contact-form': "Let's start a conversation about your next AI project!",
    };

    const addListeners = () => {
      Object.entries(elements).forEach(([selector, message]) => {
        const element = document.querySelector(selector);
        if (element) {
          const handleEnter = () => {
            console.log('Mouse entered:', selector);
            handleElementHover(selector, message);
          };
          const handleLeave = () => {
            console.log('Mouse left:', selector);
            setShowMessage(false);
          };

          element.addEventListener('mouseenter', handleEnter);
          element.addEventListener('mouseleave', handleLeave);
          
          // Store references for cleanup
          (element as any).__guideListeners = { handleEnter, handleLeave };
        }
      });
    };

    // Cleanup previous listeners
    const cleanupListeners = () => {
      Object.keys(elements).forEach(selector => {
        const element = document.querySelector(selector);
        if (element && (element as any).__guideListeners) {
          const { handleEnter, handleLeave } = (element as any).__guideListeners;
          element.removeEventListener('mouseenter', handleEnter);
          element.removeEventListener('mouseleave', handleLeave);
          delete (element as any).__guideListeners;
        }
      });
    };

    // Wait for DOM to be ready, then add listeners
    const timer = setTimeout(() => {
      cleanupListeners();
      addListeners();
    }, 1000);

    return () => {
      clearTimeout(timer);
      cleanupListeners();
      if ('speechSynthesis' in window) {
        speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      }
    };
  }, []);

  if (!isVisible) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setIsVisible(true)}
      >
        Show Guide
      </Button>
    );
  }

  return (
    <>
      {/* Anime Character */}
      <motion.div
        ref={dragRef}
        className="fixed z-50 cursor-move"
        style={{
          left: position.x,
          top: position.y,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onMouseDown={handleMouseDown}
      >
        <div className="relative">
          {/* Enhanced Anime Character */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl border-3 border-white relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={isDragging ? {} : { y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Character Face */}
            <div className="text-white text-lg font-bold relative z-10">VG</div>
            
            {/* Anime Eyes */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            
            {/* Sparkle Effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1 right-1 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>

          {/* Drag Handle */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Move className="w-3 h-3 text-white" />
          </div>

          {/* Speech Bubble */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto"
              >
                <Card className="p-3 max-w-xs bg-background/95 backdrop-blur-sm border shadow-lg">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground leading-relaxed">{currentMessage.text}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-blue-100"
                        onClick={() => speakText(currentMessage.text)}
                        title="Speak text"
                      >
                        <Volume2 className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-red-100"
                        onClick={() => setShowMessage(false)}
                        title="Close message"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  {/* Speech bubble tail */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <div className="border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-border"></div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status Indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Hide Guide Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed bottom-4 right-4 z-40"
        onClick={() => setIsVisible(false)}
      >
        Hide Guide
      </Button>
    </>
  );
}
