// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
//
// import Heading from '@theme/Heading';
// import styles from './index.module.css';
//
// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
//
// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }



// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ChevronRight } from 'lucide-react';
import MinimalistCube from './MinimalistCube';
import styles from './index.module.css';  // 导入CSS Module

const FeaturedPost = ({ title, excerpt, link }) => (
    <Link to={link} className={styles.postCard}>
        <div className={styles.postContent}>
            <h3 className={styles.postTitle}>{title}</h3>
            <p className={styles.postExcerpt}>{excerpt}</p>
            <div className={styles.readMore}>
                <span>阅读全文</span>
                <ChevronRight />
            </div>
        </div>
    </Link>
);

const MinimalistHeader = () => (
    <div className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
                极简生活，<br className={styles.breakLine} />
                美好生活
            </h1>
            <p className={styles.heroSubtitle}>
                收录豆瓣极简生活小组精华帖，分享极简主义生活方式。让我们一起探索如何通过减法，获得更有质感的生活。
            </p>
            <Link to="/blog" className={styles.heroButton}>
                <span>浏览所有文章</span>
                <ChevronRight />
            </Link>
        </div>
        <MinimalistCube />
    </div>
);

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="极简生活分享平台"
        >
            <main className={styles.main}>
                <MinimalistHeader />
                <div className={styles.posts}>
                    <FeaturedPost
                        title="如何开始极简生活：新手入门指南"
                        excerpt="从整理衣柜开始，逐步培养极简思维，让生活回归本质。通过具体的行动步骤，建立属于自己的极简生活方式。"
                        link="/blog/minimalist-beginner-guide"
                    />
                    <FeaturedPost
                        title="数字极简主义：让科技成为工具而非主宰"
                        excerpt="学会管理手机使用时间，重新定义与科技的关系。探索如何在数字时代保持专注和高效。"
                        link="/blog/digital-minimalism"
                    />
                    <FeaturedPost
                        title="极简主义者的居住空间"
                        excerpt="如何打造一个既实用又富有禅意的生活空间。从空间规划到物品收纳，建立令人心安的居所。"
                        link="/blog/minimalist-living-space"
                    />
                </div>
            </main>
        </Layout>
    );
}

