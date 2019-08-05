import React from 'react';


import './School.css';

const school = ( props ) => {
	
	let imgmap = "https://lucindabrown.github.io/data/School/images/"+props.data.short_name+"-map.png";
    let spots = props.data.spots[props.grade];
    let applicants = props.data.applicants[props.grade];
    let probability = 0;
    if(applicants > 0){
    	probability = 1.0*spots/applicants*12;
    	if (props.phbao) {
    		probability +=1;
    	}
    	probability += props.rejections-1;
    	if (probability < 1) {
    		probability = 1;
    	}

    	if (probability >5) {
    		probability = 5;
    	}
    	probability = Math.round(probability);
    }

    

    return (
        <div className="school"> 
            <p onClick={props.click}> 
            {props.data.name}</p> 
            <p> {props.phbao}</p>
            <p> {spots}</p>
            <p> {applicants}</p>
            <p> {props.rejections}</p>
            <p>Grades {props.data.lowest_grade} - {props.data.highest_grade}</p>
            <p>Bus Stops </p>
            <ul>{props.data.stops.map(
            	(object, i) => (
            	<li>{object}</li>)
            	)
            } </ul>
            <img src={imgmap} alt="map"/>
            <h2>{probability}</h2>
            
        </div>
    );
}
export default school;