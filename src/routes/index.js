import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" replace /> },
        { path: '/order',
          children: [
            { path: '/order', element: <Order /> },
            { path: '/order/report', element: <Report /> }
          ]
        },
        { path: '/offer',
          children: [
            { path: '/offer', element: <Offer /> },
            { path: '/offer/coupon', element: <Coupon /> },
            { path: '/offer/link', element: <LinkSetting /> },
            { path: '/offer/link_add', element: <LinkAdd /> },
            { path: '/offer/link_edit/:id', element: <LinkAdd /> },
            { path: '/offer/link_detail/:id', element: <LinkDetail /> },
            { path: '/offer/revenue', element: <Revenue /> },
            { path: '/offer/revenue_add', element: <RevenueAdd /> },
            { path: '/offer/revenue_edit/:id', element: <RevenueAdd /> },
            { path: '/offer/revenue_detail/:id', element: <RevenueDetail /> },
          ]
        },
        { path: '/invoice', element: <Invoice /> },
        { path: '/contact', element: <Contact /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

const NotFound = Loadable(lazy(() => import('../view/404')));
// Main
const Contact = Loadable(lazy(() => import('../view/Contact')));

const Order = Loadable(lazy(() => import('../view/Order/Order')));
const Report = Loadable(lazy(() => import('../view/Order/Report')));

const Offer = Loadable(lazy(() => import('../view/Offer/Offer')));
const Coupon = Loadable(lazy(() => import('../view/Offer/Coupon')));
const LinkSetting = Loadable(lazy(() => import('../view/Offer/LinkSetting')));
const LinkAdd = Loadable(lazy(() => import('../view/Offer/LinkAdd')));
const LinkDetail = Loadable(lazy(() => import('../view/Offer/LinkDetail')));
const Revenue = Loadable(lazy(() => import('../view/Offer/Revenue')));
const RevenueAdd = Loadable(lazy(() => import('../view/Offer/RevenueAdd')));
const RevenueDetail = Loadable(lazy(() => import('../view/Offer/RevenueDetail')));

const Invoice = Loadable(lazy(() => import('../view/Invoice')));

// Authentication
const Login = Loadable(lazy(() => import('../view/Auth/Login')));