import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../context/scrollProvider';
import styles from '../styles/Scroll.module.css';

type Props = {
  mult: number,
  positionClass: string,
}
export const Scroll: React.FC<Props> = ({ children, mult, positionClass}) => {
  const scroll = useContext(ScrollContext);

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <div className={`${positionClass === "right" ? styles.positionRight : styles.positionLeft} ${scroll >  (windowHeight * mult / 2)? styles.invisible : styles.wrapper}`}>
      <div id={styles.scrollDown}>
        <span className={styles.arrowDown}>
        </span>
        <span id={styles.scrollTitle}>{children}</span>
      </div>
    </div>
  );
};
