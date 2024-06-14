import { NavLink, Outlet } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { buttonTypes, iconButtonTypes } from '../variables/button';

export const Layout = ({ navData }) => {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header-menu">
          <Logo />
          <div className="App__header-burger">
            <Button type={buttonTypes.icon} icon={iconButtonTypes.burgerMenu} />
          </div>
        </div>

        <nav className="App__header-nav">
          <ul className="App__header-list">
            {navData.map((navItem) => (
              <li key={navItem.title}>
                <NavLink to={navItem.path}>
                  {({ isActive }) => (
                    <Button
                      type={buttonTypes.aside}
                      icon={navItem.icon}
                      title={navItem.title}
                      isSelected={isActive}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="App__main">
        <Outlet />
      </main>
    </div>
  );
};
