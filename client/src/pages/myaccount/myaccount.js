import React from 'react';

const MyAccount = (props) => {
    return(
        <React.Fragment>
            <div>
                <h1>Account name: {props.loggedIn}</h1>
            </div>
        </React.Fragment>
    );
}
export default MyAccount;