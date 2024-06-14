import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Manager } from './pages/Manager/Manager';
import { Users } from './pages/Manager/Users';
import { MediaChannels } from './pages/Manager/MediaChannels';
import { Offers } from './pages/Manager/Offers';
import { Profile } from './pages/Manager/Profile';
import { Balance } from './pages/Manager/Balance';
import { Support } from './pages/Manager/Support';
import { Auth } from './pages/Auth';
import { Layout } from './components/Layout';
import { buttonIcons } from './variables/button';
import { Brand } from './pages/Brand/Brand';
import { AddedOffers } from './pages/Brand/AddedOffers';
import { BrandMediaChannels } from './pages/Brand/BrandMediaChannels';
import { BrandOffers } from './pages/Brand/BrandOffers';
import { BrandProfile } from './pages/Brand/BrandProfile';
import { BrandBalance } from './pages/Brand/BrandBalance';
import { BrandSupport } from './pages/Brand/BrandSupport';
import { Affiliat } from './pages/Affiliat/Affiliat';
import { CurrentOffers } from './pages/Affiliat/CurrentOffers';
import { AffiliatMediaChannels } from './pages/Affiliat/AffiliatMediaChannels';
import { AffiliatOffers } from './pages/Affiliat/AffiliatOffers';
import { AffiliatProfile } from './pages/Affiliat/AffiliatProfile';
import { AffiliatBalance } from './pages/Affiliat/AffiliatBalance';
import { AffiliatSupport } from './pages/Affiliat/AffiliatSupport';

const navDataManager = [
  {
    icon: buttonIcons.user,
    title: 'Менеджер',
    path: '/manager',
  },
  {
    icon: buttonIcons.users,
    title: 'Користувачі',
    path: '/users',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Медіа канали',
    path: '/media-channels',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Офери',
    path: '/offers',
  },
  {
    icon: buttonIcons.profile,
    title: 'Профіль',
    path: '/profile',
  },
  {
    icon: buttonIcons.card,
    title: 'Баланс',
    path: '/balance',
  },
  {
    icon: buttonIcons.support,
    title: 'Технічна підтримка',
    path: '/support',
  },
];

const navDataBrand = [
  {
    icon: buttonIcons.user,
    title: 'Бренд',
    path: '/brand',
  },
  {
    icon: buttonIcons.users,
    title: 'Додані офери',
    path: '/added-offers',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Медіа канали',
    path: '/media-channels',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Офери',
    path: '/offers',
  },
  {
    icon: buttonIcons.profile,
    title: 'Профіль',
    path: '/profile',
  },
  {
    icon: buttonIcons.card,
    title: 'Баланс',
    path: '/balance',
  },
  {
    icon: buttonIcons.support,
    title: 'Технічна підтримка',
    path: '/support',
  },
];

const navDataAffiliat = [
  {
    icon: buttonIcons.user,
    title: 'Аффіліат',
    path: '/affiliat',
  },
  {
    icon: buttonIcons.users,
    title: 'Офери у роботі',
    path: '/current-offers',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Медіа канали',
    path: '/media-channels',
  },
  {
    icon: buttonIcons.tablet,
    title: 'Офери',
    path: '/offers',
  },
  {
    icon: buttonIcons.profile,
    title: 'Профіль',
    path: '/profile',
  },
  {
    icon: buttonIcons.card,
    title: 'Баланс',
    path: '/balance',
  },
  {
    icon: buttonIcons.support,
    title: 'Технічна підтримка',
    path: '/support',
  },
];

const accounts = {
  manager: 'manager',
  brand: 'brand',
  affiliat: 'affiliat',
};

const currentAccount = accounts.affiliat ;

function App() {
  return (
    <>
      {currentAccount === accounts.manager && (
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<Layout navData={navDataManager} />}>
              <Route path="/" element={<Navigate to="/auth" />} />
              <Route path="/manager" element={<Manager />} />
              <Route path="/users" element={<Users />} />
              <Route path="/media-channels" element={<MediaChannels />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/support" element={<Support />} />
            </Route>
          </Routes>
        </Router>
      )}

      {currentAccount === accounts.brand && (
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<Layout navData={navDataBrand} />}>
              <Route path="/" element={<Navigate to="/auth" />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/added-offers" element={<AddedOffers />} />
              <Route path="/media-channels" element={<BrandMediaChannels />} />
              <Route path="/offers" element={<BrandOffers />} />
              <Route path="/profile" element={<BrandProfile />} />
              <Route path="/balance" element={<BrandBalance />} />
              <Route path="/support" element={<BrandSupport />} />
            </Route>
          </Routes>
        </Router>
      )}

      {currentAccount === accounts.affiliat && (
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<Layout navData={navDataAffiliat} />}>
              <Route path="/" element={<Navigate to="/auth" />} />
              <Route path="/affiliat" element={<Affiliat />} />
              <Route path="/current-offers" element={<CurrentOffers />} />
              <Route path="/media-channels" element={<AffiliatMediaChannels />} />
              <Route path="/offers" element={<AffiliatOffers />} />
              <Route path="/profile" element={<AffiliatProfile />} />
              <Route path="/balance" element={<AffiliatBalance />} />
              <Route path="/support" element={<AffiliatSupport />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
