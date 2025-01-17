/** @jsx React.createElement */
import React from 'react'

export const SVG_PATTERNS = {
  GRASS: {
    id: "grass",
    pattern: () => (
      <pattern id="grass" patternUnits="userSpaceOnUse" width="10" height="10">
        <circle cx="5" cy="5" r="1" fill="#7a9968" opacity="0.3"/>
      </pattern>
    )
  },
  STONES: {
    id: "stones",
    pattern: () => (
      <pattern id="stones" patternUnits="userSpaceOnUse" width="20" height="20">
        <rect width="20" height="20" fill="#D0B49F"/>
        <path 
          d="M0 0 h20 v10 h-20 z M-10 10 h20 v10 h-20 z M10 10 h20 v10 h-20 z" 
          stroke="#a89080" 
          strokeWidth="0.5" 
          fill="none"
        />
        <path 
          d="M0 0 h20 v10 h-20 v-10 M-10 10 h20 v10 h-20 v-10 M10 10 h20 v10 h-20 v-10" 
          stroke="#b89b8c" 
          strokeWidth="0.3" 
          fill="none"
        />
      </pattern>
    )
  }
} as const;