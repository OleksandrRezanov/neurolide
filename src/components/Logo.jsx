import logo from '../img/logo.png';
import '../styles/Logo.scss';

export const Logo = () => (
  <div className='logo'>
    <div className='logo__flex-container'>
      <div className='logo__image-wrapper'>
        <img className='logo__image' src={logo} alt='Neurolide Logo' />
      </div>
      <p className='logo__title'>Neurolide</p>
    </div>
  </div>
);
