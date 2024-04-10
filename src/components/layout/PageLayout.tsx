import { useState } from 'react';
import { combineClasses } from '../../utils/utilities';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as MenuIcon } from '../../icons/menu.svg';
import styles from './PageLayout.module.scss';

export interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
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
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About Me</li>
            <li className={styles.navItem}>Portfolio</li>
          </ul>
        </div>
      </nav>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default PageLayout;
