import path from 'path';
import { scaffoldFile } from '@sitecore-jss/sitecore-jss-dev-tools';
import generateComponentSrc from 'scripts/templates/component-src';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';
import generateStorySrc from './../../templates/story-src'; // DEMO TEAM CUSTOMIZATION - Add Storybook story scaffolding

/**
 * Generates the component file.
 */
class ComponentPlugin implements ScaffoldComponentPlugin {
  order = 0;

  componentRootPath = 'src/components';
  storyRootPath = 'src/stories'; // DEMO TEAM CUSTOMIZATION - Add Storybook story scaffolding

  exec(config: ScaffoldComponentPluginConfig) {
    const { componentName, componentPath } = config;
    const componentFilename = `${componentName}.tsx`; // DEMO TEAM CUSTOMIZATION - Change variable name
    const outputFilePath = path.join(this.componentRootPath, componentPath, componentFilename); // DEMO TEAM CUSTOMIZATION - Change variable name
    const template = generateComponentSrc(componentName);

    const componentOutputPath = scaffoldFile(outputFilePath, template);

    // DEMO TEAM CUSTOMIZATION - Add Storybook story scaffolding
    if (!componentOutputPath) {
      throw `Skipping creating ${componentName}; already exists.`;
    }

    const storyFilename = `${componentName}.stories.tsx`;

    const storyOutputPath = scaffoldFile(
      this.storyRootPath + storyFilename,
      generateStorySrc(componentName, componentPath)
    );
    // END CUSTOMIZATION

    return {
      ...config,
      componentOutputPath,
      storyOutputPath,
    };
  }
}

export const componentPlugin = new ComponentPlugin();