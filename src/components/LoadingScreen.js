import NProgress from 'nprogress';
import { useEffect, useMemo } from 'react';

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Logo from './Logo';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background?.default
}));

function ProgressBar() {
  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <RootStyle {...other}>
      <ProgressBar />

      <Logo sx={{ width: 64, height: 64 }} />

      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme) => `solid 3px ${alpha(theme.palette.primary.dark, 0.24)}`
        }}
      />

      <Box
        sx={{
          width: 120,
          height: 120,
          borderRadius: '25%',
          position: 'absolute',
          border: (theme) => `solid 8px ${alpha(theme.palette.primary.dark, 0.24)}`
        }}
      />
    </RootStyle>
  );
}
