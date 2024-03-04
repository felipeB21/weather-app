<script>
    import {getWeatherFrom } from '../services/weather.js';
    const weatherPromise = getWeatherFrom();
</script>

<style>
    .country {
        display: flex;
        justify-content: space-between;
        align-items: start;
    }
    h2 {
        font-size: 3rem;
        font-weight: 100;
    }

    .weather-icon {
        width: auto;
        height: auto;
    }
</style>

{#await weatherPromise then weather}
<div class="country">
    <h1>{weather.name}, {weather.country}</h1>
    <h2>{weather.temp_c}°C</h2>
</div>
<div>
    <img class="weather-icon" src="{weather.icon}" alt="">
</div>
{/await}
