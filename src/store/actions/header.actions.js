import { headerConstants } from '../constants';
import { headerService } from '../../services';
import { alertActions } from './';
//import { history } from '../helpers';

export const headerActions = {
    create,
    update,
  //  getById,
    getAll,
    delete: _delete
};

function create(payload) {


    return dispatch => {
        dispatch(request(payload));
        headerService.create(payload)
            .then(
                  header => {
                    dispatch(success(header));
                    dispatch(alertActions.success('Saved Successfully'));
                  //  history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(header) { return { type: headerConstants.CREATE_REQUEST, header } }
    function success(header) { return { type: headerConstants.CREATE_SUCCESS, header } }
    function failure(error) { return { type: headerConstants.CREATE_FAILURE, error } }
}

function update(payload) {
    return dispatch => {
        dispatch(request(payload));

        headerService.update(payload)
            .then(
                header => {
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

    function request(header) { return { type: headerConstants.UPDATE_REQUEST, header } }
    function success(header) { return { type: headerConstants.UPDATE_SUCCESS, header } }
    function failure(error) { return { type: headerConstants.UPDATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        headerService.getAll()
            .then(
                headers => dispatch(success(headers)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: headerConstants.GETALL_REQUEST } }
    function success(headers) { return { type: headerConstants.GETALL_SUCCESS, headers } }
    function failure(error) { return { type: headerConstants.GETALL_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        headerService.delete(id)
            .then(
                header => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            )
    }

    function request(id) { return { type: headerConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: headerConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: headerConstants.DELETE_FAILURE, id, error } }
}
