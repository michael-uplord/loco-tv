import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import BlockShowsImage from '@/components/Block/Shows/Image';
import BlockEpisodes from '@/components/Block/Episodes';
import BlockCast from '@/components/Block/Cast';
import Buttons from "@/components/Button/Buttons";
import Svg from '@/components/Svg';
import { fetchShowData } from '@/utils/fetchShowData';

export default function BlockShowsSection({ show }) {
  const [images, setImages] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [cast, setCast] = useState([]);
  const [currentTab, setCurrentTab] = useState("episodes");

  const markup = { __html: show.summary };

  const tabButtons = [
    {
      title: "Episodes",
      class: currentTab === "episodes" ? "primary" : "secondary",
      onClick: () => setCurrentTab("episodes"),
    },
    {
      title: "Cast",
      class: currentTab === "cast" ? "primary" : "secondary",
      onClick: () => setCurrentTab("cast"),
    },
  ];

  useEffect(() => {
    const {images } = show._embedded;
    setImages(images);

    const fetchData = async () => {
      try {
        const { show: updatedShow, error } = await fetchShowData(show.id, true);
        if (error) throw new Error(error);
        
        const { seasons, episodes, cast } = updatedShow._embedded;
        setSeasons(seasons);
        setEpisodes(episodes);
        setCast(cast);
      } catch (error) {
        if (error) {
          console.error('Error');
        }
      }
    };
  
    fetchData();
  }, [show.id, show._embedded]);

  return (
    <>
      <BlockShowsImage data={show} images={images} />
      <div className={styles.showSection}>
        <div className={`container ${styles.container}`}>

          <div className={styles.showDetails}>
            <h1>{show.name}</h1>

            {show.rating?.average && (
              <div className={styles.showRating}>
                <Svg name="star-solid" width={20} height={20} />
                {show.rating.average}
              </div>
            )}

            <div dangerouslySetInnerHTML={markup} className={styles.episodeSumary} />
          </div>

          <Buttons data={tabButtons} tabs={true} />

          { currentTab === "episodes" ? (
            <BlockEpisodes seasons={seasons} episodes={episodes} />
          ) : currentTab === "cast" && (
            <BlockCast cast={cast} />
          )}
        </div>
      </div>
    </>
  )
}
