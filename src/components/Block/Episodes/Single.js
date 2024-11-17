import Image from 'next/image';
import Svg from '@/components/Svg';
import styles from './style.module.scss';

export default function BlockEpisodesSingle({ data }) {

  const markup = { __html: data.summary };
  return (
    <div className={styles.episode}>
      <div className={styles.episodeImage}>
        {data.image?.original ? (
          <Image
            src={data.image.original}
            alt={data.name}
            quality={80}
            width={200}
            height={136}
            sizes="(min-width: 768px) 200px, 120px"
            loading="lazy"
          />
        ) : (
          <Svg name="image-regular" width={32} height={32} />
        )}
      </div>
      <div className={styles.episodeText}>
        <h3>{data.name}</h3>
        {data.rating?.average && (
          <div className={styles.episodeRating}>
            <Svg name="star-solid" width={20} height={20} />
            {data.rating.average}
          </div>
        )}
        <div dangerouslySetInnerHTML={markup} className={styles.episodeSumary} />
      </div>
    </div>
  )
}
