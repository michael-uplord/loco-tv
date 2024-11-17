import styles from "./style.module.scss";
import Svg from '@/components/Svg';

export default function Button({ data }) {
  const buttonClasses = data.class.split(' ').map(className => styles[className] || '').join(' ');

  return data.link ? (
    <a
      href={data.link}
      className={`${styles.button} ${buttonClasses}`}
      target={data.target || undefined}
    >
      { data.title ? (
        data.title
      ) : data.icon && (
        <Svg name={data.icon} width={20} height={20} />
      )}
    </a>
  ) : (
    <button
      type="button"
      className={`${styles.button} ${buttonClasses}`}
      onClick={data.onClick}
    >
      { data.title ? (
        data.title
      ) : data.icon && (
        <Svg name={data.icon} width={20} height={20} />
      )}
    </button>
  );
}
