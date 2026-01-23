import { Menu } from '@/types/menu';

// 토스 스타일 색상 팔레트
const TOSS_COLORS = [
  '#3182F6', // Blue
  '#00C471', // Green
  '#F04452', // Red
  '#FF9500', // Orange
  '#7C3AED', // Purple
  '#0891B2', // Cyan
  '#EC4899', // Pink
  '#10B981', // Emerald
  '#F59E0B', // Amber
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#8B5CF6', // Violet
];

/**
 * 룰렛 휠 그리기 - Toss Style
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
  const radius = Math.min(centerX, centerY) - 8;

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

    // 토스 스타일 색상 사용
    ctx.fillStyle = TOSS_COLORS[index % TOSS_COLORS.length];
    ctx.fill();

    // 섹션 구분선 (얇은 흰색)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 텍스트 그리기
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(startAngle + anglePerSlice / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 이모지 그리기
    const fontSize = Math.max(16, radius * 0.12);
    ctx.font = `${fontSize}px "Pretendard Variable", sans-serif`;
    ctx.fillText(menu.emoji, radius * 0.6, -fontSize * 0.4);
    
    // 메뉴명 그리기
    ctx.fillStyle = '#ffffff';
    const textSize = Math.max(11, radius * 0.08);
    ctx.font = `600 ${textSize}px "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`;
    ctx.fillText(menu.name, radius * 0.6, fontSize * 0.5);
    ctx.restore();
  });

  ctx.restore();

  // 외곽 테두리 (토스 스타일 - 부드러운 그림자 효과)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 중앙 원 (토스 스타일)
  const centerRadius = Math.max(28, radius * 0.15);
  
  // 그림자 효과
  ctx.beginPath();
  ctx.arc(centerX, centerY, centerRadius + 2, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
  ctx.fill();
  
  // 중앙 원 배경
  ctx.beginPath();
  ctx.arc(centerX, centerY, centerRadius, 0, 2 * Math.PI);
  const gradient = ctx.createRadialGradient(
    centerX - centerRadius * 0.3,
    centerY - centerRadius * 0.3,
    0,
    centerX,
    centerY,
    centerRadius
  );
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#f8f9fa');
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // 중앙 원 테두리
  ctx.strokeStyle = '#e5e8eb';
  ctx.lineWidth = 2;
  ctx.stroke();
};
