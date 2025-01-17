export const PLACEMENT_COLORS = {
  city: { fill: '#FF6B6B', label: '都市' },
  road: { fill: '#4ECDC4', label: '道' },
  field: { fill: '#95A5A6', label: '草原' },
  monastery: { fill: '#9B59B6', label: '修道院' }
} as const;

export type PlacementType = keyof typeof PLACEMENT_COLORS;
