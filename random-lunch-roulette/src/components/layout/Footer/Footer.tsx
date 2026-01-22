import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {currentYear} 랜덤 점심 메뉴 룰렛. All rights reserved.</p>
      </div>
    </footer>
  );
};
