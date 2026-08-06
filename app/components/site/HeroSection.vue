<template>
  <section id="top" class="relative overflow-hidden grid-backdrop">
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-signal-100/60 dark:from-signal-950/40 via-carbon to-carbon"
    />

    <UContainer class="relative py-20 md:py-28">
      <div class="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <!-- Copy -->
        <div>
          <span class="eyebrow inline-flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-growth animate-pulse" />
            Google Ads · Яндекс.Директ · Meta
          </span>

          <h1 class="font-display font-semibold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight mt-5">
            Настройка и ведение
            <span class="text-signal-600 dark:text-signal-400">контекстной рекламы</span>
          </h1>

          <p class="text-ink/70 text-lg leading-relaxed mt-6 max-w-xl">
            Запускаем эффективные рекламные кампании в Google Ads и Яндекс.Директ.
            Анализируем нишу и конкурентов, находим ключевые точки роста.
            Разрабатываем продающие объявления и настраиваем сквозную аналитику
            для отслеживания звонков и заявок.
          </p>

          <div class="flex flex-wrap items-center gap-3 mt-8">
            <UButton size="xl" color="primary" class="rounded-full px-6" @click="$emit('request-call')">
              Заказать звонок
              <template #trailing>
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </template>
            </UButton>
            <UButton
              size="xl"
              variant="outline"
              color="neutral"
              class="rounded-full px-6 border-line text-ink/80"
              @click="$emit('request-audit')"
            >
              Бесплатный аудит сайта
            </UButton>
          </div>

          <div class="flex items-center gap-6 mt-10 text-sm text-ink/50 font-mono">
            <a href="https://wa.me/77775607215" target="_blank" rel="noopener" class="flex items-center gap-1.5 hover:text-growth transition-colors">
              <UIcon name="i-simple-icons-whatsapp" class="size-4" /> WhatsApp
            </a>
            <a href="https://t.me/oleg_marketing_channel" target="_blank" rel="noopener" class="flex items-center gap-1.5 hover:text-signal-600 dark:hover:text-signal-400 transition-colors">
              <UIcon name="i-simple-icons-telegram" class="size-4" /> Telegram
            </a>
            <span class="flex items-center gap-1.5">
              <UIcon name="i-lucide-map-pin" class="size-4" /> Алматы, Казахстан
            </span>
          </div>
        </div>

        <!-- Ilustración — señal multicanal (elemento de firma) -->
        <div class="relative">
          <div
            class="relative rounded-2xl ring-1 ring-line bg-panel/90 shadow-2xl shadow-signal-900/10 dark:shadow-signal-950/40 p-8 aspect-[4/3] flex items-center justify-center overflow-hidden"
          >
            <div class="absolute inset-0 grid-backdrop opacity-30" />

            <svg viewBox="0 0 320 320" class="relative w-full max-w-[260px]" aria-hidden="true">
              <defs>
                <radialGradient id="signal-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="var(--color-signal-500)" stop-opacity="0.35" />
                  <stop offset="100%" stop-color="var(--color-signal-500)" stop-opacity="0" />
                </radialGradient>
              </defs>

              <circle cx="160" cy="160" r="140" fill="url(#signal-glow)" />
              <circle cx="160" cy="160" r="110" fill="none" stroke="var(--color-line)" stroke-width="1" />
              <circle cx="160" cy="160" r="70" fill="none" stroke="var(--color-line)" stroke-width="1" />

              <!-- líneas hacia canales -->
              <line x1="160" y1="160" x2="160" y2="30" stroke="var(--color-signal-500)" stroke-opacity="0.4" stroke-width="1.5" />
              <line x1="160" y1="160" x2="270" y2="120" stroke="var(--color-growth)" stroke-opacity="0.4" stroke-width="1.5" />
              <line x1="160" y1="160" x2="235" y2="255" stroke="var(--color-amber-500)" stroke-opacity="0.4" stroke-width="1.5" />
              <line x1="160" y1="160" x2="60" y2="230" stroke="var(--color-signal-400)" stroke-opacity="0.4" stroke-width="1.5" />

              <!-- nodo central con pulso -->
              <circle cx="160" cy="160" r="10" fill="var(--color-signal-500)" />
              <circle cx="160" cy="160" r="16" fill="none" stroke="var(--color-signal-500)" stroke-width="1.5" opacity="0.5">
                <animate attributeName="r" values="14;30;14" dur="3.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0;0.55" dur="3.2s" repeatCount="indefinite" />
              </circle>

              <!-- nodos de canal -->
              <circle cx="160" cy="30" r="6" fill="var(--color-signal-400)" />
              <circle cx="270" cy="120" r="6" fill="var(--color-growth)" />
              <circle cx="235" cy="255" r="6" fill="var(--color-amber-500)" />
              <circle cx="60" cy="230" r="6" fill="var(--color-signal-300)" />
            </svg>
          </div>

          <div
            class="absolute -bottom-4 -right-4 rounded-xl ring-1 ring-line bg-panel-2 px-4 py-3 shadow-xl hidden sm:block"
          >
            <p class="text-[11px] text-ink/45">Каналы продвижения</p>
            <p class="font-mono text-sm text-signal-600 dark:text-signal-400 mt-0.5">Google · Яндекс · Meta</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ 'request-call': []; 'request-audit': [] }>()
</script>
