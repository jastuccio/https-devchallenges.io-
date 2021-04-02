import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Hello Next.js Top Down Starter!</h1>
        <p>open Readme.md for more info</p>
      </Layout>
    </>
  );
}
