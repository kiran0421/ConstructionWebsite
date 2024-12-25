import React from "react";
import styles from "./Home.module.css";
import BannerCards from "./BannerCards";
const HomeBanner = () => {
  const cardList = [
    {
      id: 1,
      caption: "Completed Projects",
      info: "3",
      image: null,
    },
    {
      id: 2,
      caption: "Satisfied Customers",
      info: "100+",
      image: null,
    },
    {
      id: 3,
      caption: "Years of Experience",
      info: "6+",
      image: null,
    },
  ];
  return (
    <div className={styles.homeBanner}>
      <div className="text-white font-bold text-xl">
        <img className={styles.logo} src="./satyasri_logo.png" alt="Logo" />
      </div>
      <div className={styles.companyText}>Satya Sri Constructions</div>
      <div className={styles.companySubText}>
        Where your dream home takes shape
      </div>
      <div className={styles.bannerContentPadding}>
        {cardList.map((card) => (
          <BannerCards key={card.id} caption={card.caption} info={card.info} />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
