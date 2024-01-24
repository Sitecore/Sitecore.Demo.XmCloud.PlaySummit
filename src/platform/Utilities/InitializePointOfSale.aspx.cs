﻿using System;

namespace Sitecore.Demo.Edge.Website.Utilities
{
    public partial class InitializePointOfSale : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (new Sitecore.SecurityModel.SecurityDisabler())
            {
                var item = Sitecore.Context.Database.GetItem("/sitecore/content/PLAY/playwebsite/Settings/Site Grouping/playwebsite");

                using (new Sitecore.Data.Items.EditContext(item))
                {
                    item["POS"] = item["POS"] + "warmup";
                }

                using (new Sitecore.Data.Items.EditContext(item))
                {
                    item["POS"] = item["POS"].Replace("warmup", string.Empty);
                }

                Response.Write("Success!");
            }
        }
    }
}
