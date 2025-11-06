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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I will get back to you soon.',
      severity: 'success'
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      value: '+1 234 567 890',
      link: 'tel:+1234567890'
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Location',
      value: 'City, Country'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/yourusername'
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
        duration: 0.5,
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(25, 118, 210, 0.1)' }}>
              Get In Touch
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              I'm always open to new opportunities and interesting projects.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Card
                      key={info.title}
                      sx={{
                        mb: 2,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)',
                        border: '1px solid rgba(25, 118, 210, 0.1)',
                        boxShadow: '0 4px 12px rgba(25, 118, 210, 0.08)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(25, 118, 210, 0.15)',
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {info.icon}
                          <Typography variant="h6" sx={{ ml: 1, color: '#1976d2', fontWeight: 600 }}>
                            {info.title}
                          </Typography>
                        </Box>
                        {info.link ? (
                          <Typography
                            component="a"
                            href={info.link}
                            sx={{
                              textDecoration: 'none',
                              color: 'text.secondary',
                              '&:hover': {
                                color: '#1976d2',
                              },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography color="text.secondary">
                            {info.value}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </Box>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center', background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)', border: '1px solid rgba(25, 118, 210, 0.1)' }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
                    Follow Me
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {socialLinks.map((social) => (
                      <IconButton
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          color: '#1976d2',
                          '&:hover': {
                            color: '#1565c0',
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ p: 4, background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)', border: '1px solid rgba(25, 118, 210, 0.1)' }}>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={4}
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          fullWidth
                          sx={{
                            bgcolor: '#1976d2',
                            '&:hover': {
                              bgcolor: '#1565c0',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 12px rgba(25, 118, 210, 0.2)'
                            },
                            transition: 'all 0.3s ease-in-out'
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
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