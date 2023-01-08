import React from 'react';
import Tour from './Tour';

const Component = ({ data, removeData }) => {
  return <>
    {data.map((data) => {
      return <div className="container" key={data.id} >
        <Tour  {...data} removeData={removeData} />
      </div>
    })}
  </>
}

export default Component;