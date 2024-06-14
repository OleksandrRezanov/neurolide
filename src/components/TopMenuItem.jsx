import classNames from 'classnames';
import '../styles/TopMenuItem.scss';
import { Button } from './Button';
import { buttonTypes } from '../variables/button';

export const TopMenuItem = ({ title, value, lineColor, icon = '' }) => (
  <div className={
    classNames('top-menu-item', {
      'top-menu-item--red': lineColor === 'red',
      'top-menu-item--yellow': lineColor === 'yellow',
      'top-menu-item--green': lineColor === 'green',
      'top-menu-item--purple': lineColor === 'purple',
      'top-menu-item--blue': lineColor === 'blue',
    })
  }>
    <p className='top-menu-item__title'>{title}</p>

    <div className='top-menu-item__body'>
      <p className='top-menu-item__value'>{value}</p>
      {icon !== '' && (
        <div className='top-menu-item__button'>
          <Button type={buttonTypes.icon} icon={icon} />
        </div>
      )}
    </div>
  </div>
);
