import styles from './style.module.scss';
import Image from 'next/image';

export default function BlockShowsImage({ data: show, images }) {
  const backgroundImages = images.filter(image => image.type === "background");
  const lastBackgroundImage = backgroundImages[backgroundImages.length - 1];

  return (
    <>
      {lastBackgroundImage?.resolutions?.original?.url && (
        <div className={styles.showBanner}>
          <div className="container">
            <Image
              src={lastBackgroundImage.resolutions.original.url}
              alt={show.name}
              quality={80}
              width={1432}
              height={805}
              sizes="(min-width: 768px) 1432px, 767px"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
