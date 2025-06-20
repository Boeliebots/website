<script setup lang="ts">
import { computed } from 'vue';
import { eventIsClosed } from '../utils';

const isClosed = computed(() => eventIsClosed());

</script>

<template>
    <slot name="closed" v-if="isClosed" />
    <slot name="open" v-else />
</template>
