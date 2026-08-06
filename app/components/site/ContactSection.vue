<template>
  <section id="contactos" class="relative py-20 md:py-28">
    <UContainer>
      <div class="grid lg:grid-cols-[1fr_1fr] gap-14">
        <!-- Form -->
        <div class="rounded-2xl ring-1 ring-line bg-panel/80 p-7 md:p-9">
          <span class="eyebrow">Контакты</span>
          <h2
            class="font-display font-semibold text-2xl md:text-3xl tracking-tight mt-3"
          >
            Свяжитесь с нами
          </h2>
          <p class="text-ink/60 text-sm mt-2">
            Отправьте нам сообщение, и мы ответим вам в ближайшее время
          </p>

          <form v-if="!sent" class="mt-7 space-y-4" @submit.prevent="onSubmit">
            <UFormField label="Имя">
              <UInput
                v-model="form.name"
                placeholder="Ваше имя"
                size="lg"
                class="w-full"
                required
              />
            </UFormField>
            <UFormField label="Телефон или e-mail">
              <UInput
                v-model="form.contact"
                placeholder="+7 700 000-00-00"
                size="lg"
                class="w-full"
                required
              />
            </UFormField>
            <UFormField label="Сообщение">
              <UTextarea
                v-model="form.message"
                placeholder="Расскажите о задаче"
                :rows="4"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UCheckbox v-model="form.consent" required>
              <template #label>
                <span class="text-xs text-ink/50">
                  Я согласен(-на) на
                  <a
                    href="#"
                    class="text-signal-600 dark:text-signal-400 underline underline-offset-2"
                    >обработку персональных данных</a
                  >
                </span>
              </template>
            </UCheckbox>

            <UButton
              type="submit"
              color="primary"
              size="lg"
              class="rounded-full w-full justify-center"
              :loading="loading"
            >
              Отправить
            </UButton>
          </form>

          <div
            v-else
            class="mt-7 rounded-xl bg-growth/10 ring-1 ring-growth/30 p-5 flex gap-3"
          >
            <UIcon
              name="i-lucide-circle-check"
              class="size-5 text-growth shrink-0 mt-0.5"
            />
            <p class="text-sm text-ink/80 leading-relaxed">
              Спасибо! Ваше сообщение успешно отправлено. Мы ответим вам в
              ближайшее время.
            </p>
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-500/15 text-signal-600 dark:text-signal-400"
              >
                <UIcon name="i-lucide-chart-line" class="size-5" />
              </span>
              <div class="leading-tight">
                <p class="font-display font-semibold text-sm">
                  DM Analytics group
                </p>
                <p class="text-xs text-ink/45">
                  Настройка контекстной рекламы в РК
                </p>
              </div>
            </div>

            <ul class="mt-8 space-y-4 text-sm">
              <li class="flex items-center gap-3 text-ink/70">
                <UIcon
                  name="i-lucide-phone"
                  class="size-4 text-signal-600 dark:text-signal-400"
                />
                <a
                  href="tel:+77775607215"
                  class="font-mono hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
                  >+7 777 560-72-15</a
                >
              </li>
              <li class="flex items-center gap-3 text-ink/70">
                <UIcon
                  name="i-lucide-mail"
                  class="size-4 text-signal-600 dark:text-signal-400"
                />
                <a
                  href="mailto:vitacar2020@gmail.com"
                  class="font-mono hover:text-signal-600 dark:hover:text-signal-400 transition-colors"
                  >vitacar2020@gmail.com</a
                >
              </li>
              <li class="flex items-center gap-3 text-ink/70">
                <UIcon
                  name="i-lucide-map-pin"
                  class="size-4 text-signal-600 dark:text-signal-400"
                />
                г. Алматы, Казахстан
              </li>
              <li class="flex items-center gap-3 text-ink/70">
                <UIcon
                  name="i-lucide-clock"
                  class="size-4 text-signal-600 dark:text-signal-400"
                />
                <span>Пн–Пт 11:00–20:00, Сб–Вс — выходной</span>
              </li>
            </ul>

            <div class="flex items-center gap-3 mt-7">
              <UButton
                to="https://wa.me/77775607215"
                target="_blank"
                variant="soft"
                color="success"
                class="rounded-full"
                icon="i-simple-icons-whatsapp"
              >
                Написать в WhatsApp
              </UButton>
              <UButton
                to="https://t.me/oleg_marketing_channel"
                target="_blank"
                variant="soft"
                color="secondary"
                class="rounded-full"
                icon="i-simple-icons-telegram"
              >
                Написать в Telegram
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const loading = ref(false);
const sent = ref(false);

const form = reactive({
  name: "",
  contact: "",
  message: "",
  consent: false,
});

function onSubmit() {
  loading.value = true;
  // Aquí se integraría el envío real (API / servicio de formularios)
  setTimeout(() => {
    loading.value = false;
    sent.value = true;
  }, 600);
}
</script>
