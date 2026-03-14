import { Box, useMediaQuery, useTheme } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          py: 0,
          px: 0,
          pb: { xs: 9, sm: 0 },
          '& > *': {
            width: '100%',
            maxWidth: '100%',
            '& > .MuiContainer-root': {
              maxWidth: 'lg',
              px: { xs: 2, sm: 3, md: 4 },
            },
          },
        }}
      >
        {children}
      </Box>
      <Footer />
      {isMobile && <BottomNav />}
    </Box>
  );
};

export default Layout;
