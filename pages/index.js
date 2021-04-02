import Head from 'next/head';
import Layout from '../components/Layout';
import Header from '../components/Header';
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Header />
          <h1>Hello Next.js Top Down Starter!</h1>
          <p>open Readme.md for more info</p>
        </main>
      </Layout>
    </>
  );
}
