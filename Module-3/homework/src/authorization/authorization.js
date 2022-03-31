const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const scope = 'playlist-modify-private';
const redirect_uri = 'http://localhost:3000/callback/';
const authUrl = 'https://accounts.spotify.com/id/authorize?response_type=token&show_dialog=true';

export { client_id, scope, redirect_uri, authUrl };
