import { MAP_KEY } from '@/hooks/useMap';
import { STORE_KEY } from '@/hooks/useStores';
import { NaverMap } from '@/types/map';
import { Store } from '@/types/store';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';
import { generateStoreMarkerIcon } from '@/shared/generateStoreMarkerIcon';
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const { setCurrentStore, clearCurrentStore } = useCurrentStore();

  if (!map || !stores) return <></>;

  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={generateStoreMarkerIcon(store.season, false)}
            key={store.nid}
            onClick={() => {
              setCurrentStore(store);
            }}
          />
        );
      })}
      {currentStore && (
        <Marker
          map={map}
          coordinates={currentStore.coordinates}
          icon={generateStoreMarkerIcon(currentStore.season, true)}
          key={currentStore.nid}
          onClick={clearCurrentStore}
        />
      )}
    </>
  );
};

export default Markers;
