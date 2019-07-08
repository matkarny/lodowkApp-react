

import React from 'react'
import './component1.scss'

const currentDate = new Date();
console.log(currentDate);



class Component1 extends React.Component {

    render() {
      return (
        <div className="note">
          <div className="note__date">Data</div>
          <div className="note__description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
        </div>
      );
    }
  }

  export default Component1;