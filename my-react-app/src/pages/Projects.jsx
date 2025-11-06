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
  Alert
} from '@mui/material';
import { GitHub, OpenInNew, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'yourusername' with your actual GitHub username
    fetch('https://api.github.com/users/yourusername/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        // Sort projects by stars
        const sortedProjects = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        setProjects(sortedProjects);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // For demo purposes, if you want to see how it looks without GitHub API
  const demoProjects = [
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB",
      topics: ["react", "nodejs", "mongodb", "express"],
      html_url: "#",
      homepage: "#",
      stargazers_count: 45,
      language: "JavaScript"
    },
    {
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      topics: ["react", "firebase", "material-ui"],
      html_url: "#",
      homepage: "#",
      stargazers_count: 32,
      language: "TypeScript"
    },
    // Add more demo projects as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Showing demo projects instead:
        </Typography>
        <ProjectGrid projects={demoProjects} variants={itemVariants} />
      </Container>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: '#f0f8ff',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Box sx={{
          width: '100%',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3 }
        }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: { xs: 3, sm: 4, md: 5 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: '#1976d2',
              textShadow: '2px 2px 4px rgba(25, 118, 210, 0.1)'
            }}
          >
            My Projects
          </Typography>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            <ProjectGrid
              projects={projects.length > 0 ? projects : demoProjects}
              variants={itemVariants}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

const ProjectGrid = ({ projects, variants }) => (
  <Grid container spacing={3}>
    {projects.map((project) => (
      <Grid item xs={12} md={6} lg={4} key={project.name}>
        <motion.div variants={variants}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
              border: '1px solid rgba(25, 118, 210, 0.1)',
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.08)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 24px rgba(25, 118, 210, 0.15)',
                background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)',
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Chip
                  size="small"
                  label={project.language}
                  color="primary"
                  sx={{ mr: 1 }}
                />
                <Chip
                  size="small"
                  icon={<Code />}
                  label={`${project.stargazers_count} stars`}
                />
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.topics?.map((topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    size="small"
                    variant="outlined"
                    sx={{ textTransform: 'capitalize', borderColor: '#1976d2', color: '#1976d2' }}
                  />
                ))}
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                size="small"
                startIcon={<GitHub />}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#1976d2' }}
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
                  sx={{ color: '#1976d2' }}
                >
                  Live Demo
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