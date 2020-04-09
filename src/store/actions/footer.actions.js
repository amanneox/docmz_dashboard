import { footerConstants } from '../constants';
import { footerService } from '../../services';
import { alertActions } from './';
//import { history } from '../helpers';

export const footerActions = {
    create,
    update,
  //  getById,
    getAll,
    delete: _delete
};

function create(payload) {


    return dispatch => {
        dispatch(request(payload));
        footerService.create(payload)
            .then(
                  footer => {
                    dispatch(success(footer));
                    dispatch(alertActions.success('Saved Successfully'));
                  //  history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(footer) { return { type: footerConstants.CREATE_REQUEST, footer } }
    function success(footer) { return { type: footerConstants.CREATE_SUCCESS, footer } }
    function failure(error) { return { type: footerConstants.CREATE_FAILURE, error } }
}

function update(payload) {
    return dispatch => {
        dispatch(request(payload));

        footerService.update(payload)
            .then(
                footer => {
                    dispatch(success());
                    //history.push('/login');
                    dispatch(alertActions.success('Update successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(footer) { return { type: footerConstants.UPDATE_REQUEST, footer } }
    function success(footer) { return { type: footerConstants.UPDATE_SUCCESS, footer } }
    function failure(error) { return { type: footerConstants.UPDATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        footerService.getAll()
            .then(
                footers => dispatch(success(footers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: footerConstants.GETALL_REQUEST } }
    function success(footers) { return { type: footerConstants.GETALL_SUCCESS, footers } }
    function failure(error) { return { type: footerConstants.GETALL_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        footerService.delete(id)
            .then(
                footer => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            )
    }

    function request(id) { return { type: footerConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: footerConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: footerConstants.DELETE_FAILURE, id, error } }
}
