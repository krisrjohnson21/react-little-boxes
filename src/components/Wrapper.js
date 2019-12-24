import React from 'react';

import Picture from './Picture'
import Numbers from './Numbers'

const Wrapper = props => {
  let date = (new Date).toString()
  let random = parseInt(Math.random() * 100)
  let numbersParagraph =
  <p>
    Today’s date is
    <strong>&nbsp;{date}&nbsp;</strong>
    and
    <em>&nbsp;{random}&nbsp;</em>
    is a random number.
  </p>

  let imageURL = 'https://i.cbc.ca/1.4157138.1497292999!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/nickelback-photograph.jpg'

  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers
        header="Today's Date and Random Number"
        paragraph={numbersParagraph}
      />
      <Picture
        header="Look at This Picture"
        src={imageURL}
      />
    </div>
  )
}

export default Wrapper;
