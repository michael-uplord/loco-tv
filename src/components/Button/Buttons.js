import styles from "./style.module.scss";
import Button from "@/components/Button";

export default function Buttons({ data, className, scroll, tabs }) {
  return (
    <div className={`${styles.buttons} ${className} ${scroll ? styles.scroll : ""} ${tabs ? styles.tabs : ""}`}>
      {data.map((button, index) => (
        <Button
          key={index}
          data={{
            ...button,
            link: button.link || null,
            onClick: button.onClick || (() => {}),
          }}
        />
      ))}
    </div>
  );
}
