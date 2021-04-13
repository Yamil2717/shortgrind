import React from 'react';
import './connect.css';

const ConanExiles = () => {
    return (
        <React.Fragment>
            <div className='connect-bg connect-ce'>
                <div className='connect-center'>
                    <div className='connect-div'>
                        <div className='connect-title'>Guide of how to connect</div>
                        <div className='connect-collapsible'>
                            <ul>
                                <li><span className='steps'>Step 1</span> — Get the game from steam and launch the game into the main menu.</li>
                                <li><span className='steps'>Step 2</span> — Go it to "Play online" and find the direct connect button.</li>
                                <li><span className='steps'>Step 3</span> — Enter the following address in the direct connect box</li>
                                <li><div className='realmist'>45.35.136.202:29900</div></li>
                                <li><span className='steps'>Step 4</span> — You should be prompted to download and install the mods, then reconnect to the server with the steps above.</li>
                                <li><span className='steps'>Step 5</span> — Have fun!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ConanExiles;