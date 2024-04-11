import { useState } from 'react';
import { combineClasses } from '../../utils/utilities';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import styles from './PageLayout.module.scss';
import { useLocation } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';

export interface IPageLayoutProps {}

const PageLayout = (props: IPageLayoutProps) => {
  const location = useLocation();
  const [isSideNavActive, setSideNavActive] = useState(false);

  const handleNavActionClick = () => {
    setSideNavActive((active) => !active);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.topBar}>
        <h3>LOGO</h3>
        <div
          className={combineClasses(
            styles.navActionBtn,
            isSideNavActive && styles.active
          )}
          onClick={handleNavActionClick}
        >
          <CloseIcon className={styles.closeIcon} />
          <MenuIcon className={styles.menuIcon} />
        </div>
      </div>
      <nav
        className={combineClasses(styles.nav, isSideNavActive && styles.active)}
      >
        <div className={styles.navInner}>
          <h3>LOGO</h3>
          <ul>
            <li>
              <NavLink className={styles.navItem} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navItem} to="/">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navItem} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.main}>
        <div className={combineClasses(styles.innerContainer, 'container')}>
          <div className={styles.innerContent}>
            <SwitchTransition>
              <CSSTransition
                timeout={300}
                classNames="page"
                unmountOnExit
                key={location.key}
              >
                <Outlet />
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
