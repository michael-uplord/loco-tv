import styles from './style.module.scss';

import BlockShowsSingle from '@/components/Block/Shows/Single';

export default function BlockShows({ shows }) {
  return (
    <div className={`shows ${styles.shows}`}>
      {shows.map((data, index) => (
        <BlockShowsSingle key={index} data={data.show} />
      ))}
    </div>
  )
}
