/**
 * 메뉴 카테고리
 */
export enum MenuCategory {
  RICE = '밥류',
  SOUP = '국/찌개류',
  NOODLE = '면류',
  SNACK = '분식',
  MEAT = '고기류',
  OTHER = '기타',
}

/**
 * 메뉴 인터페이스
 */
export interface Menu {
  /** 고유 ID */
  id: string;
  /** 메뉴명 */
  name: string;
  /** 카테고리 */
  category: MenuCategory;
  /** 간단한 설명 (1줄) */
  description: string;
  /** 이모지 */
  emoji: string;
  /** 룰렛 색상 (HEX) */
  color: string;
}

/**
 * 룰렛 상태
 */
export interface RouletteState {
  isSpinning: boolean;
  rotation: number;
  selectedMenu: Menu | null;
}
