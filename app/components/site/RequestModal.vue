<template>
  <UModal v-model:open="isOpen">
    <template #content>
      <div class="p-7">
        <div v-if="!sent">
          <h3 class="font-display font-semibold text-xl tracking-tight">
            {{
              mode === "audit"
                ? "Заполните форму для Экспресс-Аудита"
                : "Закажите звонок"
            }}
          </h3>
          <p class="text-ink/50 text-sm mt-1">
            {{
              mode === "audit"
                ? "Оставьте сайт и контакт — мы изучим его и пришлём разбор"
                : "Оставьте номер — перезвоним в рабочее время"
            }}
          </p>

          <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
            <UFormField v-if="mode === 'audit'" label="Адрес сайта">
              <UInput
                v-model="form.site"
                placeholder="https://"
                size="lg"
                class="w-full"
                required
              />
            </UFormField>
            <UFormField label="Имя">
              <UInput
                v-model="form.name"
                placeholder="Ваше имя"
                size="lg"
                class="w-full"
                required
              />
            </UFormField>
            <UFormField label="Телефон">
              <UInput
                v-model="form.phone"
                placeholder="+7 700 000-00-00"
                size="lg"
                class="w-full"
                required
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
              {{
                mode === "audit" ? "Заказать экспресс-аудит" : "Заказать звонок"
              }}
            </UButton>

            <p
              v-if="mode === 'audit'"
              class="text-ink/35 text-[11px] leading-relaxed"
            >
              * Оставляем за собой право отказать в проведении бесплатного
              аудита без объяснения причин.
            </p>
          </form>
        </div>

        <div v-else class="flex gap-3">
          <UIcon
            name="i-lucide-circle-check"
            class="size-5 text-growth shrink-0 mt-0.5"
          />
          <p class="text-sm text-ink/80 leading-relaxed">
            {{
              mode === "audit"
                ? "Спасибо! Заявка принята. Я изучу ваш сайт и отвечу вам в ближайшее время."
                : "Спасибо! Ваша заявка принята. Мы перезвоним вам в ближайшее время."
            }}
          </p>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{ mode: "audit" | "call" }>();
const isOpen = defineModel<boolean>("open", { default: false });

const loading = ref(false);
const sent = ref(false);

const form = reactive({
  site: "",
  name: "",
  phone: "",
  consent: false,
});

watch(isOpen, (val) => {
  if (val) sent.value = false;
});

function onSubmit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    sent.value = true;
  }, 600);
}
</script>
