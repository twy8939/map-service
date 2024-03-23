import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

const Marker = ({ map, coordinates, icon, onClick }: Marker): undefined => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
        icon,
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }
  }, [coordinates, icon, map, onClick]);
};

export default Marker;
