import styles from './style.module.scss';

import BlockCastSingle from '@/components/Block/Cast/Single';

export default function BlockCast({ cast }) {
  return (
    <div className={styles.castSection}>
      <h2>Cast</h2>
      {cast.length ? (
        <div className={styles.cast}>
          { cast.map((data, index) => (
            <BlockCastSingle key={index} data={data} />
          ))}
        </div>
      ) : (
        <p >No cast members found</p>
      )}
    </div>
  )
}
