import React, { useMemo } from 'react';
import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap, { INITAL_ZOOM, INITIAL_CENTER } from '../../hooks/useMap';
import Markers from './Markers';
import useCurrentStore from '@/hooks/useCurrentStore';
import { useRouter } from 'next/router';
import { Coordinates } from '@/types/store';

const MapSection = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []);
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITAL_ZOOM),
    [query]
  );
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );

  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };
  return (
    <>
      <Map
        onLoad={onLoadMap}
        initialZoom={initialZoom}
        initialCenter={initialCenter}
      />
      <Markers />
    </>
  );
};

export default MapSection;
