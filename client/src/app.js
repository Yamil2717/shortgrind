import React, { useState } from 'react';
import Data from './core/data';
import Routes from './routes/Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {

    let [ loggedIn, setLoggedIn ] = useState(false);
    
    let defaultDataSessionCu = {
        hash_user_0727: null,
        hash_user_0717: null,
        session_cu_user: {
            hash_user_0707: null
        }
    }

    let userData = JSON.parse(localStorage.getItem('session_cu'));

    if (!userData) {
        localStorage.setItem('session_cu', JSON.stringify(defaultDataSessionCu));
        userData = JSON.parse(localStorage.getItem('session_cu'));
    }

    if (userData.hash_user_0727 == null && userData.hash_user_0717 == null) {
        Data.setValue('session', false);
    } else {
        defaultDataSessionCu = JSON.parse(localStorage.getItem('session_cu'));
    }

    return (
        <React.Fragment>
            <Header loggedIn={loggedIn} />
            <Routes loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Footer />
        </React.Fragment>
    )
}

export default App;