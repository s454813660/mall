<template>
  <div class="goods-params" v-if="Object.keys(itemParams).length >= 1">
    <div class="size-info">
      <div class="key">{{itemParams.rule.key}}</div>
      <div class="disclaimer">{{itemParams.rule.disclaimer}}</div>
      <div class="size-table">
        <div class="row" v-for="(item,index) in itemParams.rule.tables[0]" :key="index">
          <div v-if="itemParams.rule.tables.length <= 1">
            <div class="col" v-for="(n, indey) in item" :key="indey">{{n}}</div>
          </div>
          <div v-else>
            <div class="col" v-for="(n, indey) in item.concat(itemParams.rule.tables[1][index].filter((item, index) => index > 0))" :key="indey">{{n}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-info">
      <div class="key">{{itemParams.info.key}}</div>
      <div class="row" v-for="(item, indez) in itemParams.info.set" :key="indez">
        <div class="col" v-for="(m,i) in item" :key="i">{{m}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.goods-params {
  width: 100%;
  margin-top: 15px;
  padding: 0 10px 15px;
  border-bottom: 8px solid #f5f7fa;
  font-size: 14px;
}
.key {
  padding: 15px 0;
  font-size: 16px;
}
.size-info .disclaimer {
  border-bottom: 1px solid #f7f7f7;
  padding-bottom: 5px;
}
.size-table .row div {
  display: flex;
  line-height: 42px;
  border-bottom: 1px solid #f7f7f7;
}
.size-table .col {
  flex: 1;
}

.product-info .row {
  display: flex;
  line-height: 42px;
  border-bottom: 1px solid #f7f7f7;
}
.product-info .col:first-child {
  margin-right: 20px;
}
.product-info .col:last-child {
  flex: 1;
  text-align: center;
  color: var(--color-high-text);
}
</style>