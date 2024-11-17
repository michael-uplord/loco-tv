import styles from './style.module.scss';
import Image from 'next/image';
import Svg from '@/components/Svg';

export default function BlockCastSingle({ data }) {
  const person = data?.person; // Safe access
  const character = data?.character;

  if (!person) {
    // Optional: Render a fallback UI if person data is missing
    return (
      <div className={styles.people}>
        <div className={styles.peopleImage}>
          <Svg name="image-regular" width={32} height={32} />
        </div>
        <div className={styles.peopleText}>
          <h3>Unknown</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.people}>
      <div className={styles.peopleImage}>
        {person.image?.original ? (
          <Image
            src={person.image.original}
            alt={person.name}
            quality={80}
            width={120}
            height={176}
          />
        ) : (
          <Svg name="image-regular" width={32} height={32} />
        )}
      </div>
      <div className={styles.peopleText}>
        <h3>{person.name}</h3>
        <h4>{character.name}</h4>
      </div>
    </div>
  );
}
