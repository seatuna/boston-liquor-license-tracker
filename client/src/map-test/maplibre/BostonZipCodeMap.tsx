import { useRef, useEffect } from "react";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./BostonZipCodeMap.css";
import { positron } from "../tileSources";
import * as BostonZipCodeGeoJSON from "../../data/boston-zip-codes.json";

export const BostonZipCodeMap = () => {
  const mapContainer = useRef(null);
  const map = useRef<Map | null>(null);
  const lng = -71.0565;
  const lat = 42.3555;
  const zoom = 12;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current || "",
      style: positron,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      if (!map.current) return;

      map.current.addSource("boston", {
        type: "geojson",
        data: BostonZipCodeGeoJSON as GeoJSON.FeatureCollection,
      });
      map.current.addLayer({
        id: "boston",
        type: "fill",
        source: "boston",
        layout: {},
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.6,
        },
      });
      map.current.addLayer({
        id: "boston-outline",
        type: "line",
        source: "boston",
        layout: {},
        paint: {
          "line-color": "#088",
          "line-width": 2,
        },
      });
    });
    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        visualizeRoll: true,
        showZoom: true,
        showCompass: true,
      })
    );

    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.current.on("click", "boston", (e) => {
      const coordinates = e.lngLat;
      if (map.current) {
        map.current.getCanvas().style.cursor = "pointer";
        const description = e.features?.[0].properties.ZIP5;
        popup.setLngLat(coordinates).setHTML(description).addTo(map.current);
      }
    });
  }, [lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};
