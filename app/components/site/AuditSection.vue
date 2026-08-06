<template>
  <section id="audit" class="relative py-20 md:py-28 bg-panel/40 border-y border-line">
    <UContainer>
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <span class="eyebrow">Экспресс-аудит сайта</span>
          <h2 class="font-display font-semibold text-3xl md:text-4xl tracking-tight mt-3">
            Составьте заявку и закажите бесплатный экспресс-аудит вашего сайта
          </h2>

          <UButton
            size="xl"
            color="secondary"
            class="rounded-full px-6 mt-8"
            @click="$emit('request-audit')"
          >
            Заказать бесплатный экспресс-аудит
            <template #trailing>
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </template>
          </UButton>

          <p class="text-ink/40 text-xs leading-relaxed mt-4">
            * Оставляем за собой право отказать в проведении бесплатного аудита
            без объяснения причин.
          </p>
        </div>

        <div>
          <p class="eyebrow mb-5">Что входит в экспресс-аудит сайта</p>
          <ol class="space-y-5">
            <li v-for="(item, i) in items" :key="item.title" class="flex gap-4">
              <span class="font-mono text-signal-600 dark:text-signal-400 text-sm mt-0.5 shrink-0">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <p class="text-sm text-ink/65 leading-relaxed">
                <span class="text-ink font-medium">{{ item.title }}:</span>
                {{ item.text }}
              </p>
            </li>
          </ol>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineEmits<{ 'request-audit': [] }>()

const items = [
  {
    title: 'Технический аудит скорости (Google PageSpeed Insights)',
    text: 'Проверка времени загрузки десктопной и мобильной версий, оценка технического индекса производительности и стабильности вёрстки.'
  },
  {
    title: 'UX/UI-анализ посадочной страницы',
    text: 'Оценка логики интерфейса, удобства навигации (юзабилити) и адаптивности под экраны современных смартфонов.'
  },
  {
    title: 'Аудит конверсионной цепочки (CTA)',
    text: 'Тестирование работоспособности форм заявки, кликабельности контактов (WhatsApp, Telegram, телефон) и логики призывов к действию.'
  },
  {
    title: 'Оценка смыслового слоя и элементов доверия',
    text: 'Анализ читаемости основного оффера на первом экране, структуры подачи услуг и наличия факторов доверия.'
  },
  {
    title: 'Отчёт с приоритетными правками (Quick Wins)',
    text: 'Итоговая оцифровка найденных проблем и подготовка списка первоочередных быстрых шагов для роста эффективности сайта.'
  }
]
</script>
