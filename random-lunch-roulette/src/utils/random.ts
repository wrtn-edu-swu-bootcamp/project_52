import { Menu } from '@/types/menu';

/**
 * 랜덤 메뉴 선택
 */
export const getRandomMenu = (menus: Menu[]): Menu => {
  const randomIndex = Math.floor(Math.random() * menus.length);
  return menus[randomIndex];
};

/**
 * 타겟 회전 각도 계산
 */
export const calculateTargetRotation = (
  currentRotation: number,
  menuIndex: number,
  totalMenus: number
): number => {
  const anglePerMenu = 360 / totalMenus;
  const targetAngle = menuIndex * anglePerMenu;
  const minRotations = 5;
  const randomExtraRotations = Math.random() * 2; // 0~2 바퀴 추가

  return (
    currentRotation +
    (minRotations + randomExtraRotations) * 360 +
    targetAngle
  );
};

/**
 * 메뉴 인덱스 찾기
 */
export const getMenuIndex = (menus: Menu[], menu: Menu): number => {
  return menus.findIndex((m) => m.id === menu.id);
};
