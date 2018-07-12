import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser (newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiRequest (){
    return dispatch => {
        $.ajax({
            url: 'https://reqres.in/api/users?page=2',
            success(res) {
                console.log("Success: ", res);
            },
            error(err) {
                console.log("Error: ", err);
                dispatch (showError());
            }
        });
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {user: 'ERROR!!'}
    }
}