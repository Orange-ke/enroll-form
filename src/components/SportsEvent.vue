<template>
  <!-- 参赛年龄组别选择 -->
  <van-cell-group class="event">
    <van-cell :title="eventConfig.title">
      <div slot="default" v-if="!eventConfig.isMain">
        <van-button size="small" type="danger" class="radius" @click="childOnDelete">删除</van-button>
      </div>
    </van-cell>
    <van-cell
      title="参赛名称"
      required
      :value="eventConfig.event[eventConfig.eventIndex] ? eventConfig.event[eventConfig.eventIndex].value : ''"
      isLink
      @click="childSelectEvent"
    >
    </van-cell>
    <van-action-sheet
      v-model="eventConfig.eventShow"
      :actions="eventConfig.eventActions"
      @select="childOnEventSelect"
    />
    <van-cell
      title="参赛形式"
      required
      :value="eventConfig.form[eventConfig.formIndex] ? eventConfig.form[eventConfig.formIndex].value : ''"
      isLink
      @click="childSelectForm"
    >
    </van-cell>
    <van-action-sheet
      v-model="eventConfig.formShow"
      :actions="eventConfig.formActions"
      @select="childOnFormSelect"
    />
  </van-cell-group>
</template>

<script>
import { CellGroup, Cell, ActionSheet, Button } from 'vant'
export default {
  props: {
    eventConfig: {
      type: Object,
      default: function () {
        return {}
      }
    },
    index: { type: Number, default: 0 },
    selectEvent: { type: Function, default: null },
    onEventSelect: { type: Function, default: null },
    selectForm: { type: Function, default: null },
    onFormSelect: { type: Function, default: null },
    onDelete: { type: Function, default: null }
  },
  methods: {
    childOnDelete: function () {
      if (this.onDelete) {
        this.onDelete(this.index)
      }
    },
    childSelectEvent: function () {
      if (this.selectEvent) {
        this.selectEvent(this.index)
      }
    },
    childOnEventSelect: function (item) {
      if (this.onEventSelect) {
        this.onEventSelect(item, this.index)
      }
    },
    childSelectForm: function () {
      if (this.selectForm) {
        this.selectForm(this.index)
      }
    },
    childOnFormSelect: function (item) {
      if (this.onFormSelect) {
        this.onFormSelect(item, this.index)
      }
    }
  },
  components: {
    'van-cell-group': CellGroup,
    'van-cell': Cell,
    'van-action-sheet': ActionSheet,
    'van-button': Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .event {
    border-radius: 15px;
    border: 1px solid #f5f5f5;
    width: 95%;
    margin: 10px auto 0;
    overflow: hidden;
    box-shadow: -1px 1px 5px #ddd;
  }
</style>
