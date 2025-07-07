
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { GitHubProjects } from '@/components/GitHubProjects';
import { LinkedInPosts } from '@/components/LinkedInPosts';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { AnimeGuide } from '@/components/AnimeGuide';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background text-foreground relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <div data-guide="about">
            <About />
          </div>
          <div data-guide="projects">
            <Projects />
          </div>
          <GitHubProjects />
          <LinkedInPosts />
          <div data-guide="education">
            <Education />
          </div>
          <div data-guide="experience">
            <Experience />
          </div>
          <div data-guide="contact">
            <Contact />
          </div>
          <Footer />
        </div>
        <AnimeGuide />
      </div>
    </ThemeProvider>
  );
};

export default Index;
