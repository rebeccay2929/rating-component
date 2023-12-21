import styles from "./Rating.module.css";

export function Rating() {
  return (
    <div className={styles.panel}>
        <img src="/icon-star.svg"></img> 
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedbck is
        appreciated to help us improve our service.
      </p>

      <button> Submit</button>
    </div>
  );
}
