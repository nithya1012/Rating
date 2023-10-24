import React, {useState} from 'react';
const Rating =()=>{
    const[rating,setRating]=useState(0);
    const handleStarClick =(newRating)=>{
        setRating(newRating);

    };
    return(
        <div>
            <h1>RATING COMPONENT</h1>
            {[1,2,3,4,5].map((star) =>
              <span

              key={star}
             className={
                rating >= star
                ? 'star filled'
                : 'star'
             }
            onClick ={() => handleStarClick(star)}
        >
            &#9733;
        </span>
    )}
    </div>
    
    );
};
export default Rating;