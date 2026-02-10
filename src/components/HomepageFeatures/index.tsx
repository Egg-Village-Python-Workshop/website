import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: any;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Python 工作坊",
    Svg: "/img/work.png",
    description: (
      <>蛋蛋村是一個 Python 的工作坊，不定期上架 Python 的技術文章</>
    ),
    url: "/docs/category/-python-觀念",
  },
  {
    title: "孵蛋計畫",
    Svg: "/img/meet.png",
    description: <>孵化每一個蛋，期許未來可以擴大蛋蛋村的版圖</>,
    url: "/docs/intro",
  },
  {
    title: "蛋蛋村新聞",
    Svg: "/img/news.jpg",
    description: <>每當蛋蛋村有重大消息時，就會透過新聞發布</>,
    url: "/blog",
  },
];
function Feature({ title, Svg, description, url }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <a href={url}>
          <img src={Svg} alt="" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
