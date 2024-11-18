import React, { useState } from 'react';
import Head from 'next/head';
import ShowsRandom from '@/components/Block/Shows/Random';
import ShowsList from '@/components/Block/Shows/List';
import BlockBanner from '@/components/Block/Banner';

export const metadata = {
  title: "TVloco - Show Search",
  description: "TVloco",
};

export default function Home() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <BlockBanner
        title={"Find your TV series"}
        subtitle={"Enter a series below"}
        onQueryChange={handleQueryChange}
        showSearch={true}
      />

      <ShowsList query={query} />

      <ShowsRandom />
    </>
  )
}
