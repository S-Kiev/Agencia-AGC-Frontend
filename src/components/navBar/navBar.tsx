import { FC } from 'react';
import styles from './navBar.module.scss';
import { List } from 'react-bootstrap-icons';
import UserInfoDropdown from './userInfoDropdown';

interface NavBarProps {
  toggled: boolean;
  handleToggleSidebar: (value: boolean) => void;
}

const NavBar: FC<NavBarProps> = ({ toggled, handleToggleSidebar }) => {
  return (
    <header className={styles.container}>
      <List size={50} className={styles.btnToggle} onClick={() => handleToggleSidebar(!toggled)} color="white" />
      <UserInfoDropdown />
    </header>
  );
};

export default NavBar;
