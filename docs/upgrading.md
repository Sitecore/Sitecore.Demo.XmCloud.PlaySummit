# Upgrading

Upgrading this solution refers to syncing with the [xmcloud-foundation-head](https://github.com/sitecorelabs/xmcloud-foundation-head) repository. This must be done periodically to be able to use new or updated XM Cloud features.

## Last sync

- Date: April 26th, 2023
- Commit link: [https://github.com/sitecorelabs/xmcloud-foundation-head/tree/b83ddc9c42b40eeac1cedb09d036a3dca4784c75](https://github.com/sitecorelabs/xmcloud-foundation-head/tree/b83ddc9c42b40eeac1cedb09d036a3dca4784c75)

## How to sync

### Get to know what changed since the last sync

1. Open the commit link of the last sync.
2. Above the files list, click the `<> Code` dropdown, then "Download ZIP".
3. Above the files list, click the branch selector dropdown, then select "main".
4. Above the files list, click the `<> Code` dropdown, then "Download ZIP".
5. Unzip both downloaded archives to separate folders.
6. Compare both folders using a file/folder comparison tool and review the changes introduced since the last sync.

### Update this document

1. Change the date of the [Last sync](#last-sync) to today's date.
2. Open the [xmcloud-foundation-head main branch commit history](https://github.com/sitecorelabs/xmcloud-foundation-head/commits/main).
3. Next to the most recent commit, click the `<>` (Browse the repository at this point in the history) button.
4. Copy the page URL.
5. Update the [Last sync](#last-sync) commit link for the next time we will sync.

### Review this solution major changes

This solution has some major changes compared to the xmcloud-foundation-head repository. Here is a list of changes and additions that could not be documented with `DEMO TEAM CUSTOMIZATION` comments. Keep them in mind when syncing.

1. Added `\.vscode\extensions.json` files.
2. API key generation vs hardcoded:
   1. We do not want to create an API key item from a template. Our API key item is hardcoded, serialized, and committed.
   2. In `\docker\build\cm`, removed the `\templates` folder and `readme.md` file.
3. Use of a solution container
   1. The xmcloud-foundation-head starter kit requires manually building and publishing the Visual Studio project to have the assemblies and configuration files deployed in the Docker development environment. Because we rarely change the Visual Studio solution files, we prefer to automate this step when building the Docker images.
   2. Added a `solution` container using the root `Dockerfile` file.
   3. Added the `\docker\build\cm\Data` folder.
   4. Modified the `\docker\build\cm\Dockerfile` file.
4. Extra files in `\docker`:
   1. `build-and-push-images.yml`
   2. `ensure-running-containers.ps1`
   3. `version.yml`
5. Item serialization
   1. Serialize all the rendering hosts (`RenderingHosts`) instead of only the default rendering host (`DefaultRenderingHost`).
   2. Many extra paths are serialized.
6. Visual Studio solution and projects
   1. Renamed the solution file from `XmXlousSXAStarter.sln` to `Sitecore.DemoEdge.Website.sln`.
   2. Our Platform project contains extra C# classes, configuration files, XDTs, and more.
   3. We have an extra Foundation\BranchPresets project.
7. `\src\icons` folder
   1. We store our components source icons.
8. `sitecore.json` contains a list of fields excluded from serialization.
9. `xmcloud.build.json` customizations:
   1. Renamed the rendering host from `xmcloudpreview` to `playwebsite`, changed its path, and JSS deployment secret.
   2. Added transforms.
   3. Added pages to the warmUpCm post action.
   4. Added index names to the populateSchema and reindex post actions.
   5. Added a publish post action.
10. We have extra folders and files:
    1. `\docs`
    2. `\tools`
    3. `clean.ps1`
    4. `Dockerfile`
    5. `GitVersion.yml`
    6. `init-ci.ps1`
    7. `LICENSE`
    8. `play_demo_thumbnail_100x100.png`
    9. `pre-pr-updates.ps1`
    10. `release-notes-templates.hb`
    11. `serpull.ps1`
    12. `serpush.ps1`
11. Rendering host project
    1. Renamed the `sxastarter` rendering host project to `rendering`.
    2. Removed the SXA starter assets
       1. `\src\Navigation.tsx`
    3. We use different modules:
       1. Tailwind instead of SASS.
          1. Removed
             1. `\src\assets\basic`
             2. `\src\assets\sass`
             3. `\src\assets\app.css`
             4. `\src\assets\main.css`
             5. `\src\lib\next-config\plugins\sass.js`
          2. Added `\src\assets\css`.
       2. PostCSS
       3. Stylelint
       4. Fortawesome instead of font-awesome
       5. auth0
       6. @next/bundle-analyzer
       7. OrderCloud
       8. Sitecore Discover
       9. Redux
       10. Storybook
       11. And many others...
    4. We have extra folders and files:
       1. `\.storybook`
       2. `\discover-feeds`
       3. `\search-crawlers`
       4. `\sitecore`
       5. `.editorconfig`
       6. `.npmrc`
       7. `postcss.config.js`
       8. `robots.txt` to disallow public search engine indexing.
       9. `scjssconfig.json`
       10. `stylelint.config.ts`
       11. `tailwind.config.js`
       12. `vercel.json`
       13. `\public\assets`
       14. `\public\robots.txt` to disallow public search engine indexing.
       15. Many subfolders in `\src\pages`
       16. `\src\pages\_document.tsx`
       17. Many subfolders in `\src\pages\api`
       18. Many subfolders in `\src`
    5. Custom `rootPlaceholders` in `package.json`.
    6. `.prettierignore` contains an extra entries:
       1. `src/temp/categoriesData.ts`
    7. `tsconfig.json` contains changes:
       1. Extra `"strictNullChecks": false,` compiler option.
    8. Moved the `\src\components` files into the `\src\components\nextjs-sxa` folder.

### Sync

1. Using a folder compare tool, compare the xmcloud-foundation-head main branch head folder with this repository.
2. Merge changes into this repository.
   1. Make sure to keep the `DEMO TEAM CUSTOMIZATION` and `END CUSTOMIZATION` comments when necessary, remove those that are already covered by the latest xmcloud-foundation-head repository code, and add comments where needed.
   2. Update this document as needed.
3. Check whether the front-end solution lints correctly:
   1. `cd .\src\rendering`
   2. `npm run lint`
   3. Fix linting errors, if any.
4. Run the TypeScript types validation:
   1. `npm run build:local`
   2. Fix all TypeScript type validations.
5. Check whether Storybook runs all the stories without error:
   1. `npm run storybook`
   2. Fix Storybook errors
6. Build the Docker images and start the containers:
   1. `cd ..\..`
   2. `.\up.ps1`
7. Once the Docker environment is ready, test the website from the rendering container:
   1. Open [https://www.xmcloudcm.localhost/](https://www.xmcloudcm.localhost/)
   2. Test most pages of the website.
   3. Ensure there are no new errors in the browser console, and rendering host logs.
8. Test the Content Editor and Experience Editor:
   1. Ensure you can add, remove components, create new pages, etc.
   2. Ensure there are no new errors in the browser console, and CM logs.
9. Fix easy to fix vulnerabilities:
   1. `npm audit`
   2. Check if there are any vulnerabilities that are coming from our extra NPM packages (not from the starter kit package versions or from the JSS package) that can be fixed by updating our extra packages.
   3. Fix those vulnerabilities.
10. Re-check whether the front-end solution lints correctly:
    1. `cd .\src\rendering`
    2. `npm run lint`
    3. Fix linting errors, if any.
11. Commit, and push to your branch.
12. Deploy your branch in an XM Cloud environment.
    1. Ensure your branch deploys successfully to XM Cloud.
    2. Fix problems, if any.
13. Test on XM Cloud:
    1. Test the Pages editor.
       1. Test adding, deleting, modifying pages.
       2. Test adding, deleting, modifying components in pages.
       3. Test FEaaS components.
       4. Test switching to another language than English.
       5. Test embedded personalization.
       6. Test analytics.
    2. Test the Content Editor, Experience Editor
14. Create a pull request to the `develop` branch.
