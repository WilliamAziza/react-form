import React, { Component } from 'react';

class Classform extends Component {
    constructor (props){
        super (props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        e.preventDefault ()  
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.name)
    }
    handleChange = (e) => {
        e.preventDefault ()  
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.email)
    }
    handleChange = (e) => {
        e.preventDefault ()  
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.password)
    }
   

    render() {
        return (
            <section>
                <h1>Facebook Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <br />
                    <input 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Email</label>
                    <br />
                    <input 
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}></input>
                    
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}></input>
                    <br />
                    <button>Sumit</button>

                </form>
            </section>
        );
    }
}

export default Classform;
