# Website

## Project Description

Main PLAY! Summit website built with:

- Sitecore XM Cloud
- Sitecore Experience Edge
- Sitecore Content Hub DAM and CMP
- Sitecore JavaScript Services (JSS)
- Sitecore CDP
- Sitecore Personalize
- Next.js
- Tailwind CSS
- Storybook

### Project Content

This repository contains:

- A Visual Studio solution.
- Sitecore CLI configuration.
- A `\docker` folder that has:
  - A `\deploy` folder that is volume mounted to the CM container. It is used to deploy from Visual Studio to the running container.
- A `\ch-one` folder that is a Git sub-module referencing https://github.com/Sitecore/Sitecore.Demo.CHONE, it is used for Sitecore Demo Portal deployments.
- A `\src` folder that has:
  - The Sitecore Content Serialization (SCS) configuration JSON files.
  - `\Foundation\BranchPresets`: .Net project to enable branch presets in Sitecore.
  - `\icons`: Icons used by the Sitecore renderings.
  - `\items`: Serialized items using Sitecore Content Serialization (SCS).
  - `\components`: Serialized Sitecore Components components, styles and datasources.
  - `\personalize`: Serialized Sitecore Embedded Personalization data.
  - `\platform`: .Net project with Sitecore configuration, pipeline processors, custom fields, and utility pages.
  - `\rendering`: Sitecore JSS Next.js project connected to the Docker CM using the XM Edge GraphQL development endpoint.
- A `\ch-one` folder that is a Git submodule referencing <https://github.com/Sitecore/Sitecore.Demo.CHONE> (used for [Demo Portal](https://portal.sitecoredemo.com/) deployments).

### Configured for Sitecore-based workflow

It is intended that you work directly in Sitecore to define templates and renderings, instead of using the code-first/disconnected approach. This is also known as "Sitecore-first" JSS workflow. To support this:

- The JSS content workflow is disabled.
- Imported items will not be marked as 'protected'.
- JSS import warnings in the Content Editor and Experience Editor have been disabled.

### Serialized Sitecore Items

The `\items` folder contains serialized Sitecore content items for this demo. The serialized paths are configured in `*.module.json` files in the parent directory.

- `InitItems.module.json` configures items which this solution needs to push before deploying other items.
- `HeadlessSxaWebsite.module.json` contains developer-owned items for the website.
- `HeadlessSxaWebsite-Content.module.json` contains content items for the website. It's a good practice to put content into a separate module, so it can be excluded from packaging and deployment.
- `renderinghost.module.json` contains a default rendering host configuration item.
- `Roles.module.json` contains a custom demo Sitecore roles.

