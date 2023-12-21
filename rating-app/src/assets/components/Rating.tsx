import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
const [selectedRating, setSelectedRating] = useState<number>();

function handleRatingClicked(rating:number) {
setSelectedRating(rating) 
}
  return (
    <div className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg"></img>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedbck is
        appreciated to help us improve our service!
      </p>

      <div className={styles.group}> 
      {[1, 2, 3, 4, 5].map((rating) => ( 
         <button 
         onClick={()=> handleRatingClicked(rating)}
          className={styles.rating}
          > 
          {rating} 
          </button>
      ))}
     </div>

      <button  disabled={selectedRating ===undefined} className={styles.submit}> Submit</button>
    </div>
  );
}
