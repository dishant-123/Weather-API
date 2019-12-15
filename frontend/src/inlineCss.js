import React, { Component } from 'react'
class Inline extends Component{
    render()
    {
        const styleSheet = {
            color:'red',
            textAlign:'center'
        }
        return (
            <div>
                <h1 style={styleSheet}>I am from Inline Component</h1>
            </div>
        )
    }
}
export default Inline;
