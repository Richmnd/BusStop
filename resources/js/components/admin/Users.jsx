import { result } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';

export default class Users extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            error: null,
            isLoaded: false,
            items: [],
            url: location.protocol + "//" + location.host + "/admin/users",
            delete_url: location.protocol + "//" + location.host + "/admin/users/delete/"
        };

        this.handleEdit.bind(this);
    }

    useEffect(){
        this.setState({
            loading: true
        });
        setTimeout(() => {
        this.setState({
            loading:false
        });
        }, 500);
    }

    handleEdit(_id, action, name, email){
        ReactDOM.render(<User id={_id} action={action} name={name} email={email}/>, document.getElementById('admin-wrapper'))
    }

    handleRemove(event, _id){
        let temp_link = this.state.delete_url + _id;
        fetch(temp_link)
        // .then()

        ReactDOM.unmountComponentAtNode(document.getElementById('admin-wrapper'))
        ReactDOM.render(<Users />, document.getElementById('admin-wrapper'))
    }

    componentDidMount(){
        this.useEffect();
        fetch(this.state.url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result
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

        
    }

    render(){
        return (
            <div className='user-card'>
                {this.state.loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    {this.state.items.map(user => (
                    <div key={user.id} className='inner-card'>
                        <span className='user-data'>{user.name}</span>
                        <span className='user-data'>{user.email}</span>
                        <button value={user.id} onClick={() => this.handleEdit(user.id, "edit", user.name, user.email)}>Edit</button>
                        <button value={user.id} onClick={() => this.handleRemove(event, user.id)}>Remove</button>
                    </div>
                ))}
                </div>
                
        )}
            </div>
        );
    }
}
