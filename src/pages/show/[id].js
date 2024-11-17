import Head from 'next/head';

import BlockShowsSection from '@/components/Block/Shows/Section';

import { removeHTMLTags } from '@/utils/utils';
import { fetchShowData } from '@/utils/fetchShowData';

export async function getServerSideProps({ params }) {
  // Get basic show data
  const { show, error } = await fetchShowData(params.id);

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { show },
  };
}

export default function ShowPage({ show }) {
  const pageTitle = `TVloco - ${show.name}`;
  const cleanDescription = (show.summary ? removeHTMLTags(show.summary) : '') || 'tvLoco';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={cleanDescription} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <BlockShowsSection show={show} />
    </>
  );
}
