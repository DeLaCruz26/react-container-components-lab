// Code MovieReviews Here
import React from 'react'



const MovieReviews = ({reviews, headline, byline, link, summary_short}) => {
    return(
        <div className='review-list'>
            {reviews.map(review => 
                <div key={headline} className='review'>
                    <header>
                        <a className='review-link' href={link}>{headline}</a>
                        <br/>
                        <span className='author'>{byline}</span>
                    </header>
                    <blockquote>{summary_short}</blockquote>
                 </div>
            )}
        </div>
    )
}

export default MovieReviews