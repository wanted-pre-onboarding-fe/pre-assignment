export default Storage = function (app) {
  // 애플리케이션 명
  this.app = app;
  // 스토리지로부터 읽어들인 객체
  this.storage = localStorage;

  // 해당하는 객체가 없을 경우 빈 객체를 생성
  this.data = JSON.parse(this.storage[this.app] || '{}');
};

Storage.prototype = {
  // 지정된 키로 값을 취득
  getItem: function (key) {
    return this.data[key];
  },
  // 지정된 키/값으로 객체를 고쳐쓰기
  setItem: function (key, value) {
    this.data[key] = value;
  },
  // MyStorage 객체의 내용을 스토리지에 보관
  save: function () {
    this.storage[this.app] = JSON.stringify(this.data);
  },

  clear: function () {
    this.storage.clear();
  },
};
