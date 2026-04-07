<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/BaseButton.vue'
import { isNumberOrNull, isUndefinedOrNull, validateSelectOptions } from '@/utilities/validators.js'
import { computed } from 'vue'

// defineProps(['options', 'placeholder', 'selected'])
const props = defineProps({
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
    // validator(options) {
    //   return options.every(
    //     ({ value, label }) => typeof value === 'number' && typeof label === 'string',
    //   )
    // },
  },
  placeholder: { required: true, type: String },
  selected: Number,
})

const emit = defineEmits({
  select: isNumberOrNull,
})
const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

const removeItem = ['one', 'two']
console.log(removeItem)
</script>

<template>
  <div class="flex items-center gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      @change="emit('select', Number($event.target.value))"
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-xl"
    >
      <option value="" :selected="isNotSelected" disabled>
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :value="value"
        :key="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
