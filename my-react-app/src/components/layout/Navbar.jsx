import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Resume', path: '/resume' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: 'linear-gradient(180deg, rgba(2,7,15,0.98) 0%, rgba(4,12,28,0.96) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        px: 3,
        pt: 3,
        pb: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: '#cbd5e1' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Button
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              justifyContent: 'flex-start',
              textTransform: 'none',
              color: isActive ? '#60a5fa' : '#cbd5e1',
              fontSize: '1.05rem',
              px: 3,
              py: 1.6,
              borderRadius: 3,
              background: isActive ? 'rgba(96, 165, 250, 0.12)' : 'rgba(255,255,255,0.03)',
              border: isActive ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid rgba(255,255,255,0.08)',
              '&:hover': {
                background: isActive ? 'rgba(96, 165, 250, 0.15)' : 'rgba(96, 165, 250, 0.08)',
                borderColor: 'rgba(96, 165, 250, 0.25)',
                color: '#60a5fa',
              },
              fontWeight: isActive ? 700 : 600,
              transition: 'all 0.2s ease',
            }}
          >
            {item.text}
          </Button>
        );
      })}
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'linear-gradient(180deg, rgba(2,7,15,0.92) 0%, rgba(3,12,25,0.88) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(96, 165, 250, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Toolbar sx={{ px: { xs: 1.5, sm: 4 }, minHeight: { xs: 64, sm: 76 }, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: { xs: '1rem', sm: '1.3rem' },
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                textShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
                WebkitTextFillColor: 'transparent',
              },
            }}
          >
            Waliyu Ismaila
          </Typography>
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ color: '#cbd5e1' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive ? '#60a5fa' : '#cbd5e1',
                    fontWeight: isActive ? 700 : 600,
                    textTransform: 'none',
                    px: 2.5,
                    py: 1,
                    borderRadius: 2.5,
                    position: 'relative',
                    fontSize: '0.95rem',
                    transition: 'all 0.25s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive ? '70%' : '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%)',
                      borderRadius: '2px',
                      transform: 'translateX(-50%)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      background: 'rgba(96, 165, 250, 0.08)',
                      color: '#93c5fd',
                      '&::after': {
                        width: isActive ? '70%' : '50%',
                      },
                    },
                  }}
                >
                  {item.text}
                </Button>
              );
            })}
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            overflow: 'hidden',
            background: 'linear-gradient(180deg, rgba(2,7,15,0.98) 0%, rgba(4,12,28,0.96) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(96, 165, 250, 0.08)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
