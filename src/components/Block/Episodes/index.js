import { useState, useEffect, useRef } from 'react';
import BlockEpisodesSingle from '@/components/Block/Episodes/Single';
import Buttons from '@/components/Button/Buttons';
import Spinner from '@/components/Spinner';
import styles from './style.module.scss';

export default function BlockEpisodes({ seasons, episodes }) {
  const [loading, setLoading] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(null);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (seasons[0]?.number && currentSeason === null) {
      setCurrentSeason(seasons[0].number);
    }
  }, [seasons, currentSeason]);

  const handleSeasonChange = (seasonNumber) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setLoading(true);
    setCurrentSeason(seasonNumber);

    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const seasonButtons = seasons.map((season) => ({
    title: `Season ${season.number}`,
    class: `${currentSeason === season.number ? 'primary' : 'secondary'}`,
    onClick: () => handleSeasonChange(season.number),
  }));

  const filteredEpisodes =
    currentSeason !== null
      ? episodes.filter((episode) => episode.season === currentSeason)
      : [];

  return (
    <div className={styles.episodesSection}>
      <h2>Episodes</h2>

      {seasons.length > 8 ? (
        <div className="seasonSelector">
          <select
            id="seasonSelect"
            value={currentSeason ?? ''}
            onChange={(e) => handleSeasonChange(Number(e.target.value))} 
          >
            {seasons.map((season) => (
              <option key={season.number} value={season.number}>
                Season {season.number}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <Buttons data={seasonButtons} scroll="true" />
      )}

      <h3>Season {currentSeason}</h3>
      {loading ? (
        <Spinner />
      ) : filteredEpisodes.length ? (
        <div className={styles.episodes}>
          { filteredEpisodes.map((data, index) => (
            <BlockEpisodesSingle key={index} data={data} />
          ))}
        </div>
      ) : (
        <p>No episodes to show</p>
      )}
    </div>
  )
}
