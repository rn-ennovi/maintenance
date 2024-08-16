/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comennovipm/maintenance/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
