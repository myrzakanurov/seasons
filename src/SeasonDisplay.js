import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = function (lat, month) {
    if (month > 2 && month < 9){
        if (lat > 0) {
            return 'summer';
        }else{
            return 'winter';
        }
    }else{
        if (lat < 0){
            return 'winter';
        }else{
            return 'summer';
        }
    }
}

const SeasonDisplay = function (props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const ss = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${ss.iconName} icon`}/>
            <h1>{ss.text}</h1>
            <i className={`icon-right massive ${ss.iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay