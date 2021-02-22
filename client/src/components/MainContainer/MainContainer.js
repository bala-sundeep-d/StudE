import React from 'react';
import './MainContainer.css';
import Card from '../Card/Card';


class MainContainer extends React.Component {
 
  render() {
    return (
        <div className="MainContainer">
            <Card term='Fall 2020' title='Database and Warehousing'/>
            <Card term='Fall 2020' title='Adv Software Development'/>
            <Card term='Fall 2020' title='Communications Skills'/>
            <Card term='Winter 2021' title='Cloud Computing' />
            <Card term='Winter 2021' title='Adv Web Development'/>
            <Card term='Winter 2021' title='Technology Innovation'/>
        </div>
     );
  }
}

export default MainContainer;
