import React from 'react';

import List from './List'

const Picture = props => {
  let listParagraph =
  <ul>
  <li>Asteroids</li>
  <li>Comets</li>
  <li>Moon</li>
  <li>Planets</li>
  <li>Stars</li>
  <li>Sun</li>
  </ul>

  return (
    <div className='box picture'>
      <h1>{props.header}</h1>
      <img alt='Five Cents Change' src={props.src}/>
      <List
        header="Here Is a List"
        paragraph={listParagraph}
      />
    </div>
  )
}

export default Picture;
