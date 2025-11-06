import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
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
    </Box>
  );
};

export default Layout;