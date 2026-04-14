import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GitHub, url: 'https://github.com/Lokkee-cyber', label: 'GitHub' },
    { icon: LinkedIn, url: 'https://www.linkedin.com/in/waliyu-ismaila-945593399', label: 'LinkedIn' },
    { icon: Email, url: 'mailto:ismailawaliyu@gmail.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        background: 'linear-gradient(180deg, rgba(3, 12, 21, 0.95), rgba(8, 20, 45, 0.95))',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Ismaila Waliyu. Crafted for modern digital products.
          </Typography>
          <Stack direction="row" spacing={1}>
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <IconButton
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  color: '#8aa7ff',
                  '&:hover': { color: '#ffffff' },
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
