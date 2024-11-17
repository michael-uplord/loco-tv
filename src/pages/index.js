import React from 'react';
import Head from 'next/head';

export const metadata = {
  title: "TVloco - Show Search",
  description: "TVloco",
};

export default function Home() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <h1>Homepage</h1>
    </>
  )
}
