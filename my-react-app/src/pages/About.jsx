import { Container, Typography, Grid, Paper, Box, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #02080f 0%, #071d43 40%, #09173f 100%)',
        minHeight: '100vh',
        py: { xs: 4, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, color: '#e2e8f0' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}
            >
              About Me
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', maxWidth: 760, lineHeight: 1.9 }}>
              I’m Ismaila Waliyu, a full-stack software engineer who turns complex problems into thoughtful web products. I combine strong backend architecture with polished frontend experiences so every app is fast, scalable, and easy to use.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', maxWidth: 760, lineHeight: 1.9 }}>
              My background includes full-stack web applications, API development, and data-driven dashboards. I enjoy working across the stack, improving developer workflows, and building products that people love.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'rgba(13, 27, 56, 0.92)',
                  border: '1px solid rgba(96, 165, 250, 0.15)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#ffffff', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  Experience & Impact
                </Typography>
                <Stack spacing={2}>
                  {highlights.map((item) => (
                    <Paper
                      key={item.label}
                      elevation={0}
                      sx={{
                        p: { xs: 2, md: 3 },
                        background: 'rgba(255,255,255,0.04)',
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                        {item.value}
                      </Typography>
                      <Typography sx={{ color: '#94a3b8', mt: 1, fontSize: { xs: '0.85rem', md: '1rem' } }}>{item.label}</Typography>
                    </Paper>
                  ))}
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, color: '#ffffff', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  Why I Build
                </Typography>
                <Typography sx={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                  I believe strong software should feel effortless. I focus on clarity in both design and architecture, so applications perform beautifully across devices and are easy to maintain.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, color: '#93c5fd', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2rem' } }}>
              Core Skills
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {skills.map((skill) => (
                <Grid item xs={12} sm={6} md={3} key={skill.name}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: { xs: 2, md: 3 },
                      minHeight: { xs: 150, md: 170 },
                      borderRadius: 3,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, color: '#ffffff', fontWeight: 700, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      {skill.name}
                    </Typography>
                    <Stack spacing={1}>
                      {skill.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(96, 165, 250, 0.35)',
                            color: '#cbd5e1',
                            fontSize: '0.85rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, color: '#93c5fd', fontWeight: 700, fontSize: { xs: '1.7rem', md: '2rem' } }}>
              Education
            </Typography>
            <Paper
              elevation={2}
              sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {education.map((edu) => (
                <Box key={edu.degree} sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#ffffff', fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    {edu.degree}
                  </Typography>
                  <Typography sx={{ color: '#94a3b8', mt: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>{edu.school} · {edu.period}</Typography>
                  <Typography sx={{ color: '#cbd5e1', mt: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}>{edu.description}</Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

const highlights = [
  { label: 'Years of development experience', value: '3+' },
  { label: 'Projects delivered', value: '15+' },
  { label: 'Industry focus', value: 'Fintech, SaaS, eCommerce' },
];

const skills = [
  {
    name: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'Material UI'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
  },
  {
    name: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Testing'],
  },
];

const education = [
  {
    degree: 'Bachelor of Software Engineering',
    school: 'Al-Hikmah University',
    period: '2022 - 2026',
    description: 'Graduated with honors, focusing on software design, data structures, and full-stack development.',
  },
];

export default About;


