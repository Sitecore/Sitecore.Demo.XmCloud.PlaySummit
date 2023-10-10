using System;
using Spe.Core.Host;

namespace Sitecore.Demo.Edge.Website.Utilities
{
	public partial class GeneratePageScreenshots : System.Web.UI.Page
	{
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                using (ScriptSession scriptSession = ScriptSessionManager.NewSession("Default", true))
                {
                    var speScriptItem = Sitecore.Context.Database.GetItem(
                        "/sitecore/system/Modules/PowerShell/Script Library/PLAY/Generate Page Screenshots");
                    var script = speScriptItem?["Script"];

                    scriptSession.ExecuteScriptPart(script, true);
                    Response.Write("Success!");
                }
            }
        }
    }
}
