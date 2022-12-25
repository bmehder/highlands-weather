<script lang="ts">
  import type { PageData } from './$types'
  import { ICON_MAP } from './iconMap'

  export let data: PageData

  function getIconUrl(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`
  }

  console.log(data)
</script>

<header class="header">
  <div class="header-left">
    <img
      src={getIconUrl(data.current.iconCode)}
      class="weather-icon large"
      alt=""
      data-current-icon
    />
    <div class="header-current-temp">
      <span data-current-temp>{data.current.currentTemp}</span>&deg;
    </div>
  </div>
  <div class="header-right">
    <div class="info-group">
      <div class="label">High</div>
      <div>
        <span data-current-high>{data.current.highTemp}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL High</div>
      <div>
        <span data-current-fl-high>{data.current.highFeelsLike}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Wind</div>
      <div>
        <span data-current-wind>{data.current.windSpeed}</span>
        <span class="value-sub-info">mph</span>
      </div>
    </div>
    <div class="info-group">
      <div class="label">Low</div>
      <div>
        <span data-current-low>{data.current.lowTemp}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">FL Low</div>
      <div>
        <span data-current-fl-low>{data.current.lowFeelsLike}</span>
        &deg;
      </div>
    </div>
    <div class="info-group">
      <div class="label">Precip</div>
      <div>
        <span data-current-precip>{(data.current.precip * 100) / 100}</span>
        <span class="value-sub-info">in</span>
      </div>
    </div>
  </div>
</header>

<section class="day-section" data-day-section>
  {#each data.daily as day}
    {@const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' })}

    <div class="day-card">
      <img src={getIconUrl(day.iconCode)} alt="" class="weather-icon" />
      <div class="day-card-day">{DAY_FORMATTER.format(day.timestamp)}</div>
      <div>{day.maxTemp}&deg;</div>
    </div>
  {/each}
</section>

<table class="hour-section">
  <tbody data-hour-section>
    {#each data.hourly as hour}
      {@const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
      })}
      {@const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
      })}

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
    {/each}
  </tbody>
</table>
