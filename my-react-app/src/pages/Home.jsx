import { Box, Container, Typography, Button, Grid, Avatar, Stack, IconButton, Paper, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import imagedp from '../assets/imagedp.jpg';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: <LinkedInIcon fontSize="large" />, link: 'https://www.linkedin.com/in/waliyu-ismaila-945593399', label: 'LinkedIn', color: '#0A66C2'
  },
  {
    icon: <GitHubIcon fontSize="large" />, link: 'https://github.com/Lokkee-cyber', label: 'GitHub', color: '#171515'
  },
  {
    icon: <EmailIcon fontSize="large" />, link: 'mailto:ismailawaliyu@gmail.com', label: 'Email', color: '#1976d2'
  }
];

const expertise = [
  {
    title: 'Modern Interfaces',
    description: 'Pixel-perfect responsive websites with accessible UI and delightful motion.',
    accent: '#7c3aed'
  },
  {
    title: 'Reliable Backend',
    description: 'APIs, databases, authentication, and production-ready deployment flows.',
    accent: '#0ea5e9'
  },
  {
    title: 'Performance First',
    description: 'Fast-loading experiences built with clean code and optimized bundles.',
    accent: '#16a34a'
  }
];

const skills = ['React', 'JavaScript', 'Node.js', 'TypeScript', 'MongoDB', 'Material UI', 'Responsive Design'];

const featuredProjects = [
  {
    title: 'Training Website',
    description: 'E-commerce training platform with full cart flow, product management, and user auth.',
  },
  {
    title: 'Portfolio Refresh',
    description: 'Redesigned portfolio with modern visuals, performance-first layout, and animated transitions.',
  },
  {
    title: 'API Dashboard',
    description: 'Data-driven dashboard built for monitoring and workflow automation.',
  }
];

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #02080f 0%, #07183a 45%, #091a3b 100%)',
        py: { xs: 4, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
              <Stack spacing={4}>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.05,
                      color: '#ffffff',
                      fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                    }}
                  >
                    I build modern web experiences that scale seamlessly.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: 2, color: '#cbd5e1', fontSize: { xs: '0.95rem', md: '1.05rem' }, maxWidth: 660 }}
                  >
                    I’m Ismaila Waliyu — a full-stack engineer focused on high-quality UI, stable backend systems, and polished user journeys.
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    size="large"
                    sx={{ px: 5, py: 1.8 }}
                  >
                    See Projects
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'rgba(96, 165, 250, 0.35)',
                      color: '#cbd5e1',
                      '&:hover': {
                        borderColor: '#60a5fa',
                        background: 'rgba(96, 165, 250, 0.08)',
                      },
                    }}
                  >
                    Let’s Talk
                  </Button>
                </Stack>

                <Stack direction="row" spacing={0.5} flexWrap="wrap">
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(255,255,255,0.18)',
                        color: '#dbeafe',
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        py: { xs: 0.8, md: 1 },
                      }}
                    />
                  ))}
                </Stack>

                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography sx={{ color: '#60a5fa', fontWeight: 700, mb: 0.5, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>3+</Typography>
                      <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '0.9rem', md: '1rem' } }}>Years of experience</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography sx={{ color: '#60a5fa', fontWeight: 700, mb: 0.5, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>15+</Typography>
                      <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '0.9rem', md: '1rem' } }}>Projects delivered</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 3,
                      }}
                    >
                      <Typography sx={{ color: '#60a5fa', fontWeight: 700, mb: 0.5, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>React + Node</Typography>
                      <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '0.85rem', md: '1rem' } }}>Preferred full-stack stack</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
              <Paper
                elevation={12}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(10,20,40,0.95))',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
                }}
              >
                <Box sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Avatar
                    src={imagedp}
                    alt="Profile"
                    sx={{
                      width: { xs: 110, md: 140 },
                      height: { xs: 110, md: 140 },
                      mx: 'auto',
                      boxShadow: '0 20px 60px rgba(9, 72, 121, 0.3)',
                    }}
                  />
                  <Typography variant="h5" sx={{ mt: { xs: 2, md: 3 }, mb: 1, fontWeight: 700, color: '#ffffff', fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                    Ismaila Waliyu
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                    Full-Stack Developer · React · Node.js · UX-focused
                  </Typography>

                  <Stack direction="row" justifyContent="center" spacing={1}>
                    {socialLinks.map((item) => (
                      <IconButton
                        key={item.label}
                        component="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        sx={{
                          color: item.color,
                          bgcolor: 'rgba(255,255,255,0.08)',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.16)',
                          },
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Box sx={{ mt: { xs: 6, md: 12 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, color: '#bfdbfe', fontWeight: 700, letterSpacing: 0.7, fontSize: { xs: '1.7rem', md: '2rem' } }}>
              Core Expertise
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {expertise.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: { xs: 3, md: 4 },
                      minHeight: { xs: 180, md: 220 },
                      borderRadius: 3,
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(15, 23, 42, 0.9)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.25s ease',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: item.accent,
                        mb: 3,
                      }}
                    />
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#ffffff' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
          <Box sx={{ mt: { xs: 6, md: 10 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, color: '#bfdbfe', fontWeight: 700, letterSpacing: 0.7, fontSize: { xs: '1.7rem', md: '2rem' } }}>
              Featured Work
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {featuredProjects.map((project) => (
                <Grid item xs={12} md={4} key={project.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      minHeight: { xs: 180, md: 200 },
                      borderRadius: 3,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'transform 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#ffffff' }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: '#cbd5e1', mb: 3 }}>
                      {project.description}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to="/projects"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      sx={{ color: '#60a5fa', textTransform: 'none', fontWeight: 700 }}
                    >
                      View details
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
