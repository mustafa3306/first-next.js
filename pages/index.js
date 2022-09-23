import Layout from "../components/layout";
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
        <Head>
            <title>Homepage</title>
        </Head>
      <h1>Welcome to Next.js!</h1>
      <style jsx>{`
      h1 {
        color: white;
        background-color: blue;
      }
      `}</style>
    </Layout>
  );
}

export default HomePage;
