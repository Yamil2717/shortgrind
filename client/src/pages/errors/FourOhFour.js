import React from 'react';
import { useHistory } from "react-router-dom";
import './errors.css';

const FourOhFour = () => {
    const history = useHistory();

    return(
        <React.Fragment>
            <div className='bg-error'>
                <div className='container-error'>
                    <div className='content-error'>
                        <h2>404</h2>
                        <h4>Ups! Page not found</h4>
                        <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                        <button onClick={() => { history.goBack(); }}>Go Back</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FourOhFour;