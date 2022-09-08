import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';

export default class User extends React.Component
{
    constructor(props){
        super(props);
      this.Edit.bind(this);
      this.state = {
        url: location.protocol + "//" + location.host + "/admin/users/edit/"
      };
    }

    Edit(){
      let temp_link = this.state.url + this.props.id;
      fetch(temp_link);
      ReactDOM.render(<Users />, document.getElementById('admin-wrapper'));
    }

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
          <div>
            <input type="text" name="name" id="" defaultValue={this.props.name}/>
            <input type="text" name="name" id="" defaultValue={this.props.email}/>
            <button onClick={() => this.Edit()}>Done</button>
          </div>
        );
    }
}