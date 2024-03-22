import React from 'react';
import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap from '../../hooks/useMap';

const MapSection = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return <Map onLoad={onLoadMap} />;
};

export default MapSection;
