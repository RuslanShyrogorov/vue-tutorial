<script>
//!! отключаем по умолчанию наследование атрибутов на верхний элемент, script обязательно без setup
export default {
  inheritAttrs: false,
}
</script>

<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center p-2 text-xs capitalize">
      <slot />
    </a>
  </li>
</template>

<!--        variant render #1 use v-if-->
<!--<template>-->
<!--  Navigation:-->
<!--  <ul class="flex w-full items-center justify-around">-->
<!--    <li v-for="page in navItems1" :key="page" class="flex-1">-->
<!--      <a :href="`#${page}`">-->
<!--        &lt;!&ndash;    variant render #2&ndash;&gt;-->
<!--        <ClockIcon v-if="page === 'timeline'" class="h-6 w-6" />-->
<!--        <ChartBarIcon v-else-if="page === 'progress'" class="h-6 w-6" />-->
<!--        <ListBulletIcon v-else class="h-6 w-6" />-->
<!--        {{ page }}-->
<!--      </a>-->
<!--    </li>-->
<!--  </ul>-->
<!--</template>-->
