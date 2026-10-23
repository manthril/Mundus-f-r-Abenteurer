import { componentRegistry } from "../../quartz/components/registry"

export type { LeafletMapPluginOptions, LeafletMapViewConfig, MarkerData } from "./quartz-leaflet-bases-plugin"
export { Infobox, InfoboxOptions } from "./quartz-infobox"
export { init, leafletMapViewRegistration, registerLeafletMap } from "./quartz-leaflet-bases-plugin"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
}

