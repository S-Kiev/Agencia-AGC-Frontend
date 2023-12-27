import { Link, Outlet } from 'react-router-dom';
import { Menu, MenuItem, SubMenu, Sidebar } from 'react-pro-sidebar';
import { List, ChevronDoubleLeft, ChevronDoubleRight } from 'react-bootstrap-icons';
import styles from '../sidebar/sidebar.module.scss';
import { Button } from 'react-bootstrap';

/*
PENDIENTES:
- Diseño sidebar
- Hacer NavBar para cierre sesion y usuario 
- Probar backend mas reciente y registar cambios en mi strapi local 
*/

const SidebarMenu = ({ collapsed, toggled, handleToggleSidebar, handleCollapsedChange }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        className="app"
        onBackdropClick={() => handleToggleSidebar(false)}
        toggled={toggled}
        breakPoint="md"
        collapsed={collapsed}
      >
        <Menu>
          {collapsed ? (
            <MenuItem icon={<ChevronDoubleRight />} onClick={handleCollapsedChange}></MenuItem>
          ) : (
            <MenuItem suffix={<ChevronDoubleLeft />} onClick={handleCollapsedChange}>
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px',
                }}
              >
                APP
              </div>
            </MenuItem>
          )}
          <MenuItem component={<Link to="/app/home" className="link" />} className="menu1">
            <h2>APP</h2>
          </MenuItem>
          <MenuItem component={<Link to="dashboard" className="link" />}>Dashboard</MenuItem>
          <MenuItem> Invoices </MenuItem>
          <SubMenu label="Charts">
            <MenuItem> Timeline Chart </MenuItem>
            <MenuItem>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets">
            <MenuItem>Current Wallet</MenuItem>
            <MenuItem>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="transactions" className="link" />}>Transactions</MenuItem>
          <SubMenu label="Settings">
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem>Notifications</MenuItem>
          </SubMenu>
          <MenuItem> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <Button className={styles.btnToggle} onClick={() => handleToggleSidebar(!toggled)}>
            <List size={50} />
          </Button>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default SidebarMenu;
