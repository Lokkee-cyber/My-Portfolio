import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';
import { GitHub, OpenInNew, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Lokkee-cyber/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch repositories');
        }
        return response.json();
      })
      .then((data) => {
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(sorted.slice(0, 9));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const demoProjects = [
    {
      name: 'Training Website',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      topics: ['react', 'nodejs', 'mongodb'],
      html_url: 'https://github.com/Lokkee-cyber/New-Folder.git',
      homepage: 'https://new-folder-five-gamma.vercel.app/',
      stargazers_count: 45,
      language: 'JavaScript',
    },
    {
      name: 'Portfolio Redesign',
      description: 'A modern portfolio crafted for performance, accessibility, and visual polish.',
      topics: ['react', 'mui', 'vite'],
      html_url: 'https://github.com/Lokkee-cyber/portfolio',
      homepage: '',
      stargazers_count: 32,
      language: 'JavaScript',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const projectList = projects.length > 0 ? projects : demoProjects;

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #02080f 0%, #071a3b 45%, #040b18 100%)',
        py: { xs: 4, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
            mb: 6,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: '#ffffff', fontWeight: 800, mb: 2, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}
          >
            Selected Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#cbd5e1', textAlign: 'center', maxWidth: 760, mx: 'auto', fontSize: { xs: '0.95rem', md: '1rem' } }}
          >
            A curated showcase of recent work emphasizing thoughtful UI, clean architecture, and real product value.
          </Typography>
        </Paper>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 260 }}>
            <CircularProgress color="primary" />
          </Box>
        ) : error ? (
          <Box>
            <Alert severity="warning" sx={{ mb: 4 }}>
              {error}. Showing demo projects instead.
            </Alert>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <ProjectGrid projects={demoProjects} variants={itemVariants} />
            </motion.div>
          </Box>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <ProjectGrid projects={projectList} variants={itemVariants} />
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

const ProjectGrid = ({ projects, variants }) => (
  <Grid container spacing={{ xs: 2, md: 4 }}>
    {projects.map((project) => (
      <Grid item xs={12} md={6} lg={4} key={project.name}>
        <motion.div variants={variants}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 3,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
              transition: 'transform 0.25s ease, border 0.25s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                borderColor: 'rgba(96, 165, 250, 0.35)',
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.language && (
                  <Chip size="small" label={project.language} sx={{ borderColor: '#60a5fa', color: '#60a5fa' }} />
                )}
                {project.topics?.map((topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    size="small"
                    variant="outlined"
                    sx={{ color: '#c5d8ff', borderColor: '#374b7a' }}
                  />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button
                size="small"
                startIcon={<GitHub />}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#60a5fa' }}
              >
                Code
              </Button>
              {project.homepage && (
                <Button
                  size="small"
                  startIcon={<OpenInNew />}
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#60a5fa' }}
                >
                  Demo
                </Button>
              )}
            </CardActions>
          </Card>
        </motion.div>
      </Grid>
    ))}
  </Grid>
);

export default Projects;
