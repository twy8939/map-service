import Header from '@/components/Header';
import Link from 'next/link';
import styles from '../styles/header.module.scss';
import React, { Fragment } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

export default function Home() {
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
    </Fragment>
  );
}
