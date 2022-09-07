import React from 'react';
import ReactDOM from 'react-dom';

export default class User extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
          <div>
            <input type="text" name="name" id="" value={this.props.name}/>
            <input type="text" name="name" id="" value={this.props.email}/>
          </div>
        );
    }
}