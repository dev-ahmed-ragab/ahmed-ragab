"use client";

// Re-export SubspaceCommsDeck as SubspaceAntennaRadar for seamless backwards compatibility
// The rotating radar dish graphic has been completely retired in favor of the Subspace Comms Transmission Deck.
export {
  SubspaceCommsDeck,
  SubspaceCommsDeck as SubspaceAntennaRadar,
  type SubspaceCommsDeckProps,
  type SubspaceCommsDeckProps as SubspaceAntennaRadarProps,
} from "./SubspaceCommsDeck";

export { default } from "./SubspaceCommsDeck";
