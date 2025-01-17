import React from 'react'
import { SVG_PATTERNS } from '../constants/patterns'
import { COLORS } from '../constants/colors'

// シンプルなタイルのプレビューコンポーネント
const TilePreview: React.FC<{ id: string; type: 'monastery' | 'city' | 'road' }> = ({ id, type }) => {
  return (
    <div className="border rounded-lg p-4">
      <svg viewBox="0 0 100 100" className="w-full">
        <defs dangerouslySetInnerHTML={{ 
          __html: Object.values(SVG_PATTERNS).map(p => p.pattern).join('') 
        }} />
        
        {/* 背景の草原 */}
        <rect width="100" height="100" fill={COLORS.GRASS} />
        <rect width="100" height="100" fill={`url(#${SVG_PATTERNS.GRASS.id})`} />
        
        {/* タイプに応じた要素を描画 */}
        {type === 'monastery' && (
          <g transform="translate(35, 30)">
            <path d="M0 40 h30 v-25 l-15 -15 l-15 15 Z" fill={COLORS.MONASTERY}/>
            <path d="M12 0 v10 M7 5 h10" stroke={COLORS.MONASTERY_DETAILS} strokeWidth="2"/>
            <rect x="10" y="25" width="10" height="15" fill={COLORS.MONASTERY_DETAILS}/>
            <circle cx="15" cy="15" r="4" fill={COLORS.MONASTERY_DETAILS}/>
          </g>
        )}
        {type === 'road' && (
          <rect x="45" y="50" width="10" height="50" fill={COLORS.ROAD}/>
        )}
        {type === 'city' && (
          <>
            <path d="M0 0 L100 0 L75 25 L25 25 Z" fill={`url(#${SVG_PATTERNS.STONES.id})`} />
            <path d="M0 0 L25 25 L75 25 L100 0"
                  stroke={COLORS.WALL}
                  strokeWidth="6"
                  fill="none"/>
          </>
        )}
      </svg>
      <div className="mt-2 text-center font-medium">
        タイル {id}
      </div>
    </div>
  )
}