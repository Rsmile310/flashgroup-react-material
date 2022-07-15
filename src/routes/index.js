import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" replace />, index: true },
        { path: 'home', element: <HomePage /> },
        // { path: 'productdetail/:name/:id', element: <ProductDetail /> },
        // { path: 'mag', element: <MagPage /> },
        // { path: 'collection', element: <ProductPage /> },
        // { path: 'collection/:name', element: <ProductPage /> },
        // { path: 'mag/magdetail/:num', element: <MagDetail /> },
        // { path: 'video', element: <VideoPage /> },
        // { path: 'faq', element: <FaqPage /> },
        // { path: 'about', element: <AboutPage /> },
        // { path: 'glossary', element: <GlossaryPage /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
