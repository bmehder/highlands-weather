<script lang="ts">
  import type { PageData } from './$types'
  import Day from './Day.svelte'
  import Header from './Header.svelte'
  import Hourly from './Hourly.svelte'
  import { ICON_MAP } from './iconMap'

  export let data: PageData
  console.log(data)

  function getIconUrl(iconCode: number) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`
  }
</script>

<div class="main">
  <Header current={data.current} {getIconUrl} />

  <section class="day-section" data-day-section>
    {#each data.daily as day}
      <Day {day} {getIconUrl} />
    {/each}
  </section>

  <table class="hour-section">
    <tbody data-hour-section>
      {#each data.hourly as hour}
        <Hourly {hour} {getIconUrl} />
      {/each}
    </tbody>
  </table>
</div>

<style>
  .main {
    max-width: 768px;
    margin-inline: auto;
  }

  .day-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, 75px);
    gap: 0.5rem;
    justify-content: center;
    padding: 1rem;
  }

  .hour-section {
    width: 100%;
    margin-inline: auto;
    text-align: center;
    border-spacing: 0;
  }
</style>
