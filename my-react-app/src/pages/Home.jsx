




import { Box, Container, Typography, Button, Grid, Avatar, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const skills = [
  {
    title: 'Frontend Development',
    description: 'React, Vite, Material-UI, Framer Motion, Responsive UI, Accessibility',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    description: 'Node.js, Express, REST APIs, Authentication, Security',
    icon: '⚙️',
  },
  {
    title: 'Database Design',
    description: 'MongoDB, SQL, Schema Design, Data Modeling, Optimization',
    icon: '🗄️',
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon fontSize="large" />, link: 'https://linkedin.com/', label: 'LinkedIn', color: '#0A66C2'
  },
  {
    icon: <GitHubIcon fontSize="large" />, link: 'https://github.com/', label: 'GitHub', color: '#171515'
  },
  {
    icon: <EmailIcon fontSize="large" />, link: 'mailto:your@email.com', label: 'Email', color: '#1976d2'
  },
];



const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
        fontFamily: 'Inter, Roboto, Arial, sans-serif',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Profile Picture on the left */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: { xs: 180, md: 260 }, height: { xs: 180, md: 260 } }}>
              <Avatar
                src="/path-to-your-image.jpg"
                alt="Profile"
                sx={{
                  width: '100%',
                  height: '100%',
                  border: '6px solid #1976d2',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                }}
              />
             
            </Box>
          </Grid>
          {/* Text and actions on the right */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#1976d2',
                mb: 2,
                letterSpacing: 1,
                lineHeight: 1.1,
                fontSize: { xs: 36, sm: 48, md: 56 },
              }}
            >
              Hi, I'm <span style={{ color: '#1565c0' }}>Lokkee</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: '#333', mb: 3, fontWeight: 400, fontSize: { xs: 18, md: 24 } }}
            >
              Software Engineer & Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#444', mb: 4, fontSize: 18, maxWidth: 500 }}
            >
              I build beautiful, performant, and scalable web applications. Passionate about clean code, UI/UX, and solving real-world problems with technology.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#1976d2',
                  fontWeight: 700,
                  px: 4,
                  borderRadius: 3,
                  fontSize: 18,
                  boxShadow: '0 2px 8px #1976d233',
                  '&:hover': {
                    bgcolor: '#1251a3',
                    boxShadow: '0 4px 16px #1976d244',
                  },
                  transition: 'all 0.2s',
                }}
                href="/cv.pdf"
                target="_blank"
              >
                Download CV
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  color: '#1976d2',
                  borderColor: '#1976d2',
                  fontWeight: 700,
                  px: 4,
                  borderRadius: 3,
                  fontSize: 18,
                  '&:hover': {
                    bgcolor: '#e3f0ff',
                    borderColor: '#1251a3',
                  },
                  transition: 'all 0.2s',
                }}
              >
                Contact Me
              </Button>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
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
                    bgcolor: 'white',
                    border: `1.5px solid ${item.color}`,
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: item.color,
                      color: 'white',
                      boxShadow: `0 4px 16px ${item.color}33`,
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* What I Do Section */}
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h4"
            sx={{ mb: 4, textAlign: 'center', color: '#1976d2', fontWeight: 700, letterSpacing: 1 }}
          >
            What I Do
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.title}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    bgcolor: 'rgba(255,255,255,0.85)',
                    boxShadow: '0 2px 12px 0 rgba(25, 118, 210, 0.10)',
                    border: '1.5px solid #e3f0ff',
                    textAlign: 'center',
                    minHeight: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.2s',
                    '&:hover': {
                      boxShadow: '0 8px 24px 0 #1976d244',
                      transform: 'translateY(-6px) scale(1.03)',
                      bgcolor: '#f0f8ff',
                    },
                  }}
                >
                  <Typography variant="h1" sx={{ mb: 2, fontSize: '3rem' }}>
                    {skill.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ my: 1, color: '#1976d2', fontWeight: 700, fontSize: 22 }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography sx={{ color: '#555', fontSize: 16, lineHeight: 1.7 }}>
                    {skill.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;