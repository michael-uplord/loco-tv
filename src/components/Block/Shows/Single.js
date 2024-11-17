import styles from './style.module.scss';
import Image from 'next/image';
import Svg from '@/components/Svg';

export default function BlockShowsSingle({ data }) {
  return (
    <a href={`/show/${data.id}`} data-cy="show" className={styles.show}>
      <div className={styles.showImage}>
        {data.image?.original ? (
          <Image
            src={data.image.original}
            alt={data.name}
            quality={80}
            width={120}
            height={176}
          />
        ) : (
          <Svg name="image-regular" width={32} height={32} />
        )}
      </div>
      <div className={styles.showText}>
        <h3>{data.name}</h3>
        <div className={styles.showLanguage}>Language - English</div>
        {data.rating?.average && (
          <div className={styles.showRating}>
            <Svg name="star-solid" width={20} height={20} />
            {data.rating.average}
          </div>
        )}
        <div className={styles.showStatus}>
          <span
            className={`${
              data.status === "Ended"
                ? styles.statusError
                : data.status === "To Be Determined" || data.status === "In Development"
                ? styles.statusInfo
                : ""
            }`}
          >
            {data.status}
          </span>
        </div>
      </div>
    </a>
  )
}
