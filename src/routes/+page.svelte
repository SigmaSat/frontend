<script lang="ts">
  import { Canvas, T} from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";

  let i = 0;
  function onEasterEgg() {
    i++;

    if (i > 3) {
      window.location.replace("https://www.youtube.com/watch?v=8CYy9jNmpXM");
    }
  }
</script>

<div
  class="max-h-screen h-screen  text-2xl font-mono p-4 text-center text-white *:my-4 relative *:w-max flex flex-col items-center"
>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="text-6xl my-5 underline-offset-4 underline select-none"
    on:click={onEasterEgg}
    aria-label="title"
  >
    SigmaSat
  </div>

  <br />

  <a
    class="flex items-center place-content-center"
    href="https://www.instagram.com/sigmasat_cansat/"
    aria-label="instagram"
  >
    Instagram
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-instagram ml-3"
      ><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg
    >
  </a>

  <a
  class="flex items-center place-content-center"
  href="https://www.youtube.com/@SigmaSat"
  aria-label="youtube"
>
  YouTube
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-youtube ml-3"
  >
    <path
      d="M22.54 6.42a2.77 2.77 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48a2.77 2.77 0 0 0-1.94 1.94A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .48 5.58 2.77 2.77 0 0 0 1.94 1.94C5.12 20 12 20 12 20s6.88 0 8.6-.48a2.77 2.77 0 0 0 1.94-1.94A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"
    />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98" />
  </svg>
</a>

<a
  class="flex items-center place-content-center"
  href="https://github.com/SigmaSat"
  aria-label="github"
>
  GitHub
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github ml-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
</a>



<div class="absolute bg-cyan-600 min-h-screen min-w-[100vw] -z-10 -top-4 left-0">

  </div>

</div>

