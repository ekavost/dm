<template>
  <header
    class="sticky top-0 z-40 border-b border-line bg-carbon/80 backdrop-blur-md"
  >
    <UContainer class="flex h-16 items-center justify-between gap-4">
      <a href="#top" class="flex items-center gap-2 shrink-0">
        <span
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-500/15 text-signal-600 dark:text-signal-400"
        >
          <UIcon name="i-lucide-chart-line" class="size-5" />
        </span>
        <span
          class="font-display font-semibold tracking-tight text-[15px] leading-none"
        >
          DIGITAL<br class="hidden sm:block" />
          <span class="text-ink/50 font-normal text-xs">MARKETING</span>
        </span>
      </a>

      <nav
        class="hidden md:flex items-center gap-7 font-mono text-[13px] text-ink/70"
      >
        <a
          href="#servicios"
          class="hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
          >Услуги</a
        >
        <a
          href="#tarifas"
          class="hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
          >Тарифы</a
        >
        <a
          href="#proceso"
          class="hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
          >Процесс</a
        >
        <a
          href="#contactos"
          class="hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
          >Контакты</a
        >
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="tel:+77775607215"
          class="hidden sm:block font-mono text-sm text-ink/80 hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
        >
          +7 777 560-72-15
        </a>
        <UButton
          color="primary"
          size="sm"
          class="rounded-full"
          @click="$emit('request-call')"
        >
          Заказать звонок
        </UButton>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
defineEmits<{ "request-call": [] }>();
</script>
