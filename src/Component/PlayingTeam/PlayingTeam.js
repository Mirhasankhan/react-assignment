import React from 'react';
import './PlayingTeam.css';

const PlayingTeam = () => {
    return (
        <div className="playing-container">
            <h3
                style={{ marginLeft: '140px', border: '2px solid blue', padding: '20px', width: '200px', backgroundColor: 'green', color: 'white', borderRadius: '20px' }}>
                Today's Playing XI
            </h3>
        </div>
    );
};

export default PlayingTeam;