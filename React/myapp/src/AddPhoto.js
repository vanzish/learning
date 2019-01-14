import React, { Component } from 'react';

class AddPhoto extends Component{
    state = {
        author: null,
        name: null
    }

    submitHandle = (e) => {
        e.preventDefault();
        this.props.addPhoto(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.submitHandle}>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" onChange={this.handleChange}/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    };
}

export default AddPhoto