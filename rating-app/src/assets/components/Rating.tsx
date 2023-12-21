import React, { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
const [selectedRating, setSelectedRating] = useState<number>();
const [isSubmitted, setIsSubmitted] = useState(false)

function handleRatingClicked(rating:number) {
setSelectedRating(rating) 
}

function handleFormSubmitted(e:React.FormEvent) {
e.preventDefault();
setIsSubmitted(true) 
}
return isSubmitted ? (
<div className={styles.panel + " center"}   >
     <img src="/illustration-thank-you.svg"></img>
     <h1 className={styles.title}>Thank You</h1>
      <p className={styles.description}>
       We appreciate you taking time to fill this form!</p>
</div>
 ) : (

    
    <form onSubmit={handleFormSubmitted} className={styles.panel}>
      <img className={styles.star} src="/icon-star.svg"></img>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedbck is
        appreciated to help us improve our service!
      </p>

      <div className={styles.group}> 
      {[1, 2, 3, 4, 5].map((rating) => ( 
         <button 
         type="button"
         onClick={()=> handleRatingClicked(rating)}
          className={styles.rating}
          > 
          {rating} 
          </button>
      ))}
     </div>

      <button  disabled={selectedRating ===undefined} className={styles.submit}> Submit</button>
    </form>
  );
}
