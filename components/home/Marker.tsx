import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

const Marker = ({ map, coordinates, onClick }: Marker): undefined => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...coordinates),
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
    }
  }, []);
};

export default Marker;
