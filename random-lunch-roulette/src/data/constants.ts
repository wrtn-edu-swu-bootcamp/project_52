/**
 * 애니메이션 설정
 */
export const ANIMATION = {
  /** 룰렛 회전 시간 (ms) */
  SPIN_DURATION: 4000,
  /** 최소 회전 수 */
  MIN_ROTATIONS: 5,
  /** 최대 회전 수 */
  MAX_ROTATIONS: 7,
} as const;

/**
 * 룰렛 설정
 */
export const ROULETTE = {
  /** 룰렛 크기 (데스크톱) */
  SIZE_DESKTOP: 400,
  /** 룰렛 크기 (모바일) */
  SIZE_MOBILE: 280,
  /** 룰렛 크기 (태블릿) */
  SIZE_TABLET: 350,
} as const;

/**
 * 브레이크포인트
 */
export const BREAKPOINTS = {
  MOBILE: 767,
  TABLET: 768,
  DESKTOP: 1024,
} as const;
