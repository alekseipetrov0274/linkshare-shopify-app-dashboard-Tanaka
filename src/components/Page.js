import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const PageLayout = styled(Box)(({ theme }) => ({
}));

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <PageLayout ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </PageLayout>
));

export default Page;
