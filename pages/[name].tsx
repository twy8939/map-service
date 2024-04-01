import DetailContent from '@/components/home/DetailContent';
import DetailHeader from '@/components/home/DetailHeader';
import { Store } from '@/types/store';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import styles from '@/styles/detail.module.scss';

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
  const expanded = true;
  return (
    <div
      className={`${styles.detailSection} ${styles.selected} ${styles.expanded}`}
    >
      <DetailHeader
        expanded={expanded}
        handleArrowClick={() => null}
        currentStore={store}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};

export default StoreDetail;
