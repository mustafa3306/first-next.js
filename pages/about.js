import Layout from "../components/layout";
import Head from "next/head"

function HomePage() {
  return (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
      <h1>You are on about page</h1>
    </Layout>
  );
}

export default HomePage;
