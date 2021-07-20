sap.ui.define([
	"com/infocus/PMSReport/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("com.infocus.PMSReport.controller.MainView", {
		onInit: function() {
			this._sValidPath = sap.ui.require.toUrl("sap/m/sample/PDFViewerEmbedded/sample.pdf");
			this._sInvalidPath = sap.ui.require.toUrl("sap/m/sample/PDFViewerEmbedded/sample_nonexisting.pdf");
			this._oModel = new JSONModel({
				Source: this._sValidPath,
				Title: "My Custom Title",
				Height: "600px"
			});
			this.getView().setModel(this._oModel);
		}
	});
});