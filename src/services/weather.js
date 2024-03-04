const FETCH_WEATHER_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "557d788f52msh19c0188fad6f064p12f7dejsncc2c89e1c0ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export async function getWeatherFrom(query = "Buenos Aires") {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_WEATHER_OPTIONS
  );
  const data = await response.json();

  const { location, current } = data;
  const { country, name, localtime, region } = location;
  const { condition, humidity, temp_c, wind_kph, is_day } = current;
  const { text, icon, code } = condition;
  return {
    country,
    name,
    localtime,
    region,
    text,
    icon,
    code,
    humidity,
    temp_c,
    wind_kph,
    is_day,
  };
}
