import { useState, useEffect } from 'react';
import Head from 'next/head';

import BlockShowsSection from '@/components/Block/Shows/Section';

// import BlockShowsSingle from '@/components/Block/Shows/Single';
// import BlockEpisodes from '@/components/Block/Episodes';
// import BlockCast from '@/components/Block/Cast';
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

  // const [seasons, setSeasons] = useState([]);
  // const [episodes, setEpisodes] = useState([]);
  // const [cast, setCast] = useState([]);

  // useEffect(() => {
  //   // Get the rest of the show data
  //   const fetchData = async () => {
  //     try {
  //       const { show: updatedShow, error } = await fetchShowData(show.id, true);
  //       if (error) throw new Error(error);
        
  //       const { seasons, episodes, cast } = updatedShow._embedded;
  //       setSeasons(seasons);
  //       setEpisodes(episodes);
  //       setCast(cast);
  //     } catch (error) {
  //       if (error) {
  //         return {
  //           notFound: true,
  //         };
  //       }
  //     }
  //   };
  
  //   fetchData();
  // }, [show.id]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={cleanDescription} />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <BlockShowsSection show={show} />

      {/* <div className={styles.showSection}>
        <div className="container">
          <h1>{show.name}</h1>
          <BlockShowsSingle data={show} />

          <Buttons data={tabButtons} tabs={true} />

          {currentTab === "episodes" ? (
            <BlockEpisodes seasons={seasons} episodes={episodes} />
          ) : currentTab === "cast" && (
            <BlockCast cast={cast} />
          )}
        </div>
      </div> */}
    </>
  );
}
