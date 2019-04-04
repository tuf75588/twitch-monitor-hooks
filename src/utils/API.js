const API_KEY = 'nr64nw0qof5z1v45aophyuulri2c3d';
const streamers = ['hungricorgi', 'rammy', 'JSTheGame', 'hungry', 'just_stevo', 'eviltoaster'];
const endpoint = 'https://api.twitch.tv/kraken';


function getChannelInfo(channel) {
  return fetch(`${endpoint}/channels/${channel}?client_id=${API_KEY}`)
    .then((value) => {
      return value.json();
    })
    .then((res) => {
      return res;
    });
}
function getStreamInfo(stream) {
  return fetch(`${endpoint}/streams/${stream}?client_id=${API_KEY}`)
    .then((value) => {
      return value.json();
    })
    .then((res) => {
      return res;
    });
}

export async function getStreamData() {
  let results = await streamers.map((value) =>
    Promise.all([getChannelInfo(value), getStreamInfo(value)]).then((info) => {
      return info;
    })
  );
  return results;
}
export async function searchChannel(user) {
  let request = await fetch(`${endpoint}/search/channels?query=${user}&client_id=${API_KEY}&limit=40`);
  let response = await request.json();

  return response.channels;
}
