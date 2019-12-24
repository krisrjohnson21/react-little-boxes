import React from 'react';

const List = props => {
  return (
    <div className='box list'>
      <h1>{props.header}</h1>
      {props.paragraph}
    </div>
  )
}

export default List;
