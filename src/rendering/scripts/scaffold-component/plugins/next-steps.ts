import chalk from 'chalk';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';

/**
 * Set next steps.
 */
class NextStepsPlugin implements ScaffoldComponentPlugin {
  order = 100;

  exec(config: ScaffoldComponentPluginConfig) {
    const { componentOutputPath, componentName, storyOutputPath } = config;

    if (componentOutputPath) {
      config.nextSteps.push(
        chalk.green(`
Scaffolding of ${componentName} complete.
Next steps:`),
        `* Implement the React component in ${chalk.green(componentOutputPath)}`
      );
    }

    // DEMO TEAM CUSTOMIZATION - Reworked next steps order and content
    console.log(`* Implement the React component in ${chalk.green(componentOutputPath)}`);
    if (storyOutputPath) {
      console.log(`* Test the component in Storybook by running ${chalk.green('jss storybook')}.`);
      console.log(
        `* Add mock data as needed in the ${chalk.green(storyOutputPath)} Storybook story.`
      );
    }
    console.log(`* Manually create the rendering item and datasource template in Sitecore.`);
    console.log(`* Add the component to a route using Sitecore Experience Editor, and test it.`);
    // END CUSTOMIZATION

    return config;
  }
}

export const nextStepsPlugin = new NextStepsPlugin();
