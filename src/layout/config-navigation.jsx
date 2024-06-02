import SvgColor from '../components/svg-color';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';


// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`../assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'start writing',
    path: '/dashboard/writing',
    icon: icon('ic_cart')
  },
  {
    title: 'audience',
    // path: 'dashboard/audience',
    // icon: icon('ic_cart'),
    icon: icon('ic_user'),
    children: [
      {
        title: 'Subscribers',
        path: '/dashboard/subscribers',
      },
      {
        title: 'Subsciber Form',
        path: '/dashboard/subscribers-form',
      },
    ],
  },
  {
    title: 'analytics',
    path: '/blog',
    icon: icon('ic_blog'),
    
    children: [
      {
        title: 'Click Rate',
        path: '/dashboard/clickrate',
      },
    ],
  },
  {
    title: 'logout',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;