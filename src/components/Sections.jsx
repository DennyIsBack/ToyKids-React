import React from 'react'
import GetStarted from './HomeSection';
import Calendar from './Calendar';


const LandingPage = () => {
    return (
        <div>
            <GetStarted />
            <div style={ { display:"flex" } }>
                <Calendar />
            </div>
        </div>
    );
}

export default LandingPage;