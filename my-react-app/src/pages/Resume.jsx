import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {
  Work,
  School,
  Download,
  Circle,
  CheckCircle
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Resume = () => {
  // Replace with your actual resume PDF URL
  const resumeUrl = '/path-to-your-resume.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box 
      component="main" 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#030c15', // Dark background
        background: 'linear-gradient(155deg, #030c15 60%, #09063e 100%)'
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Box sx={{ 
          width: '100%',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3 }
        }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6 },
          px: { xs: 2, sm: 0 }
        }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: '#1976d2', // Material-UI primary blue
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Resume
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Download />}
            href={resumeUrl}
            target="_blank"
            size="large"
            sx={{ 
              mt: 2,
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            Download CV
          </Button>
        </Box>

        <motion.div variants={itemVariants}>
          <Timeline 
              sx={{
                p: { xs: 0, sm: 2 },
                m: 0,
                [`@media (max-width: 600px)`]: {
                  '.MuiTimelineItem-root': {
                    minHeight: '70px',
                  },
                  '.MuiTimelineOppositeContent-root': {
                    flex: { xs: '0 1 100px', sm: 0.3 },
                    padding: '2px 2px',
                  },
                  '.MuiTimelineSeparator-root': {
                    flex: '0 1 auto',
                  },
                  '.MuiTimelineContent-root': {
                    flex: { xs: '1 1 auto', sm: 0.7 },
                    padding: '2px 5px',
                  },
                  '.MuiTimelineConnector-root': {
                    width: '2px',
                  },
                  '.MuiTimelineDot-root': {
                    margin: '0 6px',
                    padding: '2px',
                  }
                }
              }}
            >
            {/* Work Experience */}
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent 
                  color="text.secondary"
                  sx={{
                    m: 'auto 0',
                    [`@media (max-width: 600px)`]: {
                      display: 'block !important',
                      fontSize: '0.75rem',
                    }
                  }}
                >
                  {exp.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ 
                    bgcolor: '#1976d2',
                    boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.2)'
                  }}>
                    <Work sx={{ color: 'white' }} />
                  </TimelineDot>
                  {index !== experience.length - 1 && <TimelineConnector sx={{ 
                    bgcolor: '#1976d2',
                    width: '2px'
                  }} />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper 
                    elevation={1} 
                    sx={{ 
                      p: { xs: 0.5, sm: 3 }, 
                      mb: { xs: 2, sm: 3 },
                      background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)',
                      borderLeft: '4px solid #1976d2',
                      [`@media (max-width: 600px)`]: {
                        wordBreak: 'break-word'
                      },
                      '&:hover': {
                        transform: 'translateX(8px)',
                        transition: 'transform 0.3s ease-in-out'
                      }
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography 
                      color="text.secondary" 
                      gutterBottom
                      sx={{
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <List dense>
                      {exp.achievements.map((achievement, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={achievement} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}

            {/* Education */}
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {edu.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <School />
                  </TimelineDot>
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3">
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary">
                      {edu.school}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {edu.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants}>
          <Box sx={{ 
            mt: { xs: 4, sm: 6 },
            px: { xs: 2, sm: 0 }
          }}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 600,
                mb: { xs: 2, sm: 3 }
              }}
            >
              Technical Skills
            </Typography>
            <Divider sx={{ mb: { xs: 2, sm: 3 } }} />
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)'
              },
              gap: { xs: 2, sm: 3 }
            }}>
              {skills.map((skill) => (
                <Paper
                  key={skill.category}
                  elevation={2}
                  sx={{ 
                    p: { xs: 2, sm: 3 },
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                    border: '1px solid rgba(25, 118, 210, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(25, 118, 210, 0.2)',
                      background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      fontWeight: 600,
                      mb: { xs: 1, sm: 2 }
                    }}
                  >
                    {skill.category}
                  </Typography>
                  <List dense sx={{ pt: 0 }}>
                    {skill.items.map((item) => (
                      <ListItem 
                        key={item}
                        sx={{ 
                          px: { xs: 1, sm: 2 },
                          py: { xs: 0.5, sm: 1 }
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: { xs: 36, sm: 40 } }}>
                          <Circle fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item}
                          primaryTypographyProps={{
                            fontSize: { xs: '0.875rem', sm: '1rem' }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              ))}
            </Box>
          </Box>
        </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

// Sample data - Replace with your actual information
const experience = [
  {
    title: 'Junior Software Engineer',
    company: 'Upwork',
    period: '2024 - Present',
    achievements: [
      'Improved system performance by 40%',
      'Mentored junior developers',
    ]
  }
];

const education = [
  
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Al-Hikmah Univerity',
    period: '2023 - 2026',
    description: 'Graduating with honors'
  }
];

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Next.js', 'Material-UI']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Python', 'Java', 'RESTful APIs', 'GraphQL']
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'AWS', 'Git', 'CI/CD']
  }
];

export default Resume;