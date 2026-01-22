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

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    drawWheel(ctx, menus, rotation);
  }, [rotation]);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={`${styles.canvas} ${isSpinning ? styles.spinning : ''}`}
        width={400}
        height={400}
        aria-label="점심 메뉴 룰렛"
        role="img"
      />
    </div>
  );
};
