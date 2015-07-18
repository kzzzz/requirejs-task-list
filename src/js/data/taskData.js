define([], function () {
    'use strict';

    var STORE_NAME = "tasks";

    var save = function (tasks) {
        localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
    };

    var load = function () {
        var storedTasks = localStorage.getItem(STORE_NAME);
        if (storedTasks) {
            return JSON.parse(storedTasks);
        }
        return [];
    };

    var clear = function () {
        localStorage.removeItem(STORE_NAME);
        console.log('tasks are removed');
    };
    return {
        save: save,
        load: load,
        clear: clear
    }
});