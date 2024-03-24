import React from 'react';
import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap from '../../hooks/useMap';
import Markers from './Markers';
import useCurrentStore from '@/hooks/useCurrentStore';

const MapSection = () => {
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapSection;
