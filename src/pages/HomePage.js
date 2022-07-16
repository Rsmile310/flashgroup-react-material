// components
import Page from '../components/Page';
import HomeHero from '../components/home/HomeHero';
import Ecosystem from '../components/home/Ecosystem';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import About from '../components/home/About';
import Price from '../components/home/Price';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page" sx={{ px: 0 }}>
      <HomeHero />
      <Price />
      <About />
      <Ecosystem />
      <Blog />
      <Contact />
    </Page>
  );
}
