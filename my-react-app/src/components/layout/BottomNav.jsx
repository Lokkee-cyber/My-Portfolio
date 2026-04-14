import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const routes = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/about', label: 'About', icon: <PersonIcon /> },
    { path: '/projects', label: 'Projects', icon: <WorkIcon /> },
    { path: '/resume', label: 'Resume', icon: <DescriptionIcon /> },
    { path: '/contact', label: 'Contact', icon: <EmailIcon /> },
  ];

  useEffect(() => {
    const currentIndex = routes.findIndex((route) => route.path === location.pathname);
    if (currentIndex !== -1) {
      setValue(currentIndex);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routes[newValue].path);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(2, 7, 15, 0.98)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 1000,
      }}
      elevation={8}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          background: 'transparent',
          '& .MuiBottomNavigationAction-root': {
            color: '#64748b',
            fontSize: '0.7rem',
            transition: 'all 0.2s ease',
            '&.Mui-selected': {
              color: '#60a5fa',
            },
            '&:hover': {
              color: '#94a3b8',
            },
          },
        }}
      >
        {routes.map((route) => (
          <BottomNavigationAction
            key={route.path}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
