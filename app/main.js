"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var first_component_1 = require('./first.component');
var second_component_1 = require('./second.component');
var core_1 = require('@angular/core');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(first_component_1.FirstComponent).then(function (success) { return console.log('done 1'); }).catch(function (error) { return console.log(error); });
platform_browser_dynamic_1.bootstrap(second_component_1.twoComponent).then(function (success) { return console.log('done 2'); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map