import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3600/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const createPosts = (postdata) => dispatch => {
    fetch('http://localhost:3600/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postdata)
    })
        .then(res => res.json())
        .then(post => {
            dispatch({
                type: NEW_POSTS,
                payload: post
            });
            dispatch(fetchPosts());
        });
};