import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';
import useSWR, { mutate } from 'swr';

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITAL_ZOOM = 10;

export const MAP_KEY = '/map';

const useMap = () => {
  const { data: map } = useSWR(MAP_KEY);
  const initializeMap = (map: NaverMap) => {
    mutate(MAP_KEY, map);
  };

  const resetMapOptions = () => {
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITAL_ZOOM);
  };

  const getMapOptions = () => {
    const mapCenter = map.getCenter();
    const center = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  };

  return { initializeMap, resetMapOptions, getMapOptions };
};

export default useMap;
