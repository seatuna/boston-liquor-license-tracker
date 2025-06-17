import { createFileRoute } from "@tanstack/react-router";
import { BostonZipCodeMap } from "../../map-test/leaflet/BostonZipCodeMap";

export const Route = createFileRoute("/map-test/leaflet")({
  component: BostonZipCodeMap,
});
