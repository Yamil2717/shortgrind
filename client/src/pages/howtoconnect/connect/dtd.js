import React from 'react';
import './connect.css';

const DayToDie = () => {
    return (
        <React.Fragment>
            <div className='connect-bg connect-dtd'>
                <div className='connect-center'>
                    <div className='connect-div'>
                        <div className='connect-title'>Do you already have a client?</div>
                        <div className='connect-collapsible'>
                            <ul>
                                <li><span className='steps'>Step 1</span> — Get the game from steam and launch the game into the main menu.</li>
                                <li><span className='steps'>Step 2</span> — Go it to "Join Game" and find the Search option towards the top left corner of the screen.</li>
                                <li><span className='steps'>Step 3</span> — Search for "SGG Horde Nights" and connect to the server found with that name.</li>
                                <li><span className='steps'>Step 4</span> — The password to join is</li>
                                <li><div className='realmist'>tacos</div></li>
                                <li><span className='steps'>Step 5</span> — Have fun!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DayToDie;