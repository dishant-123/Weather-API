
import React,{Component} from 'react';
import { Route ,BrowserRouter } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
// import Weather from './Components/Weather.js'
export default class App extends Component{
    render()
    {
        return <div>
            <BrowserRouter>
                <Route exact path="/" component={MainPage} />
                {/* <Route exact path = "/weather-of-seven-days" component = {Weather}/> */}
            </BrowserRouter>
        </div>
    }
}