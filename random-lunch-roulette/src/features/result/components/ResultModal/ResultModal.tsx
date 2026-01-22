import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { Menu } from '@/types/menu';
import { useShare } from '../../hooks/useShare';
import styles from './ResultModal.module.css';

interface ResultModalProps {
  menu: Menu | null;
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export const ResultModal = ({ menu, isOpen, onClose, onRetry }: ResultModalProps) => {
  const { shareToWeb } = useShare();

  if (!menu) return null;

  const handleShare = () => {
    shareToWeb(menu);
  };

  const handleRetry = () => {
    onClose();
    onRetry();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className="emoji">🎉</span> 결과 <span className="emoji">🎉</span>
        </h2>
        
        <div className={styles.result}>
          <p className={styles.label}>오늘 점심은!</p>
          <div className={styles.menuName}>
            <span className="emoji" style={{ fontSize: '3rem' }}>{menu.emoji}</span>
            <span>{menu.name}</span>
          </div>
          <p className={styles.description}>{menu.description}</p>
          <span className={styles.category}>카테고리: {menu.category}</span>
        </div>

        <div className={styles.actions}>
          <Button onClick={handleShare} variant="secondary" size="md">
            <span className="emoji">🔗</span>
            <span>공유하기</span>
          </Button>
          <Button onClick={handleRetry} variant="primary" size="md">
            <span className="emoji">🔄</span>
            <span>다시 돌리기</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
};
