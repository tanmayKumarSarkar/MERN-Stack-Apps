import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

class PostForm extends Component {

    state = {
        title: '',
        body: ''
    }

    onChange (e) {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit (e) {
        e.preventDefault();
        const post = {title: this.state.title, body: this.state.body} ;
        this.props.createPosts(post);
    }

    render() {
        return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <label>Title</label> <br/>
                    <input type="text" name="title" onChange={this.onChange.bind(this)} defaultValue={this.state.title}/>
                </div>
                <br/>
                <div>
                    <label>Body</label> <br/>
                    <textarea name="body" onChange={this.onChange.bind(this)} defaultValue={this.state.body} ></textarea>
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

PostForm.propTypes = {
    createPosts : PropTypes.func.isRequired
};

export default connect (null, {createPosts}) (PostForm);
