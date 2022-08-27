import React from 'react';

const QuoteBox = ({paragraph, author, changeColors, arrowIcon }) => {
    return (
        <div className='container'>
           
            <p style={{color:changeColors}}> <i style={{color:changeColors}}class="fa-solid fa-quote-left"></i>
  {paragraph}
            </p>
            <small style={{color:changeColors}}>
                {author}
            </small>
            <i style={{color:changeColors}}onClick={arrowIcon} class="fa-solid fa-circle-right"></i>    
        </div>
    );
};

export default QuoteBox;