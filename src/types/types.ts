export type TileFeature = 'CITY' | 'ROAD' | 'MONASTERY' | 'GRASS'
export type Direction = 'N' | 'E' | 'S' | 'W'
export type EdgeType = 'CITY' | 'ROAD' | 'GRASS'

export interface TileEdge {
  type: EdgeType
  hasShield?: boolean
}

export interface TileData {
  id: string
  name: string
  count: number
  description: string
  edges: Record<Direction, TileEdge>
  features: TileFeature[]
  hasMonastery: boolean
  paths?: {
    from: Direction
    to: Direction
  }[]
}