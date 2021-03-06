import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// config
import { HEADER, NAVBAR } from '../../config';
//
import DashboardHeader from './header';
import Footer from './footer';
// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  backgroundColor: '#07030C',
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    paddingBottom: 0,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader />
      <MainStyle>
        <Outlet />
        <Footer />
      </MainStyle>
    </Box>
  );
}
