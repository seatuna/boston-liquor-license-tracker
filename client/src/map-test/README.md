# Map Proof of Concepts

This folder contains experiments with different mapping libraries to explore what we can do for mapping.

- `maplibre/` contains a map of Boston built with [MapLibre GL](https://maplibre.org/maplibre-gl-js/docs/)
- `tileSources.ts` contains urls to free open source styles that are responsible for loading the actual map tiles. These should only be used for testing purposes and NOT in production

While these open source maps are free to use, there's no guarantee that they will always be up and we shouldn't abuse their server resources. Their servers are likely running through donations and may not be designed for loads beyond some experimentation. We should run our own tile server. Check out [Open Street Map's tile server use policy](https://operations.osmfoundation.org/policies/tiles/).

Some resources for deploying our own tile server:

- [TileServer GL](https://github.com/maptiler/tileserver-gl)
- [OpenMapTiles + TileServer GL](https://openmaptiles.org/docs/host/tileserver-gl)
- [Boston vector and raster map tiles](https://data.maptiler.com/downloads/north-america/us/massachusetts/boston)
