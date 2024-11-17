import BlockSearch from "@/components/Block/Search";
import styles from "./style.module.scss";

export default function BlockBanner({ title, subtitle, onQueryChange, showSearch }) {

  return (
    <div className={styles.banner}>
      <div className={`container`}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {subtitle && (
            <p>{subtitle}</p>
          )}
          {showSearch && (
            <BlockSearch onQueryChange={onQueryChange} className={styles.searchBar} />
          )}
        </div>
      </div>
    </div>
  )
}
