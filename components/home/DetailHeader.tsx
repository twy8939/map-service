import React, { Dispatch, SetStateAction } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from '@/styles/detail.module.scss';
import { Store } from '@/types/store';
import { AiOutlineShareAlt } from 'react-icons/ai';
import copy from 'copy-to-clipboard';

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
      {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={styles.flexRow}>
          <p className={styles.title}>{currentStore.name}</p>
          <button
            className={styles.shareButton}
            onClick={() => {
              copy(location.origin + '/' + currentStore.name);
            }}
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailHeader;
