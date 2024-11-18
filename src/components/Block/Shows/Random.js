import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import BlockShowsSingle from "@/components/Block/Shows/Single";
import { fetchRandomShowsData } from '@/utils/fetchShowsData';

export default function ShowsRandom() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchShows = async () => {
      const { shows: fetchedShows, error: fetchError } = await fetchRandomShowsData();

      if (fetchError) {
        setError(fetchError);
        setShows([]);
      } else {
        setError(null);
        setShows(fetchedShows);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className={styles.randomSection}>
      <div className={`container ${styles.container}`}>
          <h2>Shows with new episodes today</h2>
          {shows.length ? (
            <div className={styles.shows}>
              {shows.map((data, index) => (
                <BlockShowsSingle key={index} data={data._embedded.show} />
              ))}
            </div>
          ) : (
            <p data-cy="noResults" className="textCenter">
              {error}
            </p>
          )}
      </div>
    </div>
  );
}