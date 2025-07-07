
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Intel ONEAPI Hackathon Project',
    description: 'Advanced machine learning solution that secured 12th position in national competition. Implemented using Intel\'s optimization tools and modern ML frameworks.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Intel OneAPI', 'TensorFlow', 'Machine Learning'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'AI/ML',
  },
  {
    title: 'AI Research Paper Implementation',
    description: 'Comprehensive research and implementation of cutting-edge AI algorithms, resulting in 3rd place in AI paper competition.',
    image: '/api/placeholder/600/400',
    technologies: ['PyTorch', 'Deep Learning', 'Research', 'Python'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'Research',
  },
  {
    title: 'SindhanAi\'25 Winning Solution',
    description: 'Prize-winning AI solution that earned ₹10,000 cash prize. Innovative approach to solving complex data science challenges.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'AI', 'Data Science', 'Machine Learning'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'Competition',
  },
  {
    title: 'Full-Stack Web Application',
    description: 'Modern web application built with Django/Flask backend and responsive frontend, showcasing full-stack development skills.',
    image: '/api/placeholder/600/400',
    technologies: ['Django', 'JavaScript', 'HTML/CSS', 'Python'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'Web Development',
  },
  {
    title: 'Machine Learning Pipeline',
    description: 'End-to-end ML pipeline for data processing, model training, and deployment with automated workflows and monitoring.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'MLOps'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'ML Engineering',
  },
  {
    title: 'Deep Learning Computer Vision',
    description: 'Advanced computer vision project using deep learning for image recognition and classification with high accuracy.',
    image: '/api/placeholder/600/400',
    technologies: ['PyTorch', 'OpenCV', 'Computer Vision', 'Python'],
    githubUrl: 'https://github.com/Vigneshhariraj',
    liveUrl: '#',
    category: 'Computer Vision',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise through various AI, ML, and software development projects
            that demonstrate innovation, problem-solving skills, and competitive achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-600/50">
                      {project.category.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 dark:bg-black/90">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
