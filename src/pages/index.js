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



// // src/pages/index.js
// import React from 'react';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import { ChevronRight } from 'lucide-react';
// import GhostModel from './GhostModel';  // 替换原来的 MinimalistCube
// import styles from './index.module.css';  // 导入CSS Module
//
// const FeaturedPost = ({ title, excerpt, link }) => (
//     <Link to={link} className={styles.postCard}>
//         <div className={styles.postContent}>
//             <h3 className={styles.postTitle}>{title}</h3>
//             <p className={styles.postExcerpt}>{excerpt}</p>
//             <div className={styles.readMore}>
//                 <span>阅读全文</span>
//                 <ChevronRight />
//             </div>
//         </div>
//     </Link>
// );
//
// const MinimalistHeader = () => (
//     <div className={styles.hero}>
//         <div className={styles.heroContent}>
//             <h1 className={styles.heroTitle}>
//                 极简生活，<br className={styles.breakLine} />
//                 美好生活
//             </h1>
//             <p className={styles.heroSubtitle}>
//                 收录豆瓣极简生活小组精华帖，分享极简主义生活方式。让我们一起探索如何通过减法，获得更有质感的生活。
//             </p>
//             <Link to="/blog" className={styles.heroButton}>
//                 <span>浏览所有文章</span>
//                 <ChevronRight />
//             </Link>
//         </div>
//         <GhostModel />
//     </div>
// );
//
// export default function Home() {
//     const {siteConfig} = useDocusaurusContext();
//     return (
//         <Layout
//             title={siteConfig.title}
//             description="极简生活分享平台"
//         >
//             <main className={styles.main}>
//                 <MinimalistHeader />
//                 <div className={styles.posts}>
//                     <FeaturedPost
//                         title="如何开始极简生活：新手入门指南"
//                         excerpt="从整理衣柜开始，逐步培养极简思维，让生活回归本质。通过具体的行动步骤，建立属于自己的极简生活方式。"
//                         link="/blog/minimalist-beginner-guide"
//                     />
//                     <FeaturedPost
//                         title="数字极简主义：让科技成为工具而非主宰"
//                         excerpt="学会管理手机使用时间，重新定义与科技的关系。探索如何在数字时代保持专注和高效。"
//                         link="/blog/digital-minimalism"
//                     />
//                     <FeaturedPost
//                         title="极简主义者的居住空间"
//                         excerpt="如何打造一个既实用又富有禅意的生活空间。从空间规划到物品收纳，建立令人心安的居所。"
//                         link="/blog/minimalist-living-space"
//                     />
//                 </div>
//             </main>
//         </Layout>
//     );
// }



// // src/pages/index.js
// import React from 'react';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import { ChevronRight } from 'lucide-react';
// import GhostModel from './GhostModel';
// import styles from './index.module.css';
//
// const FeaturedPost = ({ title, excerpt, link }) => (
//     <Link to={link} className={styles.postCard}>
//         <div className={styles.postContent}>
//             <h3 className={styles.postTitle}>{title}</h3>
//             <p className={styles.postExcerpt}>{excerpt}</p>
//             <div className={styles.readMore}>
//                 <span>Read More</span>
//                 <ChevronRight />
//             </div>
//         </div>
//     </Link>
// );
//
// const MinimalistHeader = () => (
//     <div className={styles.hero}>
//         <div className={styles.heroContent}>
//             <h1 className={styles.heroTitle}>
//                 Minimalist Living,<br className={styles.breakLine} />
//                 Beautiful Life
//             </h1>
//             <p className={styles.heroSubtitle}>
//                 Discover the art of minimalist living through curated articles and guides.
//                 Learn how simplifying your life can lead to more meaningful experiences.
//             </p>
//             <Link to="/blog" className={styles.heroButton}>
//                 <span>Browse All Articles</span>
//                 <ChevronRight />
//             </Link>
//         </div>
//         <GhostModel />
//     </div>
// );
//
// export default function Home() {
//     const {siteConfig} = useDocusaurusContext();
//     return (
//         <Layout
//             title={siteConfig.title}
//             description="Minimalist Living Platform"
//         >
//             <main className={styles.main}>
//                 <MinimalistHeader />
//                 <div className={styles.posts}>
//                     <FeaturedPost
//                         title="Getting Started with Minimalism: A Beginner's Guide"
//                         excerpt="Start your minimalist journey with practical steps, from decluttering your wardrobe to developing a minimalist mindset."
//                         link="/blog/minimalist-beginner-guide"
//                     />
//                     <FeaturedPost
//                         title="Digital Minimalism: Technology as a Tool, Not a Master"
//                         excerpt="Learn to manage screen time and redefine your relationship with technology. Discover how to stay focused and productive in the digital age."
//                         link="/blog/digital-minimalism"
//                     />
//                     <FeaturedPost
//                         title="Creating a Minimalist Living Space"
//                         excerpt="Design a functional and zen-inspired living space. From space planning to storage solutions, build a home that brings peace of mind."
//                         link="/blog/minimalist-living-space"
//                     />
//                 </div>
//             </main>
//         </Layout>
//     );
// }



