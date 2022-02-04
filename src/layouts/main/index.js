import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';

import Sidebar from './sidebar';
import Header from './header';

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: '260px',
  minHeight: '100vh',
  backgroundColor: '#43425d',
  position: 'fixed',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MainWrapper = styled(Stack)(({ theme }) => ({
  width: 'calc(100% - 260px)',
  marginLeft: '260px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginLeft: 0
  }
}));

const MainBody = styled(Box)(({ theme }) => ({
  padding: '0 85px',
  backgroundColor: '#f0f0f7',
  minHeight: 'calc(100vh - 70px)',
  [theme.breakpoints.down('xl')]: {
    padding: '0 40px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  }
}));

export default function MainLayout() {
  return (
    <Stack
      direction='row'
    >
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainWrapper>
        <Header />
        <MainBody>
          <Box sx={{ margin: '30px 0' }}>
            <Outlet />
          </Box>
        </MainBody>
      </MainWrapper>
    </Stack>
  );
}
