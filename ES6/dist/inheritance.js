"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task(title) {
    _classCallCheck(this, Task);

    this._title = title;
    this.done = false;
    Task.count += 1;
    console.log('Task creation');
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("Task ".concat(this.title, " was done"));
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      if (value !== undefined) {
        this._title = value;
      } else {
        console.error('Value is undefined');
      }
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return 'Task';
    }
  }]);

  return Task;
}();

Task.count = 0;

var SubTask =
/*#__PURE__*/
function (_Task) {
  _inherits(SubTask, _Task);

  function SubTask(title, parent) {
    var _this;

    _classCallCheck(this, SubTask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubTask).call(this, title));
    _this.parent = parent;
    console.log('SubTask creation');
    return _this;
  }

  _createClass(SubTask, [{
    key: "complete",
    value: function complete() {
      _get(_getPrototypeOf(SubTask.prototype), "complete", this).call(this);

      console.log("SubTask ".concat(this.title, " was done"));
    }
  }]);

  return SubTask;
}(Task);

var task = new Task('Learn JS');
var subTask = new SubTask('Learn ES6', task);
console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);
task.complete();
subTask.complete();
console.log(task);
console.log(subTask);