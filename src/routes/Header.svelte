<script lang="ts">
  type Current = {
    currentTemp: number
    highFeelsLike: number
    highTemp: number
    iconCode: number
    lowFeelsLike: number
    lowTemp: number
    windSpeed: number
    precip: number
  }

  export let current: Current
  export let getIconUrl: (iconCode: number) => string
</script>

<header class="header">
  <div class="header-left">
    <img
      src={getIconUrl(current.iconCode)}
      class="weather-icon large"
      alt=""
      data-current-icon
    />
    <div class="header-current-temp">
      <span data-current-temp>{current.currentTemp}</span>&deg;
    </div>
  </div>
  <div class="header-right">
    <div class="info-group">
      <div class="label">High</div>
      <div>
        <span data-current-high>{current.highTemp}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL High</div>
      <div>
        <span data-current-fl-high>{current.highFeelsLike}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Wind</div>
      <div>
        <span data-current-wind>{current.windSpeed}</span>
        <span class="value-sub-info">mph</span>
      </div>
    </div>
    <div class="info-group">
      <div class="label">Low</div>
      <div>
        <span data-current-low>{current.lowTemp}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL Low</div>
      <div>
        <span data-current-fl-low>{current.lowFeelsLike}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Precip</div>
      <div>
        <span data-current-precip>{(current.precip * 100) / 100}</span>
        <span class="value-sub-info">in</span>
      </div>
    </div>
  </div>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    margin-inline: auto;
  }

  .header-left {
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-right: 2px solid hsl(var(--hue), var(--saturation), 10%);
  }

  @media (min-width: 600px) {
    .header-left {
      padding-left: 50px;
    }
  }

  .header-current-temp {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .header-right {
    width: 50%;
    display: grid;
    justify-content: space-around;
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
