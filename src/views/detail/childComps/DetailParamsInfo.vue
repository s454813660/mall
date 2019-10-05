<template>
  <div class="params-info">
    <div class="param-desc" v-if="paramInfo.desc">{{paramInfo.desc}}</div>
    <table class="size">
      <tr v-for="(item, index) in paramInfo.size" :key="index">
        <td v-for="(n, indey) in item" :key="indey">{{n}}</td>
      </tr>
    </table>
    <table class="parameter">
      <tr v-for="(m, indez) in paramInfo.parameter" :key="indez">
        <td class="keys">{{m.key}}</td>
        <td class="value">{{m.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    
  }
}
</script>
<style scoped>
.params-info {
  width: 100%;
  padding: 20px 15px;
  border-bottom: 5px solid #f5f7fa;
  font-size: 14px;
}
.param-desc {
  border-bottom: 1px solid #f7f7f7;
  padding-bottom: 5px;
}
.params-info table{
  padding-right:15px;
  width: 100%;
  border-collapse: collapse;
  line-height: 42px;
}

.params-info table td {
  /* white-space: normal; */
  padding-right: 5px;
  border-bottom: 1px solid #f7f7f7;
}
.params-info table td:first-child {
  white-space: nowrap;
  padding-right: 10px;
}
.params-info .parameter .key {
  color: #b3b3b3;
}
.params-info .parameter .value {
  text-align: center;
  color: var(--color-high-text);
  white-space: normal;
}
</style>