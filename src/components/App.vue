<template>
  <div>
    Hi
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {

  mounted() {
    console.log('mounted');
  }
}

</script>
