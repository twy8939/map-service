import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const NoSSR = dynamic(() => import('@/components/NoSSR'), { ssr: false });

const Example = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((result) => setData(result));
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값 {data}</p>

      <NoSSR />
    </main>
  );
};

export default Example;
