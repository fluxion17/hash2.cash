<!-- Tooltip.svelte -->
<script>
  export let text = '';
  let visible = false;
</script>


<span class="tooltip-wrapper"
      on:mouseenter={() => visible = true}
      on:mouseleave={() => visible = false}>
  <slot></slot>
  {#if visible}
    <span class="tooltip-text">{text}</span>
  {/if}
</span>

<style>
.tooltip-wrapper { position: relative; display: inline-block; }
.tooltip-text {
    position: absolute;
    background: #000;
    color: #fff;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    bottom: calc(-100% + 54px);
    left: 50%;
    transform: translateX(-50%);
    /* white-space: pre; */
    min-width: 180px;
    max-width: 180px;
}
.tooltip-text::after {
    content: ' ';
    background: #000;
    width: 8px;
    height: 8px;
    display: inline-block;
    position: absolute;
    left: calc(50% - 5px);
    bottom: -4px;
    transform: rotate(45deg);
}
</style>
