import React from "react";
import Head from "next/head"; // For setting the page title and metadata
import Header from "../src/components/Header"; // Import your Header component

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your Portfolio - Home</title> {/* Set the page title */}
        <meta name="description" content="Your portfolio description" />{" "}
        {/* Set meta description */}
      </Head>
      <Header />

      {/* Main content of your homepage */}
      <main>
        <h1>Welcome to Your Portfolio</h1>
        <p>
          This is the homepage of your portfolio. You can add your introduction
          and other content here.
        </p>
      </main>
    </div>
  );
};

export default Home;
