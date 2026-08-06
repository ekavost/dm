<script setup lang="ts">
const modalOpen = ref(false);
const modalMode = ref<"audit" | "call">("call");

function openModal(mode: "audit" | "call") {
  modalMode.value = mode;
  modalOpen.value = true;
}
</script>

<template>
  <div>
    <SiteAppHeader @request-call="openModal('call')" />

    <main>
      <SiteHeroSection
        @request-call="openModal('call')"
        @request-audit="openModal('audit')"
      />
      <SiteGrowthDivider />

      <SiteServicesSection />
      <SiteProcessSection />
      <SiteGrowthDivider />

      <SitePricingSection />
      <SiteAuditSection @request-audit="openModal('audit')" />
      <SiteGrowthDivider />

      <SiteContactSection />
    </main>

    <SiteAppFooter />

    <SiteRequestModal v-model:open="modalOpen" :mode="modalMode" />
  </div>
</template>
