import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Redirect} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs store={props.store}
                                              friends={props.state.sidebar}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <Friends state={props.state.sidebar}/>}/>
                <Route path='/' exact={true} render={()=> <Redirect to='/profile'/>}/>
            </div>
        </div>
    );
};

export default App;