import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ChevronRight } from 'lucide-react';
import ModelViewer from '../components/ModelViewer';
import styles from './index.module.css';

// const FeaturedPost = ({ title, excerpt, link }) => (
//     <Link to={link} className={styles.postCard}>
//         <div className={styles.postContent}>
//             <h3 className={styles.postTitle}>{title}</h3>
//             <p className={styles.postExcerpt}>{excerpt}</p>
//             <div className={styles.readMore}>
//                 <span>Read More</span>
//                 <ChevronRight />
//             </div>
//         </div>
//     </Link>
// );


const FeaturedPost = ({ title, excerpt, link }) => (
    <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postExcerpt}>{excerpt}</p>
        <Link to={link} className={styles.readMore}>
            <span>Read More</span>
            <ChevronRight />
        </Link>
    </div>
);

// const MinimalistHeader = () => (
//     <div className={styles.hero}>
//         <div className={styles.heroContent}>
//             <h1 className={styles.heroTitle}>
//                 Minimalist Living,<br className={styles.breakLine} />
//                 Beautiful Life
//             </h1>
//             <p className={styles.heroSubtitle}>
//                 Discover the art of minimalist living through curated articles and guides.
//                 Learn how simplifying your life can lead to more meaningful experiences.
//             </p>
//             <Link to="/blog" className={styles.heroButton}>
//                 <span>Browse All Articles</span>
//                 <ChevronRight />
//             </Link>
//         </div>
//         <ModelViewer
//             modelPath="/models/ghost_of_tsushiito.glb"
//             position="top-16 right-16"
//             title="Ghost of Tsushima"
//         />
//     </div>
// );