See [Sitecore Content Serialization documentation](https://doc.sitecore.com/xp/en/developers/103/developer-tools/sitecore-content-serialization.html) for more information.

### Serialized Sitecore Components

The `\components` folder contains serialized Sitecore Components components, styles and datasources. The scripts that take care of the serialization are located at the root of the project.

To push the serialized assets to your Sitecore Components library, use the following command:

```ps1
.\componentspush.ps1 -libraryId your_library_id -apiKey your_api_key
```

To serialize any new changes to the repo use the following command:

```ps1
.\componentspull.ps1 -libraryId your_library_id -apiKey your_api_key
```

You can find your library ID and API key by going to your Sitecore Components library Settings tab. Your library ID is located in the url between `/libraries/` and `/settings`. Your API key is in a section of the page called "Your component library API key".

### Serialized Sitecore Embedded Personalization

The `\personalize` folder contains serialized Sitecore Embedded Personalization data. The scripts that take care of the serialization are located at the root of the project.

To push the serialized data, use the following command:

```ps1
.\personalize-push.ps1 -token your_personalize_token
```

To serialize any new changes to the repo use the following command:

```ps1
.\personalize-pull.ps1 -token your_personalize_token
```

You can find the token by inspecting network requests (look for the 'Authorization' header) in Chrome to the following url: `https://api-engage-us.sitecorecloud.io/v3/flowDefinitions/...` while browsing the variants in Pages.
Optional `scope` parameter can be also used in case you use PAGES_PERSONALIZE_SCOPE environment variable in your XM Cloud environment.

### Sitecore Platform Project

This Visual Studio / MSBuild project is used to deploy code and configuration to the main Sitecore platform roles, known as Content Management (CM). (This sample uses the XM Cloud container topology and thus only has a Standalone `cm`.)

### Rendering Next.js Project

The `\rendering` folder contains the main website JSS Next.js project. The content of this folder is mapped to the Rendering container using a Docker volume. All changes to the sources trigger a recompile and can be seen live in the browser at [https://www.xmcloudcm.localhost](https://www.xmcloudcm.localhost).

You can also build or run the Next.js application directly using `npm` commands within `src\rendering`. It is not recommended to run both the rendering Docker container and the npm commands at the same time as both use the same output folder. Stop the rendering Docker container if you want to build or run the Next.js application using `npm` commands.

#### Storybook

The project uses [Storybook](https://github.com/storybookjs/storybook) for "disconnected" development. Standard JSS "disconnected" mode is not available in XM Cloud solution templates. `jss start` runs connected and expects Sitecore to be running using the provided Docker compose container environment.

To browse the existing stories, run `jss storybook` or `npm run storybook`.

To add a new story, create a `*.stories.tsx` file under `src\stories`. Use other files in that folder as an example.

If adding a component story, the title should be: `'Components/%Component Name Here%'`. For pages, it is `'Pages/%Page Name Here%'`.

`jss scaffold [%OptionalComponentPath%]%ComponentName%` will automatically create the related component story at the same time as the component file.

## Prerequisites

1. Ensure you have installed and followed the [global prerequisites](prerequisites.md).
2. Ensure you have run the [Docker prerequisites](docker.md#prerequisites).

### Optional: Sitecore Content Hub Module Configuration

If you want the website to use Sitecore Content Hub DAM and CMP, you must:

1. Edit the `.\.env` file.
2. Fill the following values:

   ```shell
   # Content Hub Connector
   SITECORE_CMP_ContentHub=ClientId=LogicApp;ClientSecret=YOUR_CLIENT_SECRET;UserName=YOUR_CONTENT_HUB_SUPERUSER_USER_NAME;Password=YOUR_CONTENT_HUB_SUPERUSER_PASSWORD;URI=https://YOUR_CONTENT_HUB_SANDBOX_NAME.sitecoresandbox.cloud/;
   SITECORE_CMP_Service_ServiceBusEntityPathIn=Endpoint=sb://seps-run-sb-weu.servicebus.windows.net/;SharedAccessKeyName=Read;SharedAccessKey=YOUR_SHARED_ACCESS_KEY;EntityPath=hub_out_SOME_ID
   SITECORE_CMP_Service_ServiceBusSubscription=hub_out_subscription
   SITECORE_CMP_Service_ServiceBusEntityPathOut=Endpoint=sb://seps-run-sb-weu.servicebus.windows.net/;SharedAccessKeyName=Write;SharedAccessKey=YOUR_SHARED_ACCESS_KEY;EntityPath=hub_in_SOME_ID
   SITECORE_DAM_ContentHub=ClientId=LogicApp;ClientSecret=YOUR_CLIENT_SECRET;UserName=YOUR_CONTENT_HUB_SUPERUSER_USER_NAME;Password=YOUR_CONTENT_HUB_SUPERUSER_PASSWORD;URI=https://YOUR_CONTENT_HUB_SANDBOX_NAME.sitecoresandbox.cloud/;
   SITECORE_DAM_SearchPage=https://YOUR_CONTENT_HUB_SANDBOX_NAME.sitecoresandbox.cloud/en-us/sitecore-dam-connect/approved-assets
   SITECORE_DAM_ExternalRedirectKey=Sitecore
   ```

3. Save the file.

## Optional: Sitecore Search Custom Configuration

Sitecore Search is enabled when the search environment variables are set. When deployed from the Demo Portal, it uses a shared Sitecore Search domain where all the sessions, speakers, sponsors, vendors, and news are indexed. You do not have access to that shared Sitecore Search domain, so you cannot change or update what is indexed.

If you want the website to use a custom Sitecore Search domain, you must:

1. Have a Sitecore Search domain based on the "PLAY! Summit Demo" domain configuration.
   1. [Contact the demo team on Slack](../README.md#how-can-i-get-help-with-play-summit) for more information about this domain.
2. Edit the `.\.env` file.
3. Change the following values:

   ```shell
   # Search SDK
   SEARCH_ENV=prod
   SEARCH_CUSTOMER_KEY=YOUR_SEARCH_CUSTOMER_KEY
   SEARCH_API_KEY=YOUR_SEARCH_API_KEY
   ```

   - In general, you can use any search domain, just add a sorting option called "featured_desc" and a suggestion block called "content_name_context_aware". These are referenced in code and the widgets will not load if they do not exist in your Sitecore Search domain.

4. Save the file.

## Running the Website

1. Ensure you have run the [prerequisites](#prerequisites) above.
2. [Start the containers](docker.md#starting-the-containers) and follow the login directions.
3. Wait for the startup script to open browser tabs for the rendered site and Sitecore Launchpad.

## Stopping the Website

Stop the website by [stopping the containers](docker.md#stopping-the-containers).

## Starting Over

You can remove all databases and solr indexes content by following the [Docker starting over procedure](docker.md#starting-over).

Changes to the front-end project must be reverted from your Git client.

## Developing the Website

### Best Practices

#### Never Use a Paragraph Element For a JSS RichText Component

Using a RichText JSS element with a `tag="p"` prop causes issues when editing the element in Horizon. To be specific, Horizon will wrap your plain text inside a paragraph which results in nested `p` tags and an invalid HTML. For this reason it is suggested to use a block element that has no children restrictions like `div`, `section`, `blockquote`, etc.

#### Use an Item ID Instead of an Item Path For Rendering Items Datasources

When creating a rendering for a new Sitecore Component refrain from using paths as Datasources or inside GraphQL queries. Instead replace them with the corresponding Item IDs, so that renaming the items does not cause any issues later on.

### Languages

This demo comes with only a few configured languages:

- `en` and `fr-CA` in Sitecore.
- `en`, `fr-CA`, and `ja-JP` in the Next.js website.

#### How to add a language to the demo

1. Edit `src\rendering\next.config.js`.
2. In the `nextConfig` const, add the new language to the `i18n.locales` array.
3. In Sitecore add the associated new language item.
4. Add content in the new language.
5. Redeploy the front-end application on XM Cloud.

**Hint:** If you add `ja-JP`, you can skip the modification and redeploy of the front-end application.

### Custom Renderings Icons

#### Adding New Icons

To add new icons to the EdgeIcons pack download your selected icons in a `.png` format and 100x100 px in size. When you have your desired icons you should add it to all four subfolders in `Sitecore.Demo.XmCloud.PlaySummit\src\icons`.

#### Generating the ZIP file

In order to be able to use the icons as rendering icons they need to be in a `.zip` format with the following structure: `EdgeIcons.zip\EdgeIcons\[size]x[size]`. To create a zip file right-click the EdgeIcons folder and select _Send to > Compressed (zipped) folder_.

#### Quick Deploy and Test Icons

To test your new zip you can upload it to `Sitecore.Demo.XmCloud.PlaySummit\docker\deploy\sitecore\shell\Themes\Standard`. It will automatically deploy them to your local cm container and you will be able to use and test them immediately.

#### Choosing a Rendering Icon

When creating a new rendering you should select an appropriate icon for it. The custom Edge icons are located in `\sitecore\shell\Themes\Standard\EdgeIcons`. To select an icon, click on the icon of the rendering item and write the relative path to the selected icon (e.g. `edgeicons/32x32/breadcrumb.png`).

#### Adding Icons to the Docker Build

In order for your new icons to be available in all newly built instances, the new ZIP file needs to be added to the Docker build. In order to do that you should replace the existing ZIP file in `Sitecore.Demo.XmCloud.PlaySummit\src\platform\sitecore\shell\Themes\Standard` with your new version.

#### Credits

All icons are by [icons8](https://icons8.com/icons/color).

### Developing the Platform Visual Studio Solution

#### Deploying the Platform Visual Studio Solution to the Running Containers

To deploy configuration, assemblies, and content from this project into your running Docker environment, run a Publish of it from Visual Studio.

#### Debugging the Platform Visual Studio Solution

To debug, you can attach to the `w3wp` process within the `cm` container from Visual Studio.

### Developing the Rendering Next.js Project

#### Deploying the Rendering Next.js Project

The content of the project is mapped to the Rendering container using a Docker volume. All changes to the sources trigger a recompile and can be seen live in the browser at [https://www.xmcloudcm.localhost](https://www.xmcloudcm.localhost).

#### Debugging the Rendering Next.js Project

Debugging of the Next.js application is possible by using the `start:connected` or `start` scripts (they do the same thing) from the Next.js `package.json`, and the pre-configured _Attach to Process_ VS Code launch configuration.

#### Building the Rendering Next.js Project Locally

If you ever have to build the Next.js application in a command line:

1. Stop the "rendering" Docker container.
   - Because the rendering container has a mapped folder to `.\Website\src\rendering` and is running `npm run dev`, it shares the same build output folder as `next build`. Building for production while the container is running will produce all kind of errors.
2. Run `npm run build:local`
   - Some website code depends on environment variables that are set through the rendering Docker container. When building in a command line, those environment variables require fake values for the build to succeed. This command sets those fake values before starting the build.

When you are done:

1. Start the "rendering" Docker container.

### Items Serialization

If you change Sitecore content tree items, you must serialize these items using the Sitecore CLI and Sitecore Content Serialization (SCS). We created a PowerShell script to help with this. In an elevated PowerShell terminal:

```ps1
.\serpull.ps1
```

If you checkout a different branch while the containers are running or you manually modify serialized items, you must sync the serialized items back to the Sitecore databases. We created a PowerShell script to help with this. In an elevated PowerShell terminal:

```ps1
.\serpush.ps1
```
