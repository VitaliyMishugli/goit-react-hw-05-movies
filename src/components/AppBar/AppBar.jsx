import { FaHome, FaFilm } from 'react-icons/fa';
import { HeaderBar, NavItem } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home', icon: FaHome },
  { href: 'movies', text: 'Movies', icon: FaFilm },
];

const AppBar = () => {
  return (
    <>
      <HeaderBar >
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="16px" style={{position: 'relative', top: '2px', marginRight: '2px'}} />
            {text}
          </NavItem>
        ))}
      </HeaderBar>
    </>
  );
};
export default AppBar;
