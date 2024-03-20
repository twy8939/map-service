import Header from '@/components/common/Header';
import Link from 'next/link';
import styles from '../styles/header.module.scss';
import React, { Fragment } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '@/types/store';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            key="button"
            onClick={() => {
              alert('복사');
            }}
            className={styles.box}
            style={{
              marginRight: 8,
            }}
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link key="link" href="/feedback" className={styles.box}>
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
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
