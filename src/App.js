import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Redirect} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users' render={ () => <UsersContainer/>}/>
                <Route path='/friends'
                       render={() => <Friends state={props.state.sidebar}/>}/>
                <Route path='/' exact={true} render={() => <Redirect to='/profile'/>}/>
            </div>
        </div>
    );
};

export default App;

