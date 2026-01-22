import { Button } from '@/components/common/Button';
import styles from './SpinButton.module.css';

interface SpinButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const SpinButton = ({ onClick, disabled }: SpinButtonProps) => {
  return (
    <div className={styles.container}>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="primary"
        size="lg"
        className={styles.button}
      >
        <span className="emoji">🎯</span>
        <span>{disabled ? '돌리는 중...' : '돌리기'}</span>
      </Button>
    </div>
  );
};
