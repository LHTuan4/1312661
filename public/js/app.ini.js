utils = {
    loadScripts: function (...urls) {
        urls.forEach((url) => {
            $.ajax({
                url: url,
                dataType: 'script',
                async: false
            });
        })   
    }
}


utils.loadScripts('js/app-controllers/controllers.module.js'); //load 'appControllers' module
var app = angular.module('app', ['appControllers']); //inject into app module