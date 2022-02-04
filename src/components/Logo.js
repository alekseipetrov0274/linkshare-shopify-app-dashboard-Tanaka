import PropTypes from 'prop-types';

// material
import Box from '@mui/material/Box';

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src="/images/logo.png" sx={{ ...sx }} />;
}
