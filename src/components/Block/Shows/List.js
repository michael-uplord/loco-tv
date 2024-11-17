import { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import BlockShows from "@/components/Block/Shows";
import Spinner from "@/components/Spinner";
import { fetchShowsData } from "@/utils/fetchShowsData";

export default function ShowsList({ query }) {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!query) {
      setShows([]);
      return;
    }

    const fetchShows = async () => {
      setLoading(true);

      try {
        const { shows: fetchedShows, error: fetchError } = await fetchShowsData(query);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          if (fetchError) {
            setError(fetchError);
            setShows([]);
          } else {
            setError(null);
            setShows(fetchedShows);
          }
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Something went wrong while fetching data.");
        setShows([]);
        setLoading(false);
      }
    };

    fetchShows();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div className={styles.homeSection}>
      <div className={`container ${styles.container}`}>
        {loading ? (
          <Spinner />
        ) : shows.length ? (
          <BlockShows shows={shows} />
        ) : (
          query && (
            <p data-cy="noResults" className="textCenter">
              {error || "No shows were found"}
            </p>
          )
        )}
      </div>
    </div>
  );
}
