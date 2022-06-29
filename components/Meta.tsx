import { FC } from "react";
import Head from 'next/head';

const defaultTitle = "Blog";

const SEO: FC<IMeta> = ({ title, description }) => {
  const _title = title ?? defaultTitle;
  const _desc = description ?? '';
  return (
    <Head>
      <title>{_title}</title>
      <meta name='og:title' title='og:title' content={_title} />
      <meta name='description' title='description' content={_desc} />
      <meta name='og:description' title='og:description' content={_desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;

export interface IMeta {
  title?: string
  description?: string
}
