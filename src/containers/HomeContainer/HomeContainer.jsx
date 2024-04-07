import styles from "./HomeContainer.module.scss";
import PeopleIllustration from "../../components/PeopleIllustration/PeopleIllustration";

function HomeContainer() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <h2>Welcome to the bookVerse</h2>
        </div>

        <div className={styles.img_wrapper}>
          <PeopleIllustration />
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
