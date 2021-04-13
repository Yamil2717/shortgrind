import { useHistory } from 'react-router-dom';

const Logout = (props) => {
    let history = useHistory();
    localStorage.removeItem('username');        
    localStorage.setItem('loggedIn', false);
    props.setLoggedIn(false);
    history.push('/');
    return (null);
}

export default Logout;