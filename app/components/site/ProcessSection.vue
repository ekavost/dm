<template>
  <section id="proceso" class="relative py-20 md:py-28 bg-panel/40 border-y border-line">
    <UContainer>
      <div class="max-w-2xl">
        <span class="eyebrow">Как мы работаем</span>
        <h2 class="font-display font-semibold text-3xl md:text-4xl tracking-tight mt-3">
          Четыре этапа от знакомства до масштабирования
        </h2>
      </div>

      <ol class="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-10 relative">
        <li v-for="(step, i) in steps" :key="step.title" class="relative pl-16">
          <span
            class="font-display absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/10 text-signal-600 dark:text-signal-400 font-semibold text-sm ring-1 ring-signal-500/20"
          >
            0{{ i + 1 }}
          </span>
          <h3 class="font-display font-semibold text-lg leading-snug">
            {{ step.title }}
          </h3>
          <p class="text-ink/60 text-sm leading-relaxed mt-2">
            {{ step.text }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Знакомство и анализ рынка',
    text: 'Мы созваниваемся, знакомимся с вами и вашим проектом, погружаемся в бизнес-процессы. Изучаем нишу, анализируем конкурентов и текущий рынок. На основе данных определяем наиболее эффективные рекламные площадки под ваши задачи.'
  },
  {
    title: 'Медиаплан и подготовка',
    text: 'Создаём детальный медиаплан, делаем реалистичные прогнозы по бюджетам, стоимости клика и количеству заявок. После согласования цифр переходим к технической части: создаём новые рекламные аккаунты, внедряем GTM и настраиваем веб-аналитику для контроля результатов.'
  },
  {
    title: 'Тестовый запуск кампании',
    text: 'Разрабатываем креативы, пишем цепляющие тексты и подготавливаем посадочные страницы. На основе утверждённой стратегии запускаем первую рекламную кампанию. Этот этап помогает нащупать самые эффективные рабочие связки и зацепить целевую аудиторию.'
  },
  {
    title: 'Аналитика и стратегия',
    text: 'Детально анализируем поведение пользователей на сайте и первичные показатели рекламы. Определяем, какие объявления сработали лучше всего, и на основе реальных цифр принимаем решения по масштабированию и развитию проекта.'
  }
]
</script>
