import { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export const getServerSideProps: GetServerSideProps<{ data: number }> = async ({
  res,
}) => {
  const delayInSeconds = 2;
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000);
  });

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  return { props: { data } };
};
