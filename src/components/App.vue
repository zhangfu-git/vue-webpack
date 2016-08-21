<script>
  import store from './store';
  import formAdd from './form-add';
  import tableList from './table-list';

  export default {
    el : '#chat',
    data() {
      let serverData  = store.fetch();
      return {
        recordList: serverData.recordList,
        serverData: serverData
      };
    },
    watch:{
      "recordList" : {
        deep: true,
        handler(){
          store.save(this.serverData);
        }
      }
    },
    components: {
      formAdd, tableList
    }
  }
</script>

<template>
    <div>
        <div class="main">
          <div class="col-md-3">
            <form-add :record-list="recordList"></form-add>
          </div>
          <div class="col-md-9">
            <table-list :record-list="recordList"></table-list>
          </div>
        </div>
    </div>
</template>

<style lang="less">
    #chat {

        .main {
            position: relative;
            overflow: hidden;
            background-color: #eee;
        }
        .m-text {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
        }
        .m-message {
            height: ~'calc(100% - 160px)';
        }
    }
</style>
