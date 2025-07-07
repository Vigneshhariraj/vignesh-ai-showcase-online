
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'AI/ML Research Intern',
    company: 'Tech Innovation Labs',
    location: 'Chennai, Tamil Nadu',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    description: 'Worked on cutting-edge machine learning projects focusing on natural language processing and computer vision applications.',
    achievements: [
      'Developed ML models with 95% accuracy for text classification',
      'Implemented computer vision algorithms for object detection',
      'Collaborated with senior researchers on AI paper publications',
      'Optimized model performance reducing inference time by 40%'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP', 'Computer Vision'],
  },
  {
    role: 'Data Science Intern',
    company: 'Analytics Solutions Pvt Ltd',
    location: 'Bangalore, Karnataka',
    period: 'Dec 2023 - Feb 2024',
    type: 'Internship',
    description: 'Focused on data analysis, statistical modeling, and business intelligence solutions for enterprise clients.',
    achievements: [
      'Analyzed large datasets to extract actionable business insights',
      'Built predictive models for customer behavior analysis',
      'Created interactive dashboards using modern visualization tools',
      'Improved data processing efficiency by 60% through optimization'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Tableau', 'Power BI'],
  },
  {
    role: 'Software Development Intern',
    company: 'WebTech Solutions',
    location: 'Trichy, Tamil Nadu',
    period: 'May 2023 - Jul 2023',
    type: 'Internship',
    description: 'Full-stack web development experience building scalable applications with modern frameworks and best practices.',
    achievements: [
      'Developed responsive web applications using modern frameworks',
      'Implemented RESTful APIs with comprehensive documentation',
      'Collaborated in agile development environment',
      'Contributed to code reviews and maintained high code quality'
    ],
    technologies: ['Django', 'Flask', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Git'],
  },
];

const competitions = [
  {
    name: 'Intel ONEAPI Hackathon 2024',
    position: '12th Position - National Level',
    date: '2024',
    description: 'Advanced AI solution using Intel optimization tools',
    award: 'Recognition Certificate',
  },
  {
    name: 'AI Paper Competition',
    position: '3rd Place',
    date: '2024',
    description: 'Research paper on novel machine learning algorithms',
    award: 'Bronze Medal',
  },
  {
    name: 'AI Hackathon',
    position: '5th Place',
    date: '2023',
    description: 'Innovative AI solution for real-world problems',
    award: 'Certificate of Excellence',
  },
  {
    name: 'SindhanAi\'25',
    position: '1st Prize Winner',
    date: '2025',
    description: 'Championship victory in AI competition',
    award: '₹10,000 Cash Prize',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey through internships, competitions, and hands-on experience
            in AI, ML, and software development.
          </p>
        </motion.div>

        {/* Internship Experience */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Professional Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{exp.role}</CardTitle>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competition Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Competition Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-2">{comp.name}</CardTitle>
                        <p className="text-blue-600 font-semibold">{comp.position}</p>
                      </div>
                      <Badge variant="secondary">{comp.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{comp.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`${
                          comp.position.includes('1st') 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : comp.position.includes('3rd')
                            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}
                      >
                        {comp.award}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
