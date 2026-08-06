<template>
  <svg
    class="growth-divider"
    viewBox="0 0 1200 56"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="0">
        <stop
          offset="0%"
          stop-color="var(--color-signal-500)"
          stop-opacity="0"
        />
        <stop
          offset="15%"
          stop-color="var(--color-signal-500)"
          stop-opacity="0.8"
        />
        <stop
          offset="60%"
          stop-color="var(--color-growth)"
          stop-opacity="0.9"
        />
        <stop offset="100%" stop-color="var(--color-growth)" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      class="growth-line"
      d="M0,42 L120,42 L180,20 L260,34 L340,10 L430,30 L520,14 L620,26 L720,6 L860,22 L980,4 L1200,16"
      fill="none"
      :stroke="`url(#${gradientId})`"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
const gradientId = useId();
</script>
