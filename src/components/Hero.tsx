import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Hero() {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto shadow-2xl border-4 border-white">
                <AvatarImage 
                  src="/api/placeholder/400/400" 
                  alt="Vignesh Hariraj"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  VH
                </AvatarFallback>
              </Avatar>
              {/* Animated rings around avatar */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-pulse opacity-20"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          >
            Vignesh Hariraj
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Aspiring Data & ML Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 px-4"
          >
            Passionate about transforming data into intelligent solutions through
            Machine Learning, AI, and cutting-edge technologies. Currently pursuing
            excellence in Data Science and AI engineering.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4 mb-8"
            data-guide="social"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.github.com/Vigneshhariraj', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              onClick={() => window.open('https://www.linkedin.com/in/vigneshhariraj', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform"
              onClick={() => window.open('mailto:vigneshhariraj@gmail.com')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
