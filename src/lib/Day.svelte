<script lang="ts">
  import { getIconUrl } from './iconMap'
  import { DAY_FORMATTER } from './utils'

  type Day = {
    iconCode: number
    maxTemp: number
    timestamp: number
  }

  export let day: Day
</script>

<div class="day-card">
  <img src={getIconUrl(day.iconCode)} alt="" class="weather-icon" />
  <div class="day-card-day">{DAY_FORMATTER.format(day.timestamp)}</div>
  <div>{day.maxTemp}&deg;</div>
</div>

<style>
  .day-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.25rem;
    border: 1px solid hsl(var(--hue), var(--saturation), 10%);
    border-radius: 0.25rem;
  }

  .day-card-day {
    margin-top: 0.5rem;
    color: hsl(var(--hue), var(--saturation), 20%);
    font-size: 0.75rem;
  }
</style>
