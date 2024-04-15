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
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!currentStore && <p className={styles.title}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={styles.flexRow}>
          <h1 className={styles.title}>{currentStore.name}</h1>
          <button
            className={styles.shareButton}
            onClick={() => {
              copy(location.origin + '/' + currentStore.name);
            }}
            aria-label="매장 페이지 주소 클립보드 복사"
          >
            <AiOutlineShareAlt size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailHeader;
