<template>
  <el-container>
    <el-header>
      <SearchInput />
    </el-header>

    <el-main>
      <ProjectsDashboard />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';

import ProjectsDashboard from './components/ProjectsDashboard.vue';
import SearchInput from './components/SearchInput.vue';

import { Component } from 'vue-property-decorator';

@Component({
  components: {
    ProjectsDashboard,
    SearchInput
  }
})
export default class App extends Vue {}
</script>

