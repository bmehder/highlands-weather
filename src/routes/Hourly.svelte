<script lang="ts">
  type Hour = {
    feelsLike: number
    iconCode: number
    precip: number
    temp: number
    timestamp: number
    windSpeed: number
  }

  export let hour: Hour
  export let getIconUrl: (iconCode: number) => string

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {
    weekday: 'long',
  })

  const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
  })
</script>

<tr class="hour-row">
  <td>
    <div class="info-group">
      <div class="label">{DAY_FORMATTER.format(hour.timestamp)}</div>
      <div>{HOUR_FORMATTER.format(hour.timestamp)}</div>
    </div>
  </td>
  <td>
    <img src={getIconUrl(hour.iconCode)} alt="" class="weather-icon" />
  </td>
  <td>
    <div class="info-group">
      <div class="label">Temp</div>
      <div>{hour.temp} &deg;</div>
    </div>
  </td>
  <td>
    <div class="info-group">
      <div class="label">FL Temp</div>
      <div>{hour.feelsLike}&deg;</div>
    </div>
  </td>
  <td>
    <div class="info-group">
      <div class="label">Wind</div>
      <div>{hour.windSpeed}<span class="value-sub-info">mph</span></div>
    </div>
  </td>
  <td>
    <div class="info-group">
      <div class="label">Precip</div>
      <div>
        {(hour.precip * 100) / 100}<span class="value-sub-info">in</span>
      </div>
    </div>
  </td>
</tr>

<style>
  .hour-row {
    background-color: hsl(200, 60%, 75%);
    box-shadow: 0 0 0 100vmax hsl(200, 60%, 75%);
    clip-path: inset(0 -100vmax);
  }

  .hour-row:nth-child(2n) {
    background-color: hsl(200, 60%, 70%);
    box-shadow: 0 0 0 100vmax hsl(200, 60%, 70%);
    clip-path: inset(0 -100vmax);
  }

  .hour-row > td {
    padding-block: 0.25rem;
  }
</style>
