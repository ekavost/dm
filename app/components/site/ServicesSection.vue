<template>
  <section id="servicios" class="relative py-20 md:py-28">
    <UContainer>
      <div class="max-w-2xl">
        <span class="eyebrow">Услуги</span>
        <h2
          class="font-display font-semibold text-3xl md:text-4xl tracking-tight mt-3"
        >
          Три направления, одна сквозная система
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-5 mt-12">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-2xl ring-1 ring-line bg-panel/80 p-6 flex flex-col"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/12 text-signal-600 dark:text-signal-400 mb-5"
          >
            <UIcon :name="service.icon" class="size-5" />
          </div>
          <h3 class="font-display font-semibold text-lg leading-snug">
            {{ service.title }}
          </h3>
          <p class="text-ink/60 text-sm leading-relaxed mt-3">
            {{ service.summary }}
          </p>

          <UAccordion
            class="mt-5 pt-5 border-t border-line"
            :items="service.channels"
            :ui="{
              trigger: 'text-sm font-mono text-ink/80 py-2',
              body: 'text-sm text-ink/55 leading-relaxed pb-3',
            }"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Контекстная и видеореклама",
    icon: "i-lucide-search",
    summary:
      "Аудит и запуск кампаний «под ключ» в Яндекс.Директ (включая РСЯ и Промостраницы) и Google Ads + YouTube.",
    channels: [
      {
        label: "Google Ads + YouTube + КМС",
        content:
          "Запускаем рекламу в экосистеме Google. Настраиваем поисковые кампании, медийную сеть (КМС) и YouTube для полного охвата платёжеспособной аудитории. Оптимизируем алгоритмы на результат для стабильного потока заявок.",
      },
      {
        label: "Яндекс.Директ + РСЯ + Промостраницы",
        content:
          "Настраиваем точечный поиск, умные кампании в РСЯ и привлекаем контентный трафик через Промостраницы. Берём под ручной контроль работу алгоритмов: фильтруем нецелевой трафик, снижаем стоимость заявки и защищаем рекламный бюджет от слива.",
      },
    ],
  },
  {
    title: "Таргетированная реклама",
    icon: "i-lucide-target",
    summary:
      "Привлечение целевого трафика, создание креативов и поиск аудитории в Facebook и Instagram (Meta).",
    channels: [
      {
        label: "Facebook + Instagram",
        content:
          "Запускаем таргетированную рекламу в Meta. Instagram в Казахстане — это ключевой инструмент для быстрых продаж. Создаём сочные визуальные креативы, пишем цепляющие тексты и находим вашу целевую аудиторию по поведению и интересам.",
      },
    ],
  },
  {
    title: "Веб-аналитика и GTM",
    icon: "i-lucide-chart-bar",
    summary:
      "Настройка Google Analytics 4 и Яндекс Метрики (включая Вебвизор), внедрение Google Tag Manager, связка с CRM и отслеживание окупаемости (ROI).",
    channels: [
      {
        label: "Веб-аналитика + GTM",
        content:
          "Оцифровываем ваш маркетинг. Выстраиваем сквозную аналитику и объединяем данные из всех рекламных источников в понятные отчёты. Профессионально настраиваем GTM (теги, триггеры), отслеживаем и контролируем специальные события и целевые действия: клики, отправки форм, звонки. Оптимизируем воронки продаж и конверсию. Защищаем бюджет от неэффективных вложений.",
      },
    ],
  },
];
</script>
