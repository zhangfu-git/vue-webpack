<template>
  <div class="m-form">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" v-model="name" id="name" placeholder="小罗">
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
      <input type="text" class="form-control" v-model="price" placeholder="30￥">
    </div>
    <div class="form-group">
      <label for="detaile">Detaile:</label>
      <input type="text" v-model="detaile" class="form-control" id="detaile" placeholder="具体消费的项目">
    </div>
    <div class="form-group">
      <button class="btn btn-success btn-lg btn-block" @click="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props:["recordList"],
  data() {
    return {
      date: new Date(),
      name: '',
      price: '',
      detaile: ''
    };
  },
  computed :{
    timeFormat(){
      if(this.date){
        let year = this.date.getFullYear(),
            month = this.date.getMonth(),
            date = this.date.getDate(),
            formatDate = year + '年' + month + '月' + date + '日';
        return formatDate;
      }
    },
    priceFormat(){
      if(this.price){
        let newPrice = Number(this.price);
        return (newPrice && newPrice || 0);
      }
    }
  },
  methods: {
    save() {
      if(this.name.length && this.price.length && this.detaile.length){
        this.recordList.unshift({
          date: this.timeFormat,
          name: this.name,
          price: this.priceFormat,
          detaile: this.detaile
        });
        this.name = '';
        this.price = '';
        this.detaile = '';
      }else{
        alert('请填写了内容再');
      }
    }
  }
};
</script>

<style lang="less">
  .form{
    color:red;
  }
</style>
