<script lang="ts">
  import { getIconUrl } from './iconMap'
  import { DAY_FORMATTER, HOUR_FORMATTER } from './utils'

  type Hour = {
    feelsLike: number
    iconCode: number
    precip: number
    temp: number
    timestamp: number
    windSpeed: number
  }

  export let hour: Hour

  const { timestamp, iconCode, temp, feelsLike, precip, windSpeed } = hour
</script>

<tr>
  <td>
    <div>
      <div class="label">{DAY_FORMATTER.format(timestamp)}</div>
      <div>{HOUR_FORMATTER.format(timestamp)}</div>
    </div>
  </td>
  <td>
    <img src={getIconUrl(iconCode)} alt="" class="weather-icon" />
  </td>
  <td>
    <div>
      <div class="label">Temp</div>
      <div>{temp}&deg;</div>
    </div>
  </td>
  <td>
    <div>
      <div class="label">FL Temp</div>
      <div>{feelsLike}&deg;</div>
    </div>
  </td>
  <td>
    <div>
      <div class="label">Wind</div>
      <div>{windSpeed}<span class="value-sub-info">mph</span></div>
    </div>
  </td>
  <td>
    <div>
      <div class="label">Precip</div>
      <div>
        {(precip * 100) / 100}<span class="value-sub-info">in</span>
      </div>
    </div>
  </td>
</tr>

<style>
  tr {
    background-color: hsl(200, 70%, 80%);
    box-shadow: 0 0 0 100vmax hsl(200, 70%, 80%);
    clip-path: inset(0 -100vmax);
  }

  tr:nth-child(2n) {
    background-color: hsl(200, 60%, 70%);
    box-shadow: 0 0 0 100vmax hsl(200, 60%, 70%);
    clip-path: inset(0 -100vmax);
  }

  tr > td {
    padding-block: 0.25rem;
  }
</style>
