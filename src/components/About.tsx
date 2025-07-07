import { motion } from 'framer-motion';

export function About() {
  const skills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'TensorFlow',
    'PyTorch',
    'SQL',
    'NoSQL',
    'Data Visualization',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Data Analysis',
    'Cloud Computing (AWS, Azure, GCP)',
  ];

  return (
    <section id="about" data-guide="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              Hello! I'm Vignesh, a passionate AI and Data Science enthusiast. I thrive on
              transforming complex data into actionable insights and creating innovative AI
              solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong foundation in machine learning, deep learning, and data analysis, I've
              had the opportunity to work on exciting projects that leverage the power of AI to
              solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm always eager to learn and explore new technologies, and I'm excited to
              contribute my skills and expertise to make a positive impact in the field of
              Artificial Intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="skills-section"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-md p-3 text-sm text-muted-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
