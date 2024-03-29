import Header from '@/components/common/Header';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '@/types/store';
import useStores from '@/hooks/useStores';
import HomeHeader from '@/components/home/Header';
import DetailSection from '@/components/home/DetailSection';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);
  return (
    <Fragment>
      <HomeHeader />
      <main
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
