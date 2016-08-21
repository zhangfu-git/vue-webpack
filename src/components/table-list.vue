<template lang="html">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>日期</th>
        <th>人物</th>
        <th>金额</th>
        <th>事迹</th>
        <th>
          其他
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in recordList">
        <td>{{item.date}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}￥</td>
        <td>{{item.detaile}}</td>
        <td>
          <button type="button" class="btn btn-danger" @click="remove($index)">删除</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td text="total">合计:{{ total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  props:['recordList'],
  data() {
    return {
      total: 0
    };
  },
  watch: {
    'recordList': function(val, oldVal){
      let that = this;
      let result = 0;
      val.forEach(function(item){
        result += item.price;
      });
      this.total = result;
    }
  },
  methods: {
    remove(index){
      this.recordList.splice(index, 1);
    }
  }
};
</script>

<style lang="less">
</style>
