import React from 'react';
import './Team.css';

const Team = ({ player }) => {
    return (
        <section>
         <div className="container">
            <div className="images-container">
                <img src={player.img} alt=""/>
            </div>
            <div>
                <h2>{player.first_name}</h2>
                <h3>Age: {player.age}</h3>
                <h3>Total Played: {player.followers}</h3>
                <button className="select-button">Select</button>
            </div>
        </div>
        </section>
    );
};

export default Team;