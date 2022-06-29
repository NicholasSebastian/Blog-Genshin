import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import SEO, { IMeta } from './Meta';
import NavigationBar from './NavBar';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

// Inspired by: https://www.geekysweetie.com/

const Layout: FC<PropsWithChildren<IMeta>> = (props) => {
  const { children, ...details } = props;
  return (
    <>
      <SEO {...details} />
      <header className={styles.header}>
        <Link href='/'><h1>Nakiri</h1></Link>
        <span>The Best Genshin Impact Guides and more</span>
      </header>
      <NavigationBar links={[
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
        { name: 'Reference', links: [
          { name: 'Characters', path: '/characters' },
          { name: 'Weapons', path: '/weapons' },
          { name: 'Artifacts', path: '/artifacts' }
        ]},
        { name: 'Videos', path: '/videos' },
        { name: 'Tools', path: '/tools', links: [
          { name: 'Damage Calculator', path: '/damage-calculator' },
          { name: 'Wish Simulator', path: '/wish-simulator' },
          { name: 'Artifact Simulator', path: '/artifact-simulator' },
          { name: 'Cost Calculator', path: '/cost-calculator' },
          { name: 'Artifact Rater', path: '/artifact-rater' },
          { name: 'Spiral Abyss', path: '/spiral-abyss' },
          { name: 'Card Generator', path: '/card-generator' }
        ]},
        { name: 'About', path: '/about' }
      ]} />
      {children}
      <footer className={styles.footer}>
        <div>
          <a href=''><FaInstagram /></a>
          <a href=''><FaYoutube /></a>
        </div>
        <div>Copyright © Nicholas Sebastian. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Layout;
