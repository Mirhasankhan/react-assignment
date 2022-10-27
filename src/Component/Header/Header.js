import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://weareipig.com/wp-content/uploads/2020/08/Tottenham-Hotspur-Stadium-Glass-Skybridge-as-seen-on-Dezeen.jpg")`,
            height: '600px', marginBottom: '30px', color: 'Orange', textAlign: 'center' 
          }}>
            <h2>Premiere League Footabll</h2>
            <h2>Liverpool vs Manchester City</h2>
        </div>
    );
};

export default Header;