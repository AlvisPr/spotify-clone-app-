
//Setting up authEndPoint and redirerecting 
export const authEndpoint = "https://accounts.spotify.com/authorize"; 
const redirectUrl = "http://localhost:3000/";
const clientId = "00cdd34693de4a868014d36af5cd6806"; 


//Setting up scopes for permissions
const scopes = [
  "user-read-currently-playing", 
  "user-read-recently-played", 
  "user-read-playback-state", 
  "user-top-read", 
  "user-modify-playback-state"
]


//Getting Token From Url 
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        if (parts.length === 2) {
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
}


//generating loggin url for Login.js component
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 