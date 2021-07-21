sap.ui.define([
	"com/infocus/PMSReport/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("com.infocus.PMSReport.controller.MainView", {
		onInit: function() {
			var sServiceURL = this.getView().getModel().sServiceUrl;
			var sSource = sServiceURL + "/pdfSet('')/$value";
			this._oModel = new JSONModel({
				Source: sSource,
				Title: "PMS Report",
				Height: "768px"
			});
			this.getView().setModel(this._oModel);
		}
	});
});