import styles from './HomePage.module.scss';

export interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  return (
    <>
      <div className={styles.profileContainer}>
        <img src="https://picsum.photos/seed/picsum/200/300" />
      </div>
      <div className={styles.profileDetails}>
        <h3 className={styles.name}>Hello, I'm Thomas</h3>
        <p className={styles.job}>
          I am a Web Developer with expertise in building seamless UI features
        </p>
      </div>
    </>
  );
};

export default HomePage;
