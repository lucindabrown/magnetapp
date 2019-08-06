import React from 'react';


import './School.css';

const school = ( props ) => {
	
	let imgmap = "https://lucindabrown.github.io/data/School/images/"+props.data.short_name+"-map.png";
    let spots = props.data.spots[props.grade];
    let applicants = props.data.applicants[props.grade];
    let probability = 0;
    let ktranslator = props.data.lowest_grade;
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

    if(ktranslator < 1){
        ktranslator = "K";
    }
    
    
    return (
        <div className="school"> 
            <div className="box">
                <div className="map-box">
                <img src={imgmap} alt="map" className="school-map"/>
                <p className="card-subhead">Buses Stop In </p>
                    <ul>{props.data.stops.map(
                    (object, i) => (
                    <li className="card-nabe">{object}</li>)
                    )
                    } </ul>
                </div>
                <p onClick={props.click} className="school-title"> 
                {props.data.name}</p>
                <p className="card-numbers"> <span className="heavy">{spots}</span> spots for <span className="heavy">{applicants}</span> applicants</p>
                <p className="card-numbers">Grades {ktranslator} - {props.data.highest_grade}</p>
            
            
                <h2>{probability}</h2>
            </div>
        </div>
    );
}
export default school;