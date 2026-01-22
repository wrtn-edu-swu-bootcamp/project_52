import { useRef, useEffect } from 'react';
import { menus } from '@/data/menus';
import { drawWheel } from '../../utils/drawWheel';
import styles from './RouletteWheel.module.css';

interface RouletteWheelProps {
  rotation: number;
  isSpinning: boolean;
}

export const RouletteWheel = ({ rotation, isSpinning }: RouletteWheelProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 고해상도 디스플레이 지원
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // 물리적 픽셀 크기 설정
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // 논리적 크기는 CSS로 제어
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // 스케일 적용 (논리적 좌표를 물리적 픽셀로 변환)
    ctx.scale(dpr, dpr);

    // 논리적 크기로 그리기
    drawWheel(ctx, menus, rotation, rect.width, rect.height);
  }, [rotation]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={`${styles.canvas} ${isSpinning ? styles.spinning : ''}`}
        aria-label="점심 메뉴 룰렛"
        role="img"
      />
    </div>
  );
};
