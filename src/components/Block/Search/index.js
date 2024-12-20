import { useRef, useCallback } from 'react';
import Svg from '@/components/Svg';
import styles from './style.module.scss';

export default function BlockSearch({ onQueryChange, className }) {
  const timeoutRef = useRef(null);

  const handleInputChange = useCallback((event) => {
    const searchQuery = event.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onQueryChange(searchQuery);
    }, 500);
  }, [onQueryChange]);

  return (
    <div className={`${styles.searchBar} ${className}`}>
      <input type="search" data-cy="search" placeholder="Search..." onChange={handleInputChange} />
      <Svg name="magnifying-glass-solid" width={20} height={20} />
    </div>
  );
}
