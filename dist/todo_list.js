"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Todo = require('./todo.js');
var TodoList = /*#__PURE__*/function () {
  function TodoList(title) {
    _classCallCheck(this, TodoList);
    this.title = title;
    this.todos = [];
  }
  return _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      if (!(todo instanceof Todo)) {
        throw new TypeError('This is not a todo. Can only add todo items.');
      }
      this.todos.push(todo);
    }
  }, {
    key: "size",
    value: function size() {
      return this.todos.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.todos[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this.todos[this.size() - 1];
    }
  }, {
    key: "_validateIndex",
    value: function _validateIndex(index) {
      var lastIndex = this.size() - 1;
      if (typeof index !== 'number' || index > lastIndex || index < 0) {
        throw new ReferenceError("Invalid index (".concat(index, ")"));
      }
    }
  }, {
    key: "itemAt",
    value: function itemAt(index) {
      this._validateIndex(index);
      return this.todos[index];
    }
  }, {
    key: "markDoneAt",
    value: function markDoneAt(index) {
      var item = this.itemAt(index);
      item.markDone();
    }
  }, {
    key: "markUndoneAt",
    value: function markUndoneAt(index) {
      var item = this.itemAt(index);
      item.markUndone();
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return this.todos.every(function (item) {
        return item.isDone() === true;
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      return this.todos.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.todos.pop();
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      this._validateIndex(index);
      return this.todos.splice(index, 1);
    }
  }, {
    key: "toString",
    value: function toString() {
      var title = "---- ".concat(this.title, " ----");
      var todos = this.todos.map(function (todo) {
        return todo.toString();
      }).join('\n');
      return "".concat(title, "\n").concat(todos);
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      for (var index = 0; index < this.todos.length; index += 1) {
        callback(this.todos[index]);
      }
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      var filteredList = new TodoList('Filtered');
      this.forEach(function (todo) {
        if (callback(todo) === true) {
          filteredList.add(todo);
        }
      });
      return filteredList;
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      var matches = this.filter(function (todo) {
        return todo.getTitle() === title;
      });
      if (matches.size() > 0) return matches.first();
      return undefined;
    }
  }, {
    key: "allDone",
    value: function allDone() {
      return this.filter(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "allNotDone",
    value: function allNotDone() {
      return this.filter(function (todo) {
        return !todo.isDone();
      });
    }
  }, {
    key: "markDone",
    value: function markDone(title) {
      var todo = this.findByTitle(title);
      if (todo !== undefined) {
        todo.markDone();
      }
    }
  }, {
    key: "markAllDone",
    value: function markAllDone() {
      this.forEach(function (todo) {
        return todo.markDone();
      });
    }
  }, {
    key: "markAllUndone",
    value: function markAllUndone() {
      this.forEach(function (todo) {
        return todo.markUndone();
      });
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.todos.slice();
    }
  }]);
}();
module.exports = TodoList;