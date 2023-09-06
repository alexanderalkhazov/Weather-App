import { CustomPosition } from "../types/utilities types/geoLocationTypes";

const getCoords = async (): Promise<CustomPosition> => {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise<CustomPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
          const customPosition: CustomPosition = {
            coords: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            },
          };
          resolve(customPosition);
        }, reject);
      });

      return position;
    } catch (error) {
      throw new Error("Failed to get location");
    }
  } else {
    throw new Error("Geolocation not available");
  }
};

export { getCoords };
