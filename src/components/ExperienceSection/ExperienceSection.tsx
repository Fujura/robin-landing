import { FC } from "react";
import { posts } from "./ExperienceData";
import { PostItem } from "./PostItem/PostItem";
import styles from "./ExperienceSection.module.scss";

export const ExperienceSection: FC = () => {
  return (
    <div className="bg-black">
      <div className={styles.container}>
        <div className={styles.text__Container}>
          <p className={styles.subtitle}>work experience</p>
          <h2 className={styles.title}>
            Companies I have worked for in the past
          </h2>
        </div>

        <ul className={`flex ${styles.posts__Container}`}>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              text={post.text}
              titleColor={post.titleColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
