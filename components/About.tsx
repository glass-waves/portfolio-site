import styles from '../styles/About.module.css';
import { Scroll } from './Scroll';

export const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.left}>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          reiciendis quidem doloribus suscipit soluta sequi voluptates et esse,
          quia cumque placeat vitae enim amet sapiente debitis quod nihil
          impedit non? Distinctio dolorum voluptatem consequuntur illum officia!
          Enim laborum ullam commodi. Consequatur voluptas esse ut dolore porro
          officiis deleniti eaque? Exercitationem ea fuga repudiandae animi id
          corrupti eaque eligendi consequatur debitis? Eaque unde distinctio
          ipsa doloribus, provident illo autem dignissimos quos commodi nobis
          dolorem reprehenderit id ratione explicabo nam? Nam magnam obcaecati
          accusamus. Officiis placeat perferendis ut adipisci deserunt iste?
          Earum? Ipsa id iure, minus nisi a, deserunt quae dolorem quos
          incidunt, officia perferendis! Laudantium aliquam voluptas numquam
          quibusdam error ad soluta fugiat nam illum et, corporis reprehenderit
          ex sapiente natus.
        </p>
        <Scroll mult={2} positionClass="left">Projects</Scroll>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};
