import { headerConstants } from '../constants';

export function headers(state = {}, action) {
  switch (action.type) {
    case headerConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case headerConstants.GETALL_SUCCESS:
      return {
        ...action.headers
      };
    case headerConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case headerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to header being deleted
      return {
        ...state,
        items: state.items.map(header =>
          header.id === action.id
            ? { ...header, deleting: true }
            : header
        )
      };
    case headerConstants.DELETE_SUCCESS:
      // remove deleted header from state
      return {
        items: state.items.filter(header => header.id !== action.id)
      };
    case headerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to header
      return {
        ...state,
        items: state.items.map(header => {
          if (header.id === action.id) {
            // make copy of header without 'deleting:true' property
            const { deleting, ...headerCopy } = header;
            // return copy of header with 'deleteError:[error]' property
            return { ...headerCopy, deleteError: action.error };
          }

          return header;
        })
      };
    default:
      return state
  }
}
