// DEMO TEAM CUSTOMIZATION - Add Storybook plugin
import path from 'path';
import { scaffoldFile } from '@sitecore-jss/sitecore-jss-dev-tools';
import generateComponentSrc from 'scripts/templates/component-src';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';
import generateStorySrc from './../../templates/story-src';

/**
 * Generates the storybook file.
 */
class StorybookPlugin implements ScaffoldComponentPlugin {
  order = 50;

  componentRootPath = 'src/components';
  storyRootPath = 'src/stories';

  exec(config: ScaffoldComponentPluginConfig) {
    const { componentName, componentPath } = config;
    const componentFilename = `${componentName}.tsx`;
    const outputFilePath = path.join(this.componentRootPath, componentPath, componentFilename);
    const template = generateComponentSrc(componentName);

    const componentOutputPath = scaffoldFile(outputFilePath, template);

    if (!componentOutputPath) {
      throw `Skipping creating ${componentName}; already exists.`;
    }

    const storyFilename = `${componentName}.stories.tsx`;

    const storyOutputPath = scaffoldFile(
      this.storyRootPath + storyFilename,
      generateStorySrc(componentName, componentPath)
    );

    return {
      ...config,
      storyOutputPath,
    };
  }
}

export const storybookPlugin = new StorybookPlugin();
