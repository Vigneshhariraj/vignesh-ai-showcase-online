
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'Django', 'Flask',
  'Machine Learning', 'Artificial Intelligence', 'LLMs', 'TensorFlow',
  'Keras', 'PyTorch', 'Data Science', 'Deep Learning', 'Neural Networks'
];

const achievements = [
  {
    title: '12th Position - Intel ONEAPI Hackathon 2024',
    description: 'National level achievement in AI/ML innovation',
    rank: '12th',
  },
  {
    title: '3rd Place - AI Paper Competition',
    description: 'Research excellence in artificial intelligence',
    rank: '3rd',
  },
  {
    title: '5th Place - AI Hackathon',
    description: 'Innovative AI solution development',
    rank: '5th',
  },
  {
    title: '1st Prize - SindhanAi\'25',
    description: 'Winner with ₹10,000 cash prize',
    rank: '1st',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Data & ML Engineer with a strong foundation in artificial intelligence,
            machine learning, and data science. My journey combines academic excellence with
            practical innovation, demonstrated through multiple competition wins and hands-on projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 hover:scale-105 transition-transform cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                        {achievement.rank}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "To leverage the power of artificial intelligence and machine learning in solving
                real-world problems, creating innovative solutions that make technology more accessible
                and impactful for everyone. I believe in continuous learning, collaborative innovation,
                and the transformative potential of data-driven insights."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
