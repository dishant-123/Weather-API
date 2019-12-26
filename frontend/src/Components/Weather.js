import React, { Component } from 'react'
import axios from 'axios'
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.css'
 class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[],
             address : '',
             longt : '',
             latt : '',
             standard : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    async handleSubmit(event)
    {
            event.preventDefault();
            const location  = await axios.get(`https://geocode.xyz/${this.state.address}?json=1`)//for converting adrees to longitude and lattitude.
            console.log(location)
            const results  = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0057332b2f05daa6366684ebbdd2d020/${location.data.longt},${location.data.latt}?exclude=currently,hourly`)
            console.log(results.data.daily.data);
            this.setState({
                content : results.data.daily.data,
                longt : location.data.longt,
                latt : location.data.latt ,
                standard : location.data.standard
            })
    }
    // <p>{new Date(content.time*1000).toString()}</p>
    //                             <p>{content.summary}</p>
    render() {
        return (
            <div className = "mainClass" align = "center" >
                <h2>Welcome To Weather Tells Website</h2>
                <h4>Please Enter Valid Adress for 7 days of weather Details..</h4>
                <form onSubmit = {this.handleSubmit} >
                    {/* <h5>Enter Address</h5> */}
                    <input class="form-control" id="inputdefault" type = "text" value = {this.state.address} onChange = {this.handleChange} name = "address" placeholder = "Enter valid Adress" required/><br></br>
                    <button className="btn btn-dark" type = "submit">Search</button><br></br>
                </form>
                {this.state.content.length!==0 ? 
                (
                                <React.Fragment>
                                    <br></br>
                                    <h5>{this.state.standard.addresst}, {this.state.standard.city}, {this.state.standard.countryname}</h5>
                                    <h6>Longitude : </h6> <p>{this.state.longt}</p>
                                    <h6>Lattitude : </h6><p>{this.state.latt}</p>
                                    <table className="table table-striped ">
                                    <thead   className="thead-dark">
                                        <tr>
                                            <th scope = "col">Icon</th>
                                            <th scope="col">Day</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Summary</th>
                                            <th scope="col">Temp(L)</th>
                                            <th scope="col">Temp(H)</th>
                                            <th scope = "col">Visibility</th>
                                            <th scope = "col">Humidity</th>
                                            <th scope = "col">WindSpeed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.content.map((data, index) =>{
                                                return [
                                                    <tr key ={index}>
                                                        <td><img className = "weatherIcon" src = {require(`./weatherIconsImages/${data.icon}.png`) } alt = "weather icon"/></td>
                                                        <td>{new Date(data.time*1000).toString().substr(0,4)}</td>
                                                        <td>{new Date(data.time*1000).toString().substr(4,12)}</td>
                                                        <td>{data.summary}</td>
                                                        <td>{data.temperatureLow}</td>
                                                        <td>{data.temperatureHigh}</td>
                                                        <td>{data.visibility}</td>
                                                        <td>{data.humidity}</td>
                                                        <td>{data.windSpeed}</td>
                                                    </tr>
                                                ]
                                            })
                                        }
                                    </tbody>
                                </table>
                        </React.Fragment>
                )
                :
                (null)
                }
                
            </div>
            
        )
    }
}

export default Weather
