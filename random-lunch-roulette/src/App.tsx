import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { RoulettePointer } from './features/roulette/components/RoulettePointer';
import { RouletteWheel } from './features/roulette/components/RouletteWheel';
import { SpinButton } from './features/roulette/components/SpinButton';
import { ResultModal } from './features/result/components/ResultModal';
import { useRoulette } from './features/roulette/hooks/useRoulette';
import styles from './App.module.css';

function App() {
  const { isSpinning, rotation, selectedMenu, spin, reset } = useRoulette();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedMenu) {
      setShowModal(true);
    }
  }, [selectedMenu]);

  const handleCloseModal = () => {
    setShowModal(false);
    reset();
  };

  const handleRetry = () => {
    setShowModal(false);
    reset();
    spin();
  };

  return (
    <div className={styles.app}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.rouletteSection}>
          <div className={styles.rouletteContainer}>
            <RoulettePointer />
            <RouletteWheel rotation={rotation} isSpinning={isSpinning} />
          </div>
          <SpinButton onClick={spin} disabled={isSpinning} />
        </section>
      </main>

      <Footer />

      <ResultModal
        menu={selectedMenu}
        isOpen={showModal}
        onClose={handleCloseModal}
        onRetry={handleRetry}
      />
    </div>
  );
}

export default App;
