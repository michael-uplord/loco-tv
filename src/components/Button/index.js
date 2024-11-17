import styles from "./style.module.scss";

export default function Button({ data }) {
  const buttonClasses = data.class.split(' ').map(className => styles[className] || '').join(' ');

  return data.link ? (
    <a
      href={data.link}
      className={`${styles.button} ${buttonClasses}`}
      target={data.target || undefined}
    >
      {data.title}
    </a>
  ) : (
    <button
      type="button"
      className={`${styles.button} ${buttonClasses}`}
      onClick={data.onClick} // Ensure the onClick is passed and works
    >
      {data.title}
    </button>
  );
}
