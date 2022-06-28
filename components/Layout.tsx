import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Inspired by: https://www.geekysweetie.com/

const SEO: FC<ILayoutProps> = ({ title, description }) => {
  const _title = title ?? "Blog";
  return (
    <Head>
      <title>{_title}</title>
      <meta name='og:title' title='og:title' content={_title} />
      <meta name='description' title='description' content={description} />
      <meta name='og:description' title='og:description' content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const Layout: FC<PropsWithChildren<ILayoutProps>> = (props) => {
  const { children, ...details } = props;
  return (
    <>
      <SEO {...details} />
      <header>
        <div>
          <Link href='/'><h1>Nakiri</h1></Link>
          <span>The Best Genshin Impact Guides and more</span>
        </div>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/guides'>Guides</Link>
          <Link href='/videos'>Videos</Link>
          <Link href='/tools'>Tools</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
}

export default Layout;

interface ILayoutProps {
  title?: string
  description?: string
}
