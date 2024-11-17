import Buttons from "@/components/Button/Buttons";
import Svg from "@/components/Svg";
import styles from "@/styles/404.module.scss";

export const metadata = {
  title: "404 Page not found | TVloco",
  description: "TVloco",
};
 
export default function NotFound() {
  const buttons = [
    { title: "Go back to the homepage", link: "/", class: "primary" },
  ];

  return (
    <div className={styles.errorPage}>
      <div className={`container`}>
        <div className={styles.content}>
          <a href="/" className={styles.logo}>
            <Svg name="logo" width={80} height={20} />
          </a>
          <h1>Page not found</h1>
          <p>We couldn't find the page you are looking for.</p>
          <Buttons data={buttons} className={styles.buttons} />
        </div>
      </div>
    </div>
  )
}