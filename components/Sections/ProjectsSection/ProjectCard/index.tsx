import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { Project } from "interfaces";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.projectCard} role="article">
      <Link href={`/project/${project.slug}`} passHref>
        <a href="">
          <div className={styles.projectImagesWrapper}>
            <Image
              src={project.captions[0].src}
              alt={project.captions[0].alt}
              objectFit="cover"
              priority={true}
              layout="fill"
              loading="eager"
            />

            <div className={styles.content}>
              <h2 className="title3">{project.name}</h2>
              <p>{project.summary}</p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
}
