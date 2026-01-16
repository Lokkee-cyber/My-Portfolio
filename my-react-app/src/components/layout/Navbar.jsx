import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
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
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.text}
          selected={location.pathname === item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemText 
            primary={item.text} 
            sx={{
              color: location.pathname === item.path ? 'primary.main' : 'inherit',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        color: '#ebf0f4ff',
        bgcolor: '#1976d2',
        boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.08)',
        px: 0,
        py: 0.5,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, sm: 4 }, minHeight: 64 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          
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
              '&:hover': {
                color: '#e6e8eaff',
              },
              transition: 'color 0.2s',
            }}
          >
             Lokkee Corp.
             
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', position: 'relative' }}>
            {menuItems.map((item) => (
              <Box key={item.text} sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? '#06021a' : '#fcfcfd',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    background: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#040220',
                      background: 'rgba(25, 118, 210, 0.08)',
                    },
                    '&:after': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      left: 16,
                      right: 16,
                      bottom: 4,
                      height: 2,
                      borderRadius: 1,
                      background: location.pathname === item.path ? '#05042b' : 'transparent',
                      transition: 'background 0.3s',
                    },
                  }}
                >
                  {item.text}
                </Button>
                {/* Animated active indicator */}
                {location.pathname === item.path && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 16,
                      right: 16,
                      bottom: 2,
                      height: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                      transition: 'all 0.3s',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;