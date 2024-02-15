export const initialState = {
   user: null, 
   playlists: [], 
   playing: false, 
   item: null, 
   discover_weekly: null,
   //remove after finished developing 
   /*token:"BQAvVFbTVJfoipfOJnFVBYGBbr8uaDCz5bavPiozpTeRkHogv3FHzKkPoOZFQ_IM7ScPO0h_s5L6PrLGHXXHikEZ3lePzOHxG7he_s5_WDxv9czu5D3Gv-ENlUNs8sC-Yhw-EZ7sx8Qm019_5D9yvsI0n4vGMBrrhvDAL1KYfeo5w2-gpMGTk4e7npxAUA"*/
}

const reducer = (state, action) => {
console.log(action); 

switch(action.type) {
    case 'SET_USER':
        return {
            ...state, 
            user: action.user,
        }

    case 'SET_TOKEN':  
        return {
        ...state, 
        token: action.token,  
        }   


    case 'SET_PLAYLISTS':
        return {
            ...state, 
            playlists: action.playlists,  
        }

    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state, 
            discover_weekly: action.discover_weekly,
        }

        default: 
        return state; 
}
}

export default reducer; 