import { Menu, MenuCategory } from '@/types/menu';

export const menus: Menu[] = [
  // 밥류
  {
    id: 'menu-001',
    name: '비빔밥',
    category: MenuCategory.RICE,
    description: '건강하고 맛있는 한식의 정석',
    emoji: '🍚',
    color: '#FF6B35',
  },
  {
    id: 'menu-002',
    name: '김치볶음밥',
    category: MenuCategory.RICE,
    description: '매콤하고 고소한 볶음밥',
    emoji: '🍚',
    color: '#FFD23F',
  },
  {
    id: 'menu-003',
    name: '제육덮밥',
    category: MenuCategory.RICE,
    description: '매콤 달콤한 제육의 조화',
    emoji: '🍚',
    color: '#4ECDC4',
  },
  {
    id: 'menu-004',
    name: '불고기덮밥',
    category: MenuCategory.RICE,
    description: '달콤한 불고기의 매력',
    emoji: '🍚',
    color: '#95E1D3',
  },

  // 국/찌개류
  {
    id: 'menu-005',
    name: '김치찌개',
    category: MenuCategory.SOUP,
    description: '얼큰하고 시원한 한국의 대표 찌개',
    emoji: '🍲',
    color: '#F38181',
  },
  {
    id: 'menu-006',
    name: '된장찌개',
    category: MenuCategory.SOUP,
    description: '구수하고 깊은 맛의 찌개',
    emoji: '🍲',
    color: '#AA96DA',
  },
  {
    id: 'menu-007',
    name: '순두부찌개',
    category: MenuCategory.SOUP,
    description: '부드럽고 얼큰한 순두부',
    emoji: '🍲',
    color: '#FCBAD3',
  },
  {
    id: 'menu-008',
    name: '부대찌개',
    category: MenuCategory.SOUP,
    description: '푸짐하고 얼큰한 부대찌개',
    emoji: '🍲',
    color: '#A8D8EA',
  },
  {
    id: 'menu-021',
    name: '갈비탕',
    category: MenuCategory.SOUP,
    description: '진하고 깊은 국물 맛',
    emoji: '🍲',
    color: '#FFCCB6',
  },
  {
    id: 'menu-022',
    name: '설렁탕',
    category: MenuCategory.SOUP,
    description: '구수하고 진한 사골 국물',
    emoji: '🍲',
    color: '#F3B0C3',
  },
  {
    id: 'menu-023',
    name: '곰탕',
    category: MenuCategory.SOUP,
    description: '깊고 고소한 국물',
    emoji: '🍲',
    color: '#FFD5CD',
  },
  {
    id: 'menu-024',
    name: '해장국',
    category: MenuCategory.SOUP,
    description: '얼큰하고 시원한 국물',
    emoji: '🍲',
    color: '#C1E1C5',
  },

  // 면류
  {
    id: 'menu-009',
    name: '칼국수',
    category: MenuCategory.NOODLE,
    description: '시원하고 담백한 국물 맛',
    emoji: '🍜',
    color: '#FFE66D',
  },
  {
    id: 'menu-010',
    name: '냉면',
    category: MenuCategory.NOODLE,
    description: '시원하고 상큼한 여름 별미',
    emoji: '🍜',
    color: '#A0E7E5',
  },
  {
    id: 'menu-011',
    name: '잔치국수',
    category: MenuCategory.NOODLE,
    description: '담백하고 깔끔한 국수',
    emoji: '🍜',
    color: '#FFAEBC',
  },
  {
    id: 'menu-012',
    name: '비빔국수',
    category: MenuCategory.NOODLE,
    description: '매콤달콤한 비빔 국수',
    emoji: '🍜',
    color: '#FEC8D8',
  },
  {
    id: 'menu-025',
    name: '짜장면',
    category: MenuCategory.NOODLE,
    description: '달콤한 짜장 소스',
    emoji: '🍜',
    color: '#BEDCFA',
  },
  {
    id: 'menu-026',
    name: '짬뽕',
    category: MenuCategory.NOODLE,
    description: '얼큰한 해물 국물',
    emoji: '🍜',
    color: '#FFE5B4',
  },
  {
    id: 'menu-027',
    name: '우동',
    category: MenuCategory.NOODLE,
    description: '부드럽고 따뜻한 국물',
    emoji: '🍜',
    color: '#E0BBE4',
  },

  // 분식
  {
    id: 'menu-013',
    name: '떡볶이',
    category: MenuCategory.SNACK,
    description: '매콤달콤한 분식의 대표',
    emoji: '🍢',
    color: '#FF6F91',
  },
  {
    id: 'menu-014',
    name: '김밥',
    category: MenuCategory.SNACK,
    description: '든든하고 간편한 한 끼',
    emoji: '🍙',
    color: '#C7CEEA',
  },
  {
    id: 'menu-015',
    name: '라면',
    category: MenuCategory.SNACK,
    description: '얼큰하고 따뜻한 국물',
    emoji: '🍜',
    color: '#FFD5CD',
  },

  // 고기류
  {
    id: 'menu-016',
    name: '삼겹살',
    category: MenuCategory.MEAT,
    description: '고소하고 육즙 가득',
    emoji: '🥓',
    color: '#FF9AA2',
  },
  {
    id: 'menu-017',
    name: '불고기',
    category: MenuCategory.MEAT,
    description: '달콤한 양념의 조화',
    emoji: '🍖',
    color: '#FFDAC1',
  },
  {
    id: 'menu-030',
    name: '제육볶음',
    category: MenuCategory.MEAT,
    description: '매콤한 돼지고기 볶음',
    emoji: '🍖',
    color: '#957DAD',
  },

  // 기타
  {
    id: 'menu-018',
    name: '치킨',
    category: MenuCategory.OTHER,
    description: '바삭하고 맛있는 치킨',
    emoji: '🍗',
    color: '#E2F0CB',
  },
  {
    id: 'menu-019',
    name: '족발',
    category: MenuCategory.OTHER,
    description: '쫄깃하고 고소한 족발',
    emoji: '🍖',
    color: '#B5EAD7',
  },
  {
    id: 'menu-020',
    name: '보쌈',
    category: MenuCategory.OTHER,
    description: '부드럽고 담백한 보쌈',
    emoji: '🥓',
    color: '#C7CEEA',
  },
  {
    id: 'menu-028',
    name: '돈까스',
    category: MenuCategory.OTHER,
    description: '바삭한 튀김옷의 매력',
    emoji: '🍖',
    color: '#FFDFD3',
  },
  {
    id: 'menu-029',
    name: '찜닭',
    category: MenuCategory.OTHER,
    description: '매콤달콤한 닭 요리',
    emoji: '🍗',
    color: '#FEC8D8',
  },
];

/**
 * 메뉴 개수
 */
export const MENU_COUNT = menus.length;

/**
 * 카테고리별 메뉴 필터링
 */
export const getMenusByCategory = (category: MenuCategory): Menu[] => {
  return menus.filter((menu) => menu.category === category);
};
