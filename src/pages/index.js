import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { ChevronRight } from 'lucide-react';
import ModelViewer from '../components/ModelViewer';
import styles from './index.module.css';

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
                modelPath="/models/painted_vase.glb"
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

                    <div className={styles.postCard}>
                        <div className={styles.postContainer}>
                            <FeaturedPost
                                title="Getting Started with Minimalism: A Beginner's Guide"
                                excerpt="Start your minimalist journey with practical steps, from decluttering your wardrobe to developing a minimalist mindset."
                                link="/blog/minimalist-beginner-guide"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/plant_-_yucca.glb"
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

                    <div className={styles.postCard}>
                        <div className={`${styles.postContainer} ${styles.postContainerReverse}`}>
                            <FeaturedPost
                                title="Digital Minimalism: Technology as a Tool, Not a Master"
                                excerpt="Learn to manage screen time and redefine your relationship with technology. Discover how to stay focused and productive in the digital age."
                                link="/blog/digital-minimalism"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/cc0_-_10_inch_vinyl_record_sgt_holmes.glb"
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

                    {/* Third Post */}

                    <div className={styles.postCard}>
                        <div className={styles.postContainer}>
                            <FeaturedPost
                                title="Creating a Minimalist Living Space"
                                excerpt="Design a functional and zen-inspired living space. From space planning to storage solutions, build a home that brings peace of mind."
                                link="/blog/minimalist-living-space"
                            />
                            <div className={styles.postModelContainer}>
                                <ModelViewer
                                    modelPath="/models/chair_023.glb"
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
