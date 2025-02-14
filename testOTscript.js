(function () {  
    var id = window["@xweb/core-utils/src/util/templateVariable/json"].pageMetaAttributes.userId

    var x = window.pageHeaderJsonData.utilityLinks.label.altText // looking for "USER1 on behalf of USER2"


    if (x.includes("on behalf") || x.includes("en representación de") || x.includes("in Vertretung von") || x.includes("pour le compte de") || x.includes("per conto di"))    {

        //sap.m.MessageBox.alert("Proxy detected. Please disable it and try again.");

        alert("Proxy detected. Please disable it and try again.");

    }else {

        //sap.m.MessageBox.alert("Loading OpenText in a new tab...");        
        //window.open("https://opentext-test.euipo.europa.eu/OTCS/cs.exe/app/nodes/"+id+"_ws", "_blank");
        window.open("https://opentext-integration.euipo.europa.eu/OTCS/cs.exe/Open/RedirectToMainWorkspace?userId="+id, "_blank");
    }                  
})();
