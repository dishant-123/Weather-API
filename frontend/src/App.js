
import React,{Component} from 'react';
import { Route ,BrowserRouter } from 'react-router-dom';
import Title from './Components/title.js';

export default class App extends Component{
    render()
    {
        return <div>
            <BrowserRouter>
                <Route exact path="/" component={Title} />

            </BrowserRouter>
        </div>
    }
}