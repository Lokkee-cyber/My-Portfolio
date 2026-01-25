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
import { Menu as MenuIcon } from '@mui/icons-material';
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

  /* =======================
     MOBILE DRAWER (FIXED)
     ======================= */
  const drawer = (
    <Box
      sx={{
        width: 260,
        height: '100%',
        background: 'rgba(3,12,21,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        px: 2,
        pt: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
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
              color: '#ebf0f4ff',
              fontSize: '1rem',
              px: 2,
              py: 1.2,
              borderRadius: 3,

              // glass button
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',

              '&:hover': {
                background: 'rgba(255,255,255,0.15)',
              },

              ...(isActive && {
                background: 'rgba(25,118,210,0.25)',
                border: '1px solid rgba(25,118,210,0.5)',
                fontWeight: 'bold',
              }),
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
      elevation={3}
      sx={{
        color: '#ebf0f4ff',
        bgcolor: '#030c15',
        boxShadow: '0 4px 24px rgba(25, 118, 210, 0.08)',
        py: 0.5,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4 }, minHeight: 64 }}>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#ebf0f4ff',
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              letterSpacing: 1,
              '&:hover': { color: '#e6e8eaff' },
            }}
          >
            Lokkee Corp.
          </Typography>
        </Box>

        {/* Mobile */}
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  borderTopRightRadius: 24,
                  borderBottomRightRadius: 24,
                  overflow: 'hidden',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          /* Desktop menu (unchanged) */
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color:
                    location.pathname === item.path
                      ? '#1976d2'
                      : '#fcfcfd',
                  fontWeight:
                    location.pathname === item.path ? 'bold' : 'normal',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.08)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
