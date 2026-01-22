import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className="emoji">🎯</span>
        <span>랜덤 점심 메뉴 룰렛</span>
      </h1>
      <p className={styles.subtitle}>오늘 점심 뭐 먹지? 룰렛을 돌려보세요!</p>
    </header>
  );
};
