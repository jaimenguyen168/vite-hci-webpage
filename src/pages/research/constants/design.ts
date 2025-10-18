/**
 * Design tokens and constants for the Research page
 * Centralized styling values for consistency and easy maintenance
 */

export const DESIGN_TOKENS = {
  colors: {
    primaryRed: '#9D3747',
  },
  spacing: {
    barWidth: 'w-2',
    barHeight: 'h-24',
    videoHeightMobile: 'h-64',
    videoHeightDesktop: 'lg:h-80',
    cardImageHeight: 'h-48',
  },
  responsive: {
    breakpoints: {
      mobile: 'lg',
    },
  },
} as const;