const MinimalistHeader = () => (
    <div className={styles.hero}>
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
                Minimalist Living,<br className={styles.breakLine} />
                Beautiful Life
            </h1>
            <p className={styles.heroSubtitle}>
                Discover the art of minimalist living through curated articles and guides.
                Learn how simplifying your life can lead to more meaningful experiences.
            </p>
            <Link to="/blog" className={styles.heroButton}>
                <span>Browse All Articles</span>
                <ChevronRight />
            </Link>
        </div>
        <div className={styles.heroModelContainer}>
            <ModelViewer
                modelPath="/models/ghost_of_tsushiito.glb"
                position="relative"
                containerStyles={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
                width={500}
                height={500}
                title="Ghost of Tsushima"
            />
        </div>
    </div>
);

const Home = () => {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="Minimalist Living Platform"
        >
            <main className={styles.main}>
                <MinimalistHeader />
                <div className={styles.posts}>
                    {/* First Post */}

                    {/*<div className={styles.postCard}>*/}
                    {/*    <div className={styles.postContent}>*/}
                    {/*        <div className="relative h-[400px]">*/}
                    {/*            <ModelViewer*/}
                    {/*                modelPath="/models/hangers_w_clothes.glb"*/}
                    {/*                position="relative"*/}
                    {/*                containerStyles={{position: 'relative'}}*/}
                    {/*                title="Minimalist Wardrobe"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <FeaturedPost*/}
                    {/*            title="Getting Started with Minimalism: A Beginner's Guide"*/}
                    {/*            excerpt="Start your minimalist journey with practical steps, from decluttering your wardrobe to developing a minimalist mindset."*/}
                    {/*            link="/blog/minimalist-beginner-guide"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={styles.postCard}>
                        <div className={styles.postContainer}>
                            <FeaturedPost
                                title="Getting Started with Minimalism: A Beginner's Guide"
                                excerpt="Start your minimalist journey with practical steps, from decluttering your wardrobe to developing a minimalist mindset."
                                link="/blog/minimalist-beginner-guide"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/hangers_w_clothes.glb"
                                    position="relative"
                                    containerStyles={{
                                        position: 'absolute',
                                        right: '0',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                    width={500}
                                    height={500}
                                    title="Minimalist Wardrobe"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Post */}

                    {/*<div className={styles.postCard}>*/}
                    {/*    <div className={styles.postContainer}>*/}
                    {/*        <FeaturedPost*/}
                    {/*            title="Getting Started with Minimalism: A Beginner's Guide"*/}
                    {/*            excerpt="Start your minimalist journey with practical steps, from decluttering your wardrobe to developing a minimalist mindset."*/}
                    {/*            link="/blog/minimalist-beginner-guide"*/}
                    {/*        />*/}
                    {/*        <div className={styles.postModelContainer}>*/}
                    {/*            <ModelViewer*/}
                    {/*                modelPath="/models/hangers_w_clothes.glb"*/}
                    {/*                position="relative"*/}
                    {/*                containerStyles={{*/}
                    {/*                    position: 'absolute',*/}
                    {/*                    right: '0',*/}
                    {/*                    top: '50%',*/}
                    {/*                    transform: 'translateY(-50%)'*/}
                    {/*                }}*/}
                    {/*                width={500}*/}
                    {/*                height={500}*/}
                    {/*                title="Minimalist Wardrobe"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/* Third Post */}

                    {/*<div className={styles.postCard}>*/}
                    {/*    <div className={styles.postContent}>*/}
                    {/*        <div className="relative h-[400px]">*/}
                    {/*            <ModelViewer*/}
                    {/*                modelPath="/models/painted_vase.glb"*/}
                    {/*                position="relative"*/}
                    {/*                containerStyles={{position: 'relative'}}*/}
                    {/*                title="Digital Minimalism"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <FeaturedPost*/}
                    {/*            title="Digital Minimalism: Technology as a Tool, Not a Master"*/}
                    {/*            excerpt="Learn to manage screen time and redefine your relationship with technology. Discover how to stay focused and productive in the digital age."*/}
                    {/*            link="/blog/digital-minimalism"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={styles.postCard}>
                        <div className={`${styles.postContainer} ${styles.postContainerReverse}`}>
                            <FeaturedPost
                                title="Digital Minimalism: Technology as a Tool, Not a Master"
                                excerpt="Learn to manage screen time and redefine your relationship with technology. Discover how to stay focused and productive in the digital age."
                                link="/blog/digital-minimalism"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/painted_vase.glb"
                                    position="relative"
                                    containerStyles={{
                                        position: 'absolute',
                                        left: '0',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                    width={500}
                                    height={500}
                                    title="Digital Minimalism"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Fourth Post */}

                    {/*<div className={styles.postCard}>*/}
                    {/*    <div className={styles.postContent}>*/}
                    {/*        <div className="relative h-[400px]">*/}
                    {/*            <ModelViewer*/}
                    {/*                modelPath="/models/jacob_barstool_alabaster_and_ash.glb"*/}
                    {/*                position="relative"*/}
                    {/*                containerStyles={{position: 'relative'}}*/}
                    {/*                title="Minimalist Living Space"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <FeaturedPost*/}
                    {/*            title="Creating a Minimalist Living Space"*/}
                    {/*            excerpt="Design a functional and zen-inspired living space. From space planning to storage solutions, build a home that brings peace of mind."*/}
                    {/*            link="/blog/minimalist-living-space"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={styles.postCard}>
                        <div className={styles.postContainer}>
                            <FeaturedPost
                                title="Creating a Minimalist Living Space"
                                excerpt="Design a functional and zen-inspired living space. From space planning to storage solutions, build a home that brings peace of mind."
                                link="/blog/minimalist-living-space"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/jacob_barstool_alabaster_and_ash.glb"
                                    position="relative"
                                    containerStyles={{
                                        position: 'absolute',
                                        right: '0',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                    width={500}
                                    height={500}
                                    title="Minimalist Living Space"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </Layout>
    );
};

export default Home;
