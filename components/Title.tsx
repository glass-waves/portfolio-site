import styles from '../styles/Title.module.css';
import { Scroll } from './Scroll';


export const Title = () => {

  return (
    <section className={styles.titleContainer}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.text}>
        <h1 className={styles.name}>
          <span className={styles.first}>DYLAN</span>
          <span className={styles.last}>WHITE</span>
        </h1>
        <h5 className={styles.developer}>
          <span className={styles.first}>FULL-STACK</span>
          <span className={styles.last}>DEVELOPER</span>
        </h5>
      </div>
      <Scroll mult={1} positionClass="right">
        About
      </Scroll>
    </section>
  );
};
