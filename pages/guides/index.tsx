import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { getPosts, PostProperties } from '../../lib/notion';
import { slugify } from '../../utils/slug';

const Posts: NextPage<IPageProps> = ({ posts }) => {
  return (
    <main>
      <section>
        {posts.map(post => (
          <Link href={`/guides/${slugify(post.name)}`} key={post.id}>
            <div>
              <div>{post.name}</div>
              <div>{dayjs(post.created_on).format('MMMM D, YYYY')}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Posts;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts }
  };
}

interface IPageProps {
  posts: Array<PostProperties>
}
