import React from 'react';
import './connect.css';

const DungeonsAndDragons = () => {
    return (
        <React.Fragment>
            <div className='connect-bg connect-dyd'>
                <div className='connect-center'>
                    <div className='connect-div'>
                        <div className='connect-title'>Guide of how to connect</div>
                        <div className='connect-collapsible'>
                            <ul>
                                <li><span className='steps'>Step 1</span> — Go to the Fantasy Grounds website and download the Unity installer for your system. Also create an account with Fantasy Grounds on the website.</li>
                                <li><span className='steps'>Step 2</span> — <a className='connect-links' href='https://www.fantasygrounds.com/home/FantasyGroundsUnity.php'>Fantasy Grounds Website</a></li>
                                <li><span className='steps'>Step 3</span> — Start the installation of Unity and then launch the program (web guide below)</li>
                                <li><span className='steps'>Step 4</span> — <a className='connect-links' href='https://fantasygroundsunity.atlassian.net/wiki/spaces/FGU/pages/819212/Installing+Fantasy+Grounds+Unity'>Web Guide</a></li>
                                <li><span className='steps'>Step 5</span> — Once your in the launcher, make sure to check for updates.</li>
                                <li><span className='steps'>Step 6</span> — Once updated click "Join Campaign" and in the box to the right of "Join By GM Name" Enter Gromic and select Start.</li>
                                <li><span className='steps'>Step 7</span> — At this point you should have joined the game and you can work with the DM/GM on a new character. Have fun!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DungeonsAndDragons;