import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '@/styles/detail.module.scss';
import { Store } from '@/types/store';

interface Props {
  expanded: boolean;
  handleArrowClick: () => void;
  currentStore?: Store;
}

const DetailHeader = ({ expanded, handleArrowClick, currentStore }: Props) => {
  return (
    <div className={styles.header}>
      <button
        className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
        onClick={handleArrowClick}
        disabled={!currentStore}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      <p className={styles.title}>
        {currentStore?.name || '매장을 선택해주세요'}
      </p>
    </div>
  );
};

export default DetailHeader;
