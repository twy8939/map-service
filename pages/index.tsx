import React, { Fragment, useEffect } from 'react';
import MapSection from '@/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '@/types/store';
import useStores from '@/hooks/useStores';
import HomeHeader from '@/components/home/Header';
import DetailSection from '@/components/home/DetailSection';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title="매장 지도"
        description="매장 지도 서비스"
        canonical="https://map-service-two.vercel.app"
        openGraph={{
          url: 'https://map-service-two.vercel.app',
        }}
      />
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
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}
