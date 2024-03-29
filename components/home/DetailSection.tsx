import React, { useState } from 'react';
import styles from '@/styles/detail.module.scss';
import { IoIosArrowUp } from 'react-icons/io';
import useSWR from 'swr';
import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import DetailContent from './DetailContent';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${
        currentStore ? styles.selected : ''
      } ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.header}>
        <button
          className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`}
          onClick={() => setExpanded(!expanded)}
          disabled={!currentStore}
        >
          <IoIosArrowUp size={20} color="#666666" />
        </button>
        <p className={styles.title}>
          {currentStore?.name || '매장을 선택해주세요'}
        </p>
        <DetailContent currentStore={currentStore} expanded={expanded} />
      </div>
    </div>
  );
};

export default DetailSection;
