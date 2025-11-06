import { Container, Typography, Grid, Paper, Box, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f0f8ff',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* About Me Section */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Hello! I'm [Your Name], a passionate software engineer with a strong foundation in full-stack development. 
              I specialize in creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </Typography>
            <Typography variant="body1" paragraph>
              With [X] years of experience in the software industry, I've worked on various projects ranging from web applications 
              to enterprise solutions. I'm constantly learning and adapting to new technologies while maintaining a strong 
              foundation in software engineering principles.
            </Typography>
          </Box>

          {/* Skills Section */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              {skills.map((category) => (
                <Grid item xs={12} md={6} key={category.name}>
                  <Paper 
                    elevation={2}
                    sx={{ 
                      p: 3,
                      height: '100%',
                      '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {category.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {category.items.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          variant="outlined"
                          color="primary"
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>
              Professional Experience
            </Typography>
            <Paper elevation={2} sx={{ p: 3 }}>
              {experience.map((job, index) => (
                <Box key={job.title} sx={{ mb: index !== experience.length - 1 ? 4 : 0 }}>
                  <Typography variant="h6" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {job.company} | {job.period}
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>
                        <Typography variant="body1" paragraph>
                          {responsibility}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Paper>
          </Box>

          {/* Education Section */}
          <Box>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <Paper elevation={2} sx={{ p: 3 }}>
              {education.map((edu, index) => (
                <Box key={edu.degree} sx={{ mb: index !== education.length - 1 ? 4 : 0 }}>
                  <Typography variant="h6" gutterBottom>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {edu.school} | {edu.period}
                  </Typography>
                  <Typography variant="body1">
                    {edu.description}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};  


// Data
const skills = [
  {
    name: 'Frontend Development',
    items: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Material-UI' },
    ],
  },
  {
    name: 'Backend Development',
    items: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'RESTful APIs' },
    ],
  },
  {
    name: 'Database & Tools',
    items: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'AWS' },
    ],
  },
  {
    name: 'Other Skills',
    items: [
      { name: 'Agile' },
      { name: 'CI/CD' },
      { name: 'Testing' },
      { name: 'Problem Solving' },
    ],
  },
];

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Company Name',
    period: '2020 - Present',
    responsibilities: [
      'Led the development of a high-performance web application using React and Node.js',
      'Implemented microservices architecture to improve scalability',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Previous Company',
    period: '2018 - 2020',
    responsibilities: [
      'Developed and maintained full-stack applications using modern technologies',
      'Collaborated with cross-functional teams to deliver projects on time',
      'Improved application performance by 40% through optimization',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2014 - 2018',
    description: 'Graduated with honors. Specialized in Software Engineering and Data Structures.',
  },
];


export default About;