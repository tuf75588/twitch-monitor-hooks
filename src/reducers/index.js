export function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_CHANNELS':
      return {
        ...state,
        streamData: action.payload
      };
    case 'CHANGE_ONLINE':
      return {
        ...state,
        streamData: action.payload,
        filter: action.filter
      };
    case 'CHANGE_ALL':
      return {
        ...state,
        filter: action.filter,
        streamData: 'Online'
      };
    case 'CHANGE_OFFLINE':
      console.log(state);
      return {
        ...state,
        filter: action.filter,
        streamData: action.payload,
      };
    default:
      return state;
  }
}
