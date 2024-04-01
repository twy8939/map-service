import React, { useState } from 'react';
import styles from '@/styles/detail.module.scss';
import useSWR from 'swr';
import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  const handleArrowClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.detailSection} ${
        currentStore ? styles.selected : ''
      } ${expanded ? styles.expanded : ''}`}
    >
      <DetailHeader
        expanded={expanded}
        handleArrowClick={handleArrowClick}
        currentStore={currentStore}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};

export default DetailSection;
