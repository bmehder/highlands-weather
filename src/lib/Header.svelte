<script lang="ts">
  import { getIconUrl } from './iconMap'

  type Current = {
    iconCode: number
    currentTemp: number
    highTemp: number
    lowTemp: number
    highFeelsLike: number
    lowFeelsLike: number
    windSpeed: number
    precip: number
  }

  export let current: Current

  const {
    iconCode,
    currentTemp,
    highTemp,
    lowTemp,
    highFeelsLike,
    lowFeelsLike,
    windSpeed,
    precip,
  } = current
</script>

<header>
  <div class="header-left">
    <img src={getIconUrl(iconCode)} class="weather-icon large" alt="" />
    <div>
      <span>{currentTemp}</span>&deg;
    </div>
  </div>
  <div class="header-right">
    <div class="info-group">
      <div class="label">High</div>
      <div>
        <span>{highTemp}</span>&deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL High</div>
      <div>
        <span>{highFeelsLike}</span>&deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Wind</div>
      <div>
        <span>{windSpeed}</span>
        <span class="value-sub-info">mph</span>
      </div>
    </div>
    <div class="info-group">
      <div class="label">Low</div>
      <div>
        <span>{lowTemp}</span>&deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL Low</div>
      <div>
        <span>{lowFeelsLike}</span>&deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Precip</div>
      <div>
        <span>{(precip * 100) / 100}</span>
        <span class="value-sub-info">in</span>
      </div>
    </div>
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
  }

  .header-left {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-block: 0.5rem;
    border-right: 2px solid hsl(var(--hue), var(--saturation), 10%);
  }

  .header-left div {
    font-size: 2rem;
  }

  .header-right {
    display: grid;
    flex-basis: 50%;
    gap: 0.5rem;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
  }

  .info-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
