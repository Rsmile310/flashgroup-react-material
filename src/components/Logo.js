import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  type: PropTypes.string,
};

export default function Logo({ disabledLink = false, type }) {
  // OR
  // const logo = <img style={{width: '60px'}} src = '/logo/logo_single.png' alt='aa'/>;

  const logo = (
    <Box>
      {type === 'single' && <img src="/logo/logo_flash.svg" width="140px" height="auto" alt="single logo" />}
      {type === 'full' && <img src="/logo/logo_flash.svg" width="140px" height="auto" alt="full logo" />}
      {type === 'single_black' && <img src="/logo/logo_black.png" width="160px" height="auto" alt="single black logo" />}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
