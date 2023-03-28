using System;
using System.Globalization;
using Sitecore.Configuration;

namespace Sitecore.Demo.Edge.Website.Utilities
{
	public partial class Hotfix : System.Web.UI.Page
	{
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                var item = Factory.GetDatabase("master").GetItem("/sitecore/system/Languages/fr-CA");
                item.Editing.BeginEdit();
                item[FieldIDs.Revision] = Guid.NewGuid().ToString("D", CultureInfo.InvariantCulture);
                item.Editing.EndEdit();
            }
        }
    }
}
