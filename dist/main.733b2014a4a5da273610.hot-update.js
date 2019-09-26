webpackHotUpdate("main",{

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _components_text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/text/Text */ "./src/components/text/Text.js");
/* harmony import */ var _components_text_field_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text-field/TextField */ "./src/components/text-field/TextField.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      taskList = _useState2[0],
      setTaskList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      doneTaskCount = _useState4[0],
      setDoneTaskCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      editValue = _useState6[0],
      setEditValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      taskIdOnEdit = _useState8[0],
      setTaskIdOnEdit = _useState8[1];

  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var addTaskHandler = function addTaskHandler(e) {
    e.preventDefault();
    if (inputEl.current.value === '') return;
    var newTask = {
      taskId: Date.now(),
      taskName: inputEl.current.value,
      isEdit: false
    };
    var newTaskList = [].concat(_toConsumableArray(taskList), [newTask]);
    setTaskList(newTaskList);
    inputEl.current.value = '';
  };

  var filterRemovedTask = function filterRemovedTask(id) {
    var newTaskList = taskList.filter(function (task) {
      return task.taskId !== id;
    });
    return newTaskList;
  };

  var deleteTaskHandler = function deleteTaskHandler(id) {
    var newTaskList = filterRemovedTask(id);
    setTaskList(newTaskList);
  };

  var doneTaskHandler = function doneTaskHandler(id) {
    var newTaskList = filterRemovedTask(id);
    setTaskList(newTaskList);
    var newTaskCount = doneTaskCount + 1;
    setDoneTaskCount(newTaskCount);
  };

  var toggleEditFormHandler = function toggleEditFormHandler(id) {
    var isEditTaskSwitched = taskList.map(function (task) {
      if (task.taskId === id) task.isEdit = !task.isEdit;
      return task;
    });
    setTaskList(isEditTaskSwitched);
    setTaskIdOnEdit(id);
  };

  var onEditChangeHandler = function onEditChangeHandler(e) {
    setEditValue(e.target.value);
  };

  var editTaskHandler = function editTaskHandler(e, id) {
    e.preventDefault();
    var editedTasks = taskList.map(function (task) {
      if (task.taskId === id) {
        task.taskName = editValue;
      }

      return task;
    });
    setTaskList(editedTasks);
    setEditValue('');
    toggleEditFormHandler(id);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: addTaskHandler
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_text_field_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Add a task",
    ref: inputEl
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    className: "btn-primary"
  }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, taskList.map(function (task) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: task.taskId
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_text_Text__WEBPACK_IMPORTED_MODULE_2__["default"], null, task.taskName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: function onClick() {
        return toggleEditFormHandler(task.taskId);
      },
      className: "btn-secondary"
    }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: function onClick() {
        return doneTaskHandler(task.taskId);
      },
      className: "btn-primary"
    }, "Done"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: function onClick() {
        return deleteTaskHandler(task.taskId);
      },
      className: "btn-danger"
    }, "Delete"), task.isEdit === true && task.taskId === taskIdOnEdit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: function onSubmit(e) {
        return editTaskHandler(e, task.taskId);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_text_field_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: task.taskName,
      value: editValue,
      onChange: onEditChangeHandler
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "submit",
      className: "btn-primary"
    }, "Save")));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Acomplished Task: ", doneTaskCount));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.733b2014a4a5da273610.hot-update.js.js.map