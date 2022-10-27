import React, { useState } from 'react';
import PlayingTeam from '../PlayingTeam/PlayingTeam';
import Team from '../Team/Team';
import './SelectTeam.css';
import playerData from '../../FakeData/Package.json';

const SelectTeam = () => {
    const data = playerData;
    const [players, setPlayers] = useState(data);
    return (
        <div className="selectTeam-container">
            <div className="team-container">
                {
                    players.map(player => <Team player={player}></Team>)
                }
            </div>
            <div className="playing-container">
                <PlayingTeam></PlayingTeam>
            </div>
        </div>

    );
};

export default SelectTeam;