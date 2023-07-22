import styles from "./logo.module.css";

export default function Layout({ children }) {
  useEffect(() => {
    const animateHeader = () => {
      const header = document.querySelector(".animated-header");

      // Add a class to trigger the re-order animation after a delay
      setTimeout(() => {
        header.classList.add("animate-reorder");
      }, 2000);
    };

    if (typeof window !== "undefined") {
      animateHeader();
    }
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <span className={styles.text1}>beginning</span>
        <span className={styles.text2}>end</span>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
