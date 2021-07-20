sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.infocus.PMSReport.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.infocus.PMSReport",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
