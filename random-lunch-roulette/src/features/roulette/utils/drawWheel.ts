import { Menu } from '@/types/menu';

/**
 * 룰렛 휠 그리기
 */
export const drawWheel = (
  ctx: CanvasRenderingContext2D,
  menus: Menu[],
  rotation: number = 0,
  width?: number,
  height?: number
): void => {
  const canvas = ctx.canvas;
  // DPR 스케일링을 고려한 논리적 크기 사용
  const logicalWidth = width ?? canvas.width / (window.devicePixelRatio || 1);
  const logicalHeight = height ?? canvas.height / (window.devicePixelRatio || 1);
  const centerX = logicalWidth / 2;
  const centerY = logicalHeight / 2;
  const radius = Math.min(centerX, centerY) - 10;

  // 캔버스 초기화
  ctx.clearRect(0, 0, logicalWidth, logicalHeight);

  // 회전 적용
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((rotation * Math.PI) / 180);
  ctx.translate(-centerX, -centerY);

  const anglePerSlice = (2 * Math.PI) / menus.length;

  menus.forEach((menu, index) => {
    const startAngle = index * anglePerSlice;
    const endAngle = startAngle + anglePerSlice;

    // 섹션 그리기
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();

    ctx.fillStyle = menu.color;
    ctx.fill();

    // 테두리
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 텍스트 그리기
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + anglePerSlice / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 이모지 그리기
    ctx.font = '24px "Pretendard Variable", sans-serif';
    ctx.fillText(menu.emoji, radius * 0.55, -8);
    
    // 메뉴명 그리기
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 16px "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, sans-serif';
    ctx.fillText(menu.name, radius * 0.55, 12);
    ctx.restore();
  });

  ctx.restore();

  // 중앙 원 (장식)
  ctx.beginPath();
  ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // 중앙 원 내부 그라데이션 효과
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(240, 240, 240, 1)');
  ctx.fillStyle = gradient;
  ctx.fill();
};
