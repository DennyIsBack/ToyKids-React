import React from 'react'
import GetStarted from './HomeSection';
import Calendar from './Calendar';


const LandingPageSections = () => {
    return (
        <div>
            <GetStarted />
            <div style={ { display:"flex" } }>
                <Calendar />
            </div>
        </div>
    );
}

export default LandingPageSections;