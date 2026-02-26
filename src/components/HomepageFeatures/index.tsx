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
    Svg: "/img/work.webp",
    description: (
      <>蛋蛋村是一個 Python 的工作坊，不定期上架 Python 的技術文章</>
    ),
    url: "/docs/category/-python-觀念",
  },
  {
    title: "孵蛋計畫",
    Svg: "/img/meet.webp",
    description: <>孵化每一個蛋，期許未來可以擴大蛋蛋村的版圖</>,
    url: "/docs/intro",
  },
  {
    title: "蛋蛋村新聞",
    Svg: "/img/news.webp",
    description: <>每當蛋蛋村有重大消息時，就會透過新聞發布</>,
    url: "/blog",
  },
    {
    title: "蛋蛋金融大小事",
    Svg: "/img/finance.webp",
    description: (
      <>關心蛋蛋村的金融大小事</>
    ),
    url: "/finance",
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
