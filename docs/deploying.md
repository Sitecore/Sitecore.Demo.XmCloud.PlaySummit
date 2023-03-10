# Deploying PLAY! Summit to XM Cloud

These steps are for deploying the PLAY! Summit demo to XM Cloud. At the end, you will have:

- An XM Cloud project and an XM Cloud environment for PLAY! Summit.
- Access to the Sitecore Launchpad, Pages, Content Editor, Experience editor...
- An editing rendering host hosted in XM Cloud for Pages and Experience editor to be able to render and edit the pages.

You will not get:

- A delivery rendering host for visitors to browse your website on the web
- Sitecore Search, Sitecore CDP/Personalize, Content Hub DAM and CMP integrations.

To get these extra things, you must deploy the front-end project somewhere on the web (eg.: Vercel) with the right environment variables. This is not covered in this documentation.

## Disclaimer

Please be aware that the Sitecore Demo Solutions team does not provide support for deployments of the PLAY! Summit demo on XM Cloud. As part of the deployment process for PLAY! Summit on XM Cloud, you will need to go to the Sitecore XM Cloud Deploy App. The demo team does not have access to deployments performed through the Sitecore XM Cloud Deploy App. If you run into issues you can reach out to the XM Cloud team but there is no official support channel at this time.

## Prerequisites

- You need access to a Sitecore Cloud organization.
- The Sitecore Cloud organization must have XM Cloud enabled.
- There must have room for a new XM Cloud project in the Sitecore Cloud organization.

## Deploy the PLAY! Summit Demo in XM Cloud Deploy App

1. Create a new GitHub repository
   1. Ensure you are logged into your GitHub account.
   2. From [this repository](https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit), click the green "Use this template" button to create a new repository using the code from the Sitecore repository.
   3. Give your repository a name.
   4. Click the green "Create repository from template" button.

   The newly created repo will be used to when deploying to XM Cloud in a future step.

2. Create a new project on XM Cloud
   1. Log in to the [XM Cloud Deploy App](https://deploy.sitecorecloud.io/) (or you can alternatively login to the Sitecore Cloud Portal and access the Deploy App).
   2. Click the "Create a new project" button.
   3. Select the "Start from your existing XM Cloud code" option.
   4. Click the "Next" button.
   5. Select the "Continue with GitHub" option.
   6. Click the "Next" button.
   7. Select an existing connection to your GitHub account or create a new GitHub connection.
   8. Click the "Next" button.
   9. Give a name to your XM Cloud project.
   10. In the "Repository name" dropdown list, select the repository that you created above.
   11. Give your default XM Cloud environment a name.
   12. Set the "Linked branch" to the "main" branch (or your desired branch).
   13. Configure the rest of your XM Cloud environment as required.
   14. Click the "Create and deploy" button.
3. Wait for the deployment to complete.
4. Once the deployment completed, you will be able to access the Sitecore Launchpad and a preview of the Editing host.
5. At this time you should be able to open the PLAY! Summit demo in Pages or Experience Editor.
6. It is advised that you manually run the following two steps in the Sitecore Control Panel in order to get full functionality:
   1. Populate Solr Managed Schema.
   2. Indexing Manager (Rebuild all indexes).
