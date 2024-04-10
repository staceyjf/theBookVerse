import PeopleIllustration from "../PeopleIllustration/PeopleIllustration";
import Header from "../Header/Header";
import styles from "./HomeBanner.module.scss";

function HomeBanner() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <Header text={"Discover your new favourite book"} />
        </div>
        <div className={styles.img_wrapper}>
          <PeopleIllustration />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
