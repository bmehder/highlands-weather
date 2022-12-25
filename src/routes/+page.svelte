<script lang="ts">
  import type { PageData } from './$types'
  import Day from '$lib/Day.svelte'
  import Header from '$lib/Header.svelte'
  import Hourly from '$lib/Hourly.svelte'

  export let data: PageData
  console.log(data)
</script>

<div class="wrapper">
  <Header current={data.current} />

  <section class="day-section">
    {#each data.daily as day}
      <Day {day} />
    {/each}
  </section>

  <table class="hour-section">
    <tbody>
      {#each data.hourly as hour}
        <Hourly {hour} />
      {/each}
    </tbody>
  </table>
</div>

<style>
  .wrapper {
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
