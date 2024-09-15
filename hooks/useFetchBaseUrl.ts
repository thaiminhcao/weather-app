// const WEATHER_KEY = `65ac269c8a5b4949bd1143432240109`;
// const BASE_URL = `https://api.weatherapi.com/v1`;
// const BASE_URL = `https://api.xwai.cc/api/`;

const useFetchBaseUrl = async () => {
  try {
    const response = await fetch(
      "https://api.xwai.cc/api/front/lottery/lastlottery/266.json",
      {
        method: "GET",
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "access-control-max-age": "60000",
          origin: "https://baotintuc.xwai.cc",
          priority: "u=1, i",
          referer: "https://baotintuc.xwai.cc/",
          "sec-ch-ua":
            '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0",
          "x-lang": "vi",
        },
      }
    );
    const data = await response.json();
    return {
      status: 200,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      data: null,
    };
  }
};

export default useFetchBaseUrl;
