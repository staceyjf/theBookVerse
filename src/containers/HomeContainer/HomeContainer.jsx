import styles from "./HomeContainer.module.scss";
import PeopleIllustration from "../../components/PeopleIllustration/PeopleIllustration";
import Header from "../../components/Header/Header";

function HomeContainer() {
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

export default HomeContainer;
