import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn,
  Send
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <Email color="primary" />,
    title: 'Email',
    value: 'ismailawaliyu@gmail.com',
    link: 'mailto:ismailawaliyu@gmail.com'
  },
  {
    icon: <Phone color="primary" />,
    title: 'Phone',
    value: '+234902988655',
    link: 'tel:+234902988655'
  },
  {
    icon: <LocationOn color="primary" />,
    title: 'Location',
    value: 'Ilorin, Nigeria'
  }
];

const socialLinks = [
  {
    icon: <GitHub />,
    label: 'GitHub',
    url: 'https://github.com/Lokkee-cyber'
  },
  {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername'
  },
  {
    icon: <Twitter />,
    label: 'Twitter',
    url: 'https://twitter.com/yourusername'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Contact form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Your message has been submitted — I will reply shortly.',
      severity: 'success'
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, rgba(59, 130, 246, 0.14), transparent 35%), linear-gradient(180deg, #02070f 0%, #060e24 100%)',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: '#ffffff',
                fontWeight: 800,
                mb: 2,
                letterSpacing: '0.02em',
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              Let&apos;s build something together
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#cbd5e1', maxWidth: 760, mx: 'auto', fontSize: { xs: '0.95rem', md: '1rem' } }}
            >
              Whether you have a product idea, a development challenge, or want to work together on a new experience — send a message and I&apos;ll get back to you quickly.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="stretch">
            <Grid item xs={12} lg={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: { xs: 3, md: 5 },
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    backdropFilter: 'blur(18px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ color: '#ffffff', fontWeight: 700, mb: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}
                    >
                      Contact details
                    </Typography>
                    <Typography sx={{ color: '#9ca3af', mb: 4, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Reach out directly or connect through social media for collaborations, hiring, or just a quick hello.
                    </Typography>

                    {contactInfo.map((item) => (
                      <Card
                        key={item.title}
                        elevation={0}
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(148, 163, 184, 0.16)',
                          mb: { xs: 2, md: 3 },
                          px: { xs: 2, md: 3 },
                          py: { xs: 1.5, md: 2 },
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2
                        }}
                      >
                        <Box sx={{ color: '#60a5fa', fontSize: { xs: '1.3rem', md: '1.5rem' } }}>{item.icon}</Box>
                        <Box>
                          <Typography sx={{ color: '#ffffff', fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                            {item.title}
                          </Typography>
                          {item.link ? (
                            <Typography
                              component="a"
                              href={item.link}
                              sx={{
                                color: '#cbd5e1',
                                textDecoration: 'none',
                                fontSize: { xs: '0.85rem', md: '0.95rem' },
                                '&:hover': { color: '#ffffff' }
                              }}
                            >
                              {item.value}
                            </Typography>
                          ) : (
                            <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '0.85rem', md: '0.95rem' } }}>{item.value}</Typography>
                          )}
                        </Box>
                      </Card>
                    ))}
                  </Box>

                    <Typography
                      variant="subtitle1"
                      sx={{ color: '#e2e8f0', mb: 1, fontWeight: 600, fontSize: { xs: '0.95rem', md: '1rem' } }}
                    >
                      Follow me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: { xs: 1, md: 1.5 }, flexWrap: 'wrap' }}>
                      {socialLinks.map((social) => (
                        <IconButton
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          sx={{
                            width: { xs: 40, md: 44 },
                            height: { xs: 40, md: 44 },
                            height: 44,
                            bgcolor: 'rgba(255,255,255,0.08)',
                            color: '#ffffff',
                            transition: 'transform 0.2s ease, background 0.2s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              bgcolor: 'rgba(96, 165, 250, 0.24)'
                            }
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Box>
                
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={7}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 5 },
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 4,
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{ color: '#ffffff', fontWeight: 700, mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}
                    >
                      Send a message
                    </Typography>
                    <Typography sx={{ color: '#cbd5e1', fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Use this form to start a conversation — I&apos;m happy to discuss your next project, contract, or collaboration.
                    </Typography>
                  </Box>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="name"
                          label="Name"
                          value={formData.name}
                          onChange={handleChange}
                          InputLabelProps={{ style: { color: '#cbd5e1' } }}
                          inputProps={{ style: { color: '#f8fafc' } }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#f8fafc',
                              borderColor: 'rgba(148, 163, 184, 0.32)',
                              backgroundColor: 'rgba(255,255,255,0.04)'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(148, 163, 184, 0.24)'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(96, 165, 250, 0.58)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="email"
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          InputLabelProps={{ style: { color: '#cbd5e1' } }}
                          inputProps={{ style: { color: '#f8fafc' } }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#f8fafc',
                              backgroundColor: 'rgba(255,255,255,0.04)'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(148, 163, 184, 0.24)'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(96, 165, 250, 0.58)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="subject"
                          label="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          InputLabelProps={{ style: { color: '#cbd5e1' } }}
                          inputProps={{ style: { color: '#f8fafc' } }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#f8fafc',
                              backgroundColor: 'rgba(255,255,255,0.04)'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(148, 163, 184, 0.24)'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(96, 165, 250, 0.58)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="message"
                          label="Message"
                          multiline
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          InputLabelProps={{ style: { color: '#cbd5e1' } }}
                          inputProps={{ style: { color: '#f8fafc' } }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              color: '#f8fafc',
                              backgroundColor: 'rgba(255,255,255,0.04)'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(148, 163, 184, 0.24)'
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(96, 165, 250, 0.58)'
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            width: '100%',
                            py: 1.5,
                            bgcolor: '#60a5fa',
                            color: '#020617',
                            '&:hover': {
                              bgcolor: '#3b82f6'
                            }
                          }}
                        >
                          Send message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
