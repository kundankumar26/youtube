const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const GOOGLE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

export const YOUTUBE_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?key=" +
  YOUTUBE_API_KEY +
  "&textFormat=plainText&part=snippet&maxResults=50&videoId=";

export const YOUTUBE_CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
  YOUTUBE_API_KEY +
  "&maxResults=50&q=";
