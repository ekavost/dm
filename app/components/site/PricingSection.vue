<template>
  <section id="tarifas" class="relative py-20 md:py-28">
    <UContainer>
      <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <!-- Intro -->
        <div>
          <span class="eyebrow">Тарифы и стоимость</span>
          <h2
            class="font-display font-semibold text-3xl md:text-4xl tracking-tight mt-3"
          >
            Гибкий подход без переплат и скрытых чеков
          </h2>
          <p class="text-ink/60 text-sm leading-relaxed mt-5">
            У нас нет жёстких фиксированных тарифов, потому что мы не продаём
            «коробки». Каждый бизнес уникален: кому-то достаточно настроить одну
            форму и запустить Метрику, а кому-то нужна сложная сквозная
            аналитика для 10 филиалов. Вы не должны переплачивать за лишние
            функции.
          </p>

          <div class="mt-8 space-y-5">
            <div v-for="item in approach" :key="item.title" class="flex gap-3">
              <UIcon
                :name="item.icon"
                class="size-5 text-signal-600 dark:text-signal-400 shrink-0 mt-0.5"
              />
              <p class="text-sm text-ink/65 leading-relaxed">
                <span class="text-ink font-medium">{{ item.title }}:</span>
                {{ item.text }}
              </p>
            </div>
          </div>

          <p
            class="text-ink/50 text-sm italic leading-relaxed mt-8 border-l-2 border-signal-500/40 pl-4"
          >
            Давайте просто созвонимся, обсудим ваши задачи, и мы подберём тот
            объём работы, который комфортен для вашего бюджета.
          </p>
        </div>

        <!-- Tariff cards -->
        <div class="space-y-4">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="rounded-2xl ring-1 p-6"
            :class="
              i === 1
                ? 'ring-signal-500/40 bg-gradient-to-br from-signal-500/10 to-panel'
                : 'ring-line bg-panel/80'
            "
          >
            <div class="flex items-center justify-between">
              <h3 class="font-display font-semibold text-lg">
                {{ tier.name }}
              </h3>
              <span
                v-if="i === 1"
                class="font-mono text-[11px] uppercase tracking-wide text-signal-600 dark:text-signal-400 bg-signal-500/10 px-2 py-1 rounded-full"
              >
                популярный
              </span>
            </div>
            <p class="text-ink/60 text-sm leading-relaxed mt-3">
              {{ tier.text }}
            </p>
          </div>

          <p class="text-ink/45 text-xs leading-relaxed pt-2">
            Таргетированная реклама в Facebook и Instagram (Meta), а также
            видеореклама и продвижение на YouTube обсуждаются индивидуально и
            могут быть подключены как отдельный канал к любому из тарифов.
          </p>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const approach = [
  {
    title: "Комфортный старт",
    icon: "i-lucide-play",
    text: "Мы всегда можем начать с малого — настроить базовые цели, проверить критические ошибки и навести порядок в том, что уже есть. Это быстро и недорого.",
  },
  {
    title: "Оплата за реальный объём",
    icon: "i-lucide-receipt",
    text: "Цена формируется прозрачно и только за те задачи, которые необходимы вашему проекту прямо сейчас.",
  },
  {
    title: "Растём вместе с вами",
    icon: "i-lucide-trending-up",
    text: "Когда вы увидите первые результаты и поймёте, что аналитика окупается, мы сможем пошагово подключать более сложные инструменты. Всё под контролем.",
  },
];

const tiers = [
  {
    name: "Старт",
    text: "Запуск контекстной рекламы в Google Ads. Подойдёт для быстрого тестирования спроса. Отчётность и контроль показателей ведутся напрямую в рекламном кабинете Google Ads (без подключения внешней аналитики).",
  },
  {
    name: "Оптимальный",
    text: "Запуск Google Ads + веб-аналитика. Связка рекламного кабинета с Google Analytics, настройка фиксации ключевых целей (заявки, звонки) и сбор базовых данных.",
  },
  {
    name: "Максимальный",
    text: "Мультиканальное продвижение + продвинутая настройка GTM. Создание кастомных тегов, триггеров и сложной логики отслеживания целевых действий, связка с CRM и максимальный охват статистики.",
  },
];
</script>
