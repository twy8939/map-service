import DetailContent from '@/components/home/DetailContent';
import DetailHeader from '@/components/home/DetailHeader';
import { Store } from '@/types/store';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import styles from '@/styles/detail.module.scss';
import { useRouter } from 'next/router';
import useCurrentStore from '@/hooks/useCurrentStore';
import { NextSeo } from 'next-seo';

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();

  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(
      `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`
    );
  };

  const expanded = true;
  return (
    <>
      <NextSeo
        title={store.name}
        description="매장 지도 상세 페이지입니다."
        canonical={`https://map-service-two.vercel.app/${store.name}`}
        openGraph={{
          url: `https://map-service-two.vercel.app/${store.name}`,
        }}
      />
      <div
        className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
      >
        <DetailHeader
          expanded={expanded}
          handleArrowClick={goToMap}
          currentStore={store}
        />
        <DetailContent currentStore={store} expanded={expanded} />
      </div>
    </>
  );
};

export default StoreDetail;
