import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Layout from "../../components/layout";

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="description" content="Learning next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image priority src="/images/profile.jpg" height={144} width={144} />
    </Layout>
  );
};

export default FirstPost;
