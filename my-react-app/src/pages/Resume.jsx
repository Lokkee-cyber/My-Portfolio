import { Box, Container, Typography, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Work, School, Download, CheckCircle, Circle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Resume = () => {
  const resumeUrl = '/resume.pdf';

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        staggerChildren: 0.14
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #02070f 0%, #08152d 45%, #040c1e 100%)',
        py: { xs: 4, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: '#ffffff', fontWeight: 800, mb: 2, letterSpacing: '0.02em', fontSize: { xs: '1.8rem', md: '2.5rem' } }}
            >
              Professional Resume
            </Typography>
            <Typography sx={{ color: '#cbd5e1', maxWidth: 760, mx: 'auto', mb: 4, fontSize: { xs: '0.95rem', md: '1rem' } }}>
              A snapshot of experience, skills, and professional achievements designed to highlight what I bring to engineering teams and product launches.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Download />}
              href={resumeUrl}
              target="_blank"
              size="large"
            >
              Download Resume
            </Button>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} lg={8}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    mb: 4,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    backdropFilter: 'blur(18px)'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    Experience
                  </Typography>
                  <Timeline sx={{ p: 0, m: 0 }}>
                    {experience.map((item, index) => (
                      <TimelineItem key={item.title + index} sx={{ minHeight: 120 }}>
                        <TimelineOppositeContent
                          color="text.secondary"
                          sx={{ m: 'auto 0', fontSize: { xs: '0.75rem', md: '0.95rem' }, display: { xs: 'none', md: 'block' } }}
                        >
                          {item.period}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot sx={{ bgcolor: '#60a5fa' }}>
                            <Work sx={{ color: '#ffffff' }} />
                          </TimelineDot>
                          {index !== experience.length - 1 && <TimelineConnector sx={{ bgcolor: '#60a5fa' }} />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: { xs: '8px', md: '12px' } }}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: { xs: 2, md: 3 },
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                              border: '1px solid rgba(96, 165, 250, 0.15)',
                              borderRadius: 3
                            }}
                          >
                            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                              {item.title}
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                              {item.company}
                            </Typography>
                            <List dense>
                              {item.achievements.map((achievement, idx) => (
                                <ListItem key={idx} sx={{ py: { xs: 0.25, md: 0.5 } }}>
                                  <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CheckCircle sx={{ color: '#60a5fa', fontSize: { xs: 14, md: 16 } }} />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={achievement}
                                    primaryTypographyProps={{ color: '#e2e8f0', fontSize: { xs: '0.8rem', md: '0.95rem' } }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    backdropFilter: 'blur(18px)'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    Education
                  </Typography>
                  <Timeline sx={{ p: 0, m: 0 }}>
                    {education.map((item, index) => (
                      <TimelineItem key={item.degree + index} sx={{ minHeight: 100 }}>
                        <TimelineOppositeContent color="text.secondary" sx={{ m: 'auto 0', fontSize: { xs: '0.75rem', md: '0.95rem' }, display: { xs: 'none', md: 'block' } }}>
                          {item.period}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <School sx={{ color: '#ffffff' }} />
                          </TimelineDot>
                          {index !== education.length - 1 && <TimelineConnector sx={{ bgcolor: '#6d28d9' }} />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: { xs: '8px', md: '12px' } }}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: { xs: 2, md: 3 },
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                              border: '1px solid rgba(148, 163, 184, 0.18)',
                              borderRadius: 3
                            }}
                          >
                            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                              {item.degree}
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                              {item.school}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                              {item.description}
                            </Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    backdropFilter: 'blur(18px)'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    Skills
                  </Typography>
                  <Box sx={{ display: 'grid', gap: { xs: 1, md: 2 } }}>
                    {skills.map((category) => (
                      <Paper
                        key={category.category}
                        elevation={0}
                        sx={{
                          p: { xs: 2, md: 3 },
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(148, 163, 184, 0.14)',
                          borderRadius: 3
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 700, mb: 1, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                          {category.category}
                        </Typography>
                        <List dense>
                          {category.items.map((item) => (
                            <ListItem key={item} sx={{ py: { xs: 0.25, md: 0.5 } }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Circle sx={{ color: '#60a5fa', fontSize: { xs: 10, md: 12 } }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                primaryTypographyProps={{ color: '#e2e8f0', fontSize: { xs: '0.8rem', md: '0.95rem' } }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const experience = [
  {
    title: 'Junior Software Engineer',
    company: 'Upwork',
    period: '2024 - Present',
    achievements: [
      'Improved system performance by 40%',
      'Mentored junior developers',
      'Delivered clean, testable APIs for multiple client projects'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Al-Hikmah University',
    period: '2023 - 2026',
    description: 'Graduating with honors and a focus on software engineering best practices.'
  }
];

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Material UI', 'Responsive Design']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Vercel', 'CI/CD', 'Debugging']
  }
];

export default Resume;
