"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDeafultTitle();

    _classCallCheck(this, Task);

    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Task is creating...');
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this._done = true;
      Task.count -= 1;
      console.log("Task ".concat(this.title, " was done"));
    }
  }, {
    key: "done",
    get: function get() {
      return this._done === true ? 'Done' : 'Undone';
    },
    set: function set(value) {
      if (value !== undefined && typeof value === 'boolean') {
        this._done = value;
      } else {
        console.error('Error. true or false are possible');
      }
    }
  }], [{
    key: "getDeafultTitle",
    value: function getDeafultTitle() {
      return 'Task';
    }
  }]);

  return Task;
}();

Task.count = 0;
var task = new Task('Clean'); // let task2 = new Task('Buy');
// let task3 = new Task();
// console.log(typeof task);
// console.log(task instanceof Task);
// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
// console.log(Task.count);

console.log(task.done);
task.complete();
console.log(task.done); // console.log(Task.count);