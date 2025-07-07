
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'National Institute of Technology',
    location: 'Trichy, Tamil Nadu',
    period: '2021 - 2025',
    grade: 'CGPA: 8.5/10',
    highlights: ['Specialized in AI & Machine Learning', 'Data Structures & Algorithms', 'Software Engineering'],
  },
  {
    degree: 'Higher Secondary',
    field: 'Science (Physics, Chemistry, Mathematics)',
    institution: 'Government Higher Secondary School',
    location: 'Trichy, Tamil Nadu',
    period: '2019 - 2021',
    grade: '95.2%',
    highlights: ['State Board Topper', 'Mathematics Excellence Award', 'Science Olympiad Winner'],
  },
];

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: '2023',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2023',
    skills: ['CNN', 'RNN', 'Transformers', 'Computer Vision'],
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: '2022',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    skills: ['Cloud Computing', 'AWS Services', 'Infrastructure'],
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2023',
    skills: ['TensorFlow', 'Keras', 'Model Deployment'],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise
            in Data Science, Machine Learning, and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Academic Background
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
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
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <p className="text-lg text-blue-600 font-semibold">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {edu.period}
                        </Badge>
                        <p className="text-lg font-semibold text-green-600">{edu.grade}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm text-blue-600 font-medium">{cert.issuer}</p>
                      <Badge variant="secondary" className="w-fit">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950"
                        >
                          {skill}
                        </Badge>
                      ))}
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
