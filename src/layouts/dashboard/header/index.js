import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../../../components/Logo';
import LanguagePopover from './LanguagePopover';
import useLocales from '../../../hooks/useLocales';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';

const pages = [
  {
    text: 'home',
    id: '#home',
  },
  {
    text: 'about',
    id: '#about',
  },
  {
    text: 'ecosystem',
    id: '#services',
  },
  {
    text: 'blog',
    id: '#blog',
  },
  {
    text: 'contact',
    id: '#contact',
  },
];
// const socials = ['/assets/images/facebook.png', '/assets/images/twitter.png', '/assets/images/instagram.png'];

const ResponsiveAppBar = () => {
  const [navOpen, setNavOpen] = useState('');

  const handleOpenNavMenu = () => {
    setNavOpen(true);
  };
  const handleCloseNavMenu = () => {
    setNavOpen(false);
  };
  const { translate } = useLocales();

  const TypographyStyle = styled(Typography)({
    transition: 'color ease 500ms',
    fontSize: '18px',
    margin: '0 12px',
    '&:hover': {
      color: '#B158E2',
    },
  });
  const OverlayBox = styled('div')({
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '999',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  });

  return (
    <AppBar position="fixed" sx={{ height: '100px', backgroundColor: '#07030C', borderBottom: '2px solid #53536D' }}>
      <OverlayBox sx={{ display: `${navOpen ? 'block' : 'none'}` }} onClick={handleCloseNavMenu} />
      <nav className={navOpen ? 'navbar active' : 'navbar'} >
        <Box sx={{ m: '48px auto 22px', display: 'flex', justifyContent: 'center' }}>
          <Logo type="single_black" />
        </Box>
        {pages.map((page, index) => (
          <Box
            key={index}
            component="a"
            href={page.id}
            sx={{ py: 2, px: 1, color: 'white', display: 'block', textTransform: 'capitalize' }}
            onClick={handleCloseNavMenu}
          >
            <TypographyStyle variant="body1">{translate(page.text)}</TypographyStyle>
          </Box>
        ))}
      </nav>
      <Container maxWidth="xl" sx={{ my: 'auto', px: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Logo type="single" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Box>
              <IconButtonAnimate onClick={handleOpenNavMenu} sx={{ mr: 1, color: '#fff', fontSize: '36px' }}>
                <Iconify icon="eva:menu-2-fill" />
              </IconButtonAnimate>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Logo type="single" />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Box
                key={index}
                component="a"
                href={page.id}
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
              >
                <TypographyStyle variant="body1" textAlign="center">
                  {translate(page.text)}
                </TypographyStyle>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1}>
            {/* {socials.map((path, index) => (
              <Box key={index} component="img" src={path} alt="facebook icon" />
            ))} */}
            <LanguagePopover />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
