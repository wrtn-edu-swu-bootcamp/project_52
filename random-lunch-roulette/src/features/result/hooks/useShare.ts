import { useCallback } from 'react';
import { Menu } from '@/types/menu';

interface UseShareReturn {
  shareToWeb: (menu: Menu) => Promise<void>;
  copyLink: () => Promise<void>;
}

export const useShare = (): UseShareReturn => {
  const shareToWeb = useCallback(async (menu: Menu) => {
    if (!navigator.share) {
      // Web Share API를 지원하지 않는 경우 링크 복사로 대체
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다!');
      } catch (error) {
        console.error('링크 복사 실패:', error);
        alert('공유 기능을 사용할 수 없습니다.');
      }
      return;
    }

    try {
      await navigator.share({
        title: `오늘 점심은 ${menu.name}!`,
        text: `랜덤 점심 메뉴 룰렛으로 ${menu.name}이(가) 선택되었어요! 당신도 돌려보세요!`,
        url: window.location.href,
      });
    } catch (error) {
      // AbortError는 사용자가 공유를 취소한 경우이므로 무시
      if ((error as Error).name !== 'AbortError') {
        console.error('공유 실패:', error);
      }
    }
  }, []);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    } catch (error) {
      console.error('링크 복사 실패:', error);
      alert('링크 복사에 실패했습니다.');
    }
  }, []);

  return {
    shareToWeb,
    copyLink,
  };
};
