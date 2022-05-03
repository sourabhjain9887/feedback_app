import React from 'react'

const FeedbackStats = ({feedback}) => {

    let average;
    let ratingSum=0;
    console.log( feedback)

    average = feedback.map((item)=>(
      item.rating
    ))
    for(let i=0;i<average.length;i++){
      ratingSum = ratingSum + average[i];
    }
    console.log(typeof ratingSum);
    average= ratingSum/feedback.length;
    average= average.toFixed(1).replace(/[.,]0$/, '')
    // average=feedback.reduce((acc, cur)=>{
    //   return acc + cur.rating
    // },0)/feedback.length

    // average= average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats