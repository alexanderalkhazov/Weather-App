import { CustomPosition } from "../common/types/geoLocationTypes";

const getCoords = async (): Promise<CustomPosition> => {
  if (!("geolocation" in navigator)) {
    throw new Error("Geolocation not available");
  }
  return new Promise<CustomPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ coords: { latitude: pos.coords.latitude, longitude: pos.coords.longitude } }),
      (error) => reject(new Error(`Geolocation error: ${error.message}`))
    );
  });
};

export { getCoords };
