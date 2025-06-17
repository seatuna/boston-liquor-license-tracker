import { GeoJSON, MapContainer, Marker, Popup } from "react-leaflet";
import * as BostonZipCodeGeoJSON from "../../data/boston-zip-codes.json";
import mapStyles from "./BostonZipCodeMap.module.css";
import "leaflet/dist/leaflet.css";

export const BostonZipCodeMap = () => {
  const logProperties = (feature) => {
    const { properties } = feature;
    const latlng = feature.geometry.coordinates[0][0];
    console.log({ latlng, zip: properties.ZIP5 });
  };

  return (
    <MapContainer
      center={[42.3555, -71.0565]}
      zoom={12}
      scrollWheelZoom={false}
      className={mapStyles.leafletContainer}
    >
      <Marker position={[42.3555, -71.0565]}>
        <Popup className={mapStyles.popupContentWrapper}>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON
        data={BostonZipCodeGeoJSON as GeoJSON.FeatureCollection}
        onEachFeature={logProperties}
      />
    </MapContainer>
  );
};
