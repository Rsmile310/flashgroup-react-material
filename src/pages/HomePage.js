// components
import Page from '../components/Page';
import HomeHero from '../components/home/HomeHero';
import Ecosystem from '../components/home/Ecosystem';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page" sx={{ px: 0 }}>
      <HomeHero />
      <Ecosystem />
      <Blog />
      <Contact />
    </Page>
  );
}
