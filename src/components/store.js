const key = 'VUE_RECORD';

if(!localStorage.getItem(key)) {

  let data = {
    "recordList": []
  };
  localStorage.setItem(key, JSON.stringify(data));
}

export default {
  fetch () {
    if(localStorage.getItem(key) === "undefined"){
      let data = {
        "recordList": []
      };
      localStorage.setItem(key, JSON.stringify(data));
    }
    return JSON.parse(localStorage.getItem(key));
  },
  save (store) {
    localStorage.setItem(key, JSON.stringify(store));
  }
}
