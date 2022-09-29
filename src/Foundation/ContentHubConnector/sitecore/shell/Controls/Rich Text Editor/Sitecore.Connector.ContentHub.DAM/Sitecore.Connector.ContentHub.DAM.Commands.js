var scEditor = null;
var scTool = null;

//Set the Id of your button into the RadEditorCommandList[]
Telerik.Web.UI.Editor.CommandList["AddMAsset"] = function (commandName, editor, args) {
    var d = Telerik.Web.UI.Editor.CommandList._getLinkArgument(editor);
    Telerik.Web.UI.Editor.CommandList._getDialogArguments(d, "A", editor, "DocumentManager");

    //Retrieve the html selected in the editor
    var html = editor.getSelectionHtml();

    scEditor = editor;

    //Call your custom dialog box
    editor.showExternalDialog(
        "/sitecore/shell/client/Applications/MApp",
        null, //argument
        1100, //Width
        669, //Height
        scTestBtnCallback, //callback
        null, // callback args
        "MAssets",
        true, //modal
        Telerik.Web.UI.WindowBehaviors.Close, // behaviors
        false, //showStatusBar
        false //showTitleBar
    );
};

//The function called when the user close the dialog
function scTestBtnCallback(sender, returnValue) {
    if (returnValue && returnValue.source) {
        if (returnValue.file_type === "Image") {
            scEditor.pasteHtml('<img alt="' + returnValue.alternative+'" src="' + returnValue.source + '"/>', "DocumentManager");
        }
        else if (returnValue.file_type === "Video") {
            scEditor.pasteHtml('<video width="320" height="240" controls="controls"><source src="' + returnValue.source + '"></video>', "DocumentManager");
        }
        else {
            var html = scEditor.getSelectionHtml();
            if (!html) {
                html = returnValue.alternative;
            }
            scEditor.pasteHtml("<a href='" + returnValue.source + "' target='_blank'>" + html + "</a>", "DocumentManager");
        }
    }
}