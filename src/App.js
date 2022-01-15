import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Account from "./pages/Account/Account";
import axios from 'axios';

function App() {

    const [user, setUser] = useState({username: "", email: ""});
    const [isUserLoggedIn, setShowUser] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        const username = localStorage.getItem("username");
        if (accessToken !== null && username !== null) {
            setLoggedInUserHandler(accessToken, username);
        }
      }, []);

    const setLoggedInUserHandler = (accessToken, username) => {
        if (accessToken !== "" && username !== "") {
            setShowUser(true);
            axios.get(('http://localhost:8080/api/v0/users/' + username), {
                headers: {
                    'Authorization': "Bearer " + accessToken
                }
                }).then(res => {
                    setUser({username: res.data.username, email: res.data.email})
                }).catch(err => {
                    console.log(err.response.data);
                });
        } else {
            setShowUser(false);
        }
    }

    return (
        <Router>
            <Navbar username={user.username} isLoggedIn={isUserLoggedIn} setUser={setLoggedInUserHandler}/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" render={() => <SignIn setLoggedInUser={setLoggedInUserHandler}/>} />
                <Route path="/account" render={() => <Account username={user.username} email={user.email} />} />
            </Switch>
        </Router>
    );
}

export default App