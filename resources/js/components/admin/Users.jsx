import React from 'react';
import ReactDOM from 'react-dom';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          url: location.protocol + "//" + location.host + "/admin/users"
        };
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(res => res.json())
        .then(  
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )

        console.log(this.state.items);
    }

    render(){
        
        return (
            <div>
                Users
            </div>
        );
    }
}