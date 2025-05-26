export const YOUTUBE_LOGO =
  "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_RESULTS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  process.env.REACT_APP_YOUTUBE_API_KEY +
  "&q=";

export const OFF_SET_LIVE_CHAT = 5;
