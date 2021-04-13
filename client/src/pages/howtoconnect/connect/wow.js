import React from 'react';
import './connect.css';

const WoW = () => {
    return (
        <React.Fragment>
            <div className='connect-bg connect-wow'>
                <div className='connect-center'>
                    <div className='connect-div'>
                        <div className='connect-title'>Do you already have a client?</div>
                        <div className='connect-collapsible'>
                            <ul>
                                <li><span className='steps'>Step 1</span> — Go to your World Of Warcraft folder</li>
                                <li><span className='steps'>Step 2</span> — Open the folder 'Data - enGB' (The "enGB" folder may vary depending on the language of the game)</li>
                                <li><span className='steps'>Step 3</span> — Open 'realmlist.wtf' file with any text editor</li>
                                <li><span className='steps'>Step 4</span> — Delete everything that is there</li>
                                <li><span className='steps'>Step 5</span> — Copy the Realmlist below</li>
                                <li><div className='realmist'>set realmlist logon.shortgrind.com</div></li>
                                <li><span className='steps'>Step 6</span> — Paste it into the 'realmlist.wtf' file, save the changes and close the file</li>
                                <li><span className='steps'>Step 7</span> — Start the game and have fun!</li>
                            </ul>
                        </div>
                    </div>
                    <div className='connect-div'>
                        <div className='connect-title'>Do you don't have the game?</div>
                        <div className='connect-collapsible'>
                            <h1 className='form-logo'>Buy it!</h1>
                            <div className='connect-download'>
                                <button className='btn-download'>Google Drive</button>
                                <button className='btn-download'>Mega.nz</button>
                                <button className='btn-download'>Mediafire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WoW;