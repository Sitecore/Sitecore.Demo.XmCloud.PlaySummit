using System;

namespace Sitecore.Demo.Edge.Website.Utilities
{
    public partial class InitializePointOfSale : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                var item = Sitecore.Context.Database.GetItem("/sitecore/content/PLAY/playwebsite/Settings/Site Grouping/playwebsite");

                item.Editing.BeginEdit();
                try
                {
                    item["__Updated by"] = "sitecore\\Admin";
                    item.Editing.EndEdit(true, false);
                }
                catch (Exception ex)
                {
                    item.Editing.CancelEdit();
                }

                Response.Write("Success!");
            }
        }
    }
}
