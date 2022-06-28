import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { getPosts, PostProperties } from '../lib/notion';
import { slugify } from '../utils/slug';

// Inspired by: https://thegamefanatics.com/
// and https://genshin.hoyoverse.com/en/news/

const Home: NextPage<IPageProps> = ({ posts }) => {
  return (
    <main>
      {posts.map(post => (
        <Link href={`/posts/${slugify(post.name)}`} key={post.id}>
          <div>
            <div>{post.name}</div>
            <div>{dayjs(post.created_on).format('MMMM D, YYYY')}</div>
          </div>
        </Link>
      ))}
    </main>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}

interface IPageProps {
  posts: Array<PostProperties>
}
