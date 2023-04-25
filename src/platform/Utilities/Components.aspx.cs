using System;
using Spe.Core.Host;

namespace Sitecore.Demo.Edge.Website.Utilities
{
	public partial class Components : System.Web.UI.Page
	{
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                using (ScriptSession scriptSession = ScriptSessionManager.NewSession("Default", true))
                {
                    var libraryId = Request.QueryString["libraryId"];
                    var speScriptItem = Sitecore.Context.Database.GetItem("/sitecore/system/Modules/PowerShell/Script Library/PLAY/Update Components LibraryId");
                    var script = speScriptItem["Script"];

                    if (!string.IsNullOrEmpty(script) && !string.IsNullOrEmpty(libraryId))
                    {
                        script = script.Replace("{{libraryId}}", libraryId);
                        scriptSession.ExecuteScriptPart(script, true);
                        Response.Write("Success!");
                    }
                    else
                    {
                        Response.Write("Make sure all required parameters are provided.");
                    }
                }
            }
        }
    }
}
