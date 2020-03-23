import React from 'react';
import { Shell } from '@alifd/next';

import Logo from './components/Logo';
import AsideNav from './components/AsideNav';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

import styles from './index.module.scss';

export default function BasicLayout({ children, pathname }) {
  return (
    <Shell type="dark" className={styles.container}>
      <Shell.Branding>
        {/* <Logo /> */}
        <span className={styles.appName}>数据中台</span>
      </Shell.Branding>
      <Shell.Navigation direction="hoz" className={styles.headNav}>
        <HeaderNav pathname={pathname}/>
      </Shell.Navigation>
      <Shell.Action>
        <img src="https://img.alicdn.com/tfs/TB1gOdQRCrqK1RjSZK9XXXyypXa-192-192.png" className={styles.avatar} alt="avatar" />
        <span className={styles.userName}>淘小宝</span>
      </Shell.Action>

      {/* <Shell.Navigation direction="ver">
        <AsideNav pathname={pathname} />
      </Shell.Navigation> */}

      <Shell.Content className={styles.appMain}>{children}</Shell.Content>

      {/* <Shell.Footer>
        <Footer />
      </Shell.Footer> */}
    </Shell>
  );
};
