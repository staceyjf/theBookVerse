import styles from "./HomeContainer.module.scss";
import PeopleIllustration from "../../components/PeopleIllustration/PeopleIllustration";

function HomeContainer() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h2>Welcome to the bookVerse</h2>
        <div className={styles.img_wrapper}>
          <PeopleIllustration />
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
