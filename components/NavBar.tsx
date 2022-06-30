import { FC } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const isNested = (link: NavItem): link is ILinkTree => Object.hasOwn(link, "links");

const NavigationBar: FC<INavProps> = ({ links }) => {
  return (
    <nav className={styles.container}>
      {links.map((link, i) => {
        return isNested(link) ? (
          <span key={i}>
            {link.path ? <Link href={link.path}>{link.name}</Link> : link.name}
            <div>
              {link.links.map((nested_link, j) => (
                <Link key={j} href={nested_link.path}>{nested_link.name}</Link>
              ))}
            </div>
          </span>
        ) : (
          <Link key={i} href={link.path}>{link.name}</Link>
        );
      })}
    </nav>
  );
}

export default NavigationBar;

interface INavProps {
  links: Array<NavItem>
}

type NavItem = ILink | ILinkTree;

interface ILink {
  name: string
  path: string
}

interface ILinkTree {
  name: string
  path?: string
  links: Array<ILink>
}
