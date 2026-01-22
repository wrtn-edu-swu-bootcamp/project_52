import { Menu } from '@/types/menu';

/**
 * 룰렛 휠 그리기
 */
export const drawWheel = (
  ctx: CanvasRenderingContext2D,
  menus: Menu[],
  rotation: number = 0
): void => {
  const canvas = ctx.canvas;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 10;

  // 캔버스 초기화
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px "Pretendard Variable", sans-serif';
    
    // 이모지와 메뉴명 함께 표시
    const text = `${menu.emoji} ${menu.name}`;
    ctx.fillText(text, radius * 0.65, 0);
    ctx.restore();
  });

  ctx.restore();

  // 중앙 원 (장식)
  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 3;
  ctx.stroke();
};
