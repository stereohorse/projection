<template>
  <el-form :inline="true" class="demo-form-inline">
    <el-form-item>
      <el-input v-model="projectName" placeholder="Approved by"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">Query</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'vue-property-decorator';

@Component
export default class SearchInput extends Vue {

  projectName = '';

  search() {
    console.log(this.projectName);
  }
}
</script>
