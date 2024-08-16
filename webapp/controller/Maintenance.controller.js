sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.ennovi.pm.maintenance.controller.Maintenance", {
        onInit: function () {

            var oData={
                Data:[{
                    maintPlanNo:"138032024Q2",
                    equipNO:"13803",
                    equipNO2:"S-78",
                    equipDesc:"Equip description",
                    equipDept:"S",
                    equipMaintFrequencyValue:"090",
                    plan:"2024Q2",
                    schedMaintDates:"2024/06/10",
                    equipType:"machine",
                    respGroupValue:"A1",
                    maintSubTime:"2024/05/13",
                    maintainerName:"john(0127302)",
                    maintainerStartTime:"2024/05/13",
                    durationOfMaintenance:"1.08"
            }]};
            var oMaintModel=new JSONModel(oData);
            this.getView().setModel(oMaintModel,"MaintModel");

        }
    });
});
