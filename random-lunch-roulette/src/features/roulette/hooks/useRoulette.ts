import { useState, useCallback, useRef } from 'react';
import { Menu } from '@/types/menu';
import { menus } from '@/data/menus';
import { getRandomMenu, getMenuIndex, calculateTargetRotation } from '@/utils/random';
import { ANIMATION } from '@/data/constants';

interface UseRouletteReturn {
  isSpinning: boolean;
  rotation: number;
  selectedMenu: Menu | null;
  spin: () => void;
  reset: () => void;
}

export const useRoulette = (): UseRouletteReturn => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const animationRef = useRef<number>(0);

  const spin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedMenu(null);

    // 랜덤 메뉴 선택
    const randomMenu = getRandomMenu(menus);
    const menuIndex = getMenuIndex(menus, randomMenu);
    
    // 타겟 회전 각도 계산
    const targetRotation = calculateTargetRotation(rotation, menuIndex, menus.length);

    // 애니메이션 변수
    const startTime = Date.now();
    const startRotation = rotation;
    const duration = ANIMATION.SPIN_DURATION;

    // Easing 함수 (cubic ease-out)
    const easeOut = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    // 애니메이션 루프
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);

      const currentRotation = startRotation + (targetRotation - startRotation) * eased;
      setRotation(currentRotation);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setSelectedMenu(randomMenu);
        setRotation(targetRotation % 360); // 회전 값을 0-360 범위로 정규화
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // 클린업
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpinning, rotation]);

  const reset = useCallback(() => {
    setSelectedMenu(null);
    setIsSpinning(false);
  }, []);

  return {
    isSpinning,
    rotation,
    selectedMenu,
    spin,
    reset,
  };
};
