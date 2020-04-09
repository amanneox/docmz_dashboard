import { footerConstants } from '../constants';

export function footers(state = {}, action) {
  switch (action.type) {
    case footerConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case footerConstants.GETALL_SUCCESS:
      return {
        ...action.footers
      };
    case footerConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case footerConstants.DELETE_REQUEST:
      // add 'deleting:true' property to footer being deleted
      return {
        ...state,
        items: state.items.map(footer =>
          footer.id === action.id
            ? { ...footer, deleting: true }
            : footer
        )
      };
    case footerConstants.DELETE_SUCCESS:
      // remove deleted footer from state
      return {
        items: state.items.filter(footer => footer.id !== action.id)
      };
    case footerConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to footer
      return {
        ...state,
        items: state.items.map(footer => {
          if (footer.id === action.id) {
            // make copy of footer without 'deleting:true' property
            const { deleting, ...footerCopy } = footer;
            // return copy of footer with 'deleteError:[error]' property
            return { ...footerCopy, deleteError: action.error };
          }

          return footer;
        })
      };
    default:
      return state
  }
}
