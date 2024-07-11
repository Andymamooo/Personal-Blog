import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Image
        src='/images/profile.jpg' // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt='Your Name'
      />
      <h1 className={styles.title}>
        Read <Link href='/posts/first-post'>this page!</Link>
      </h1>
    </div>
  );
}
