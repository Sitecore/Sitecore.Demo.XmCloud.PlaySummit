import {
  DictionaryService,
  RestDictionaryService,
  GraphQLDictionaryService,
  constants,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';

/**
 * Factory responsible for creating a DictionaryService instance
 */
export class DictionaryServiceFactory {
  /**
   * @param {string} siteName site name
   * @returns {DictionaryService} service instance
   */
  create(siteName: string): DictionaryService {
    return process.env.FETCH_WITH === constants.FETCH_WITH.GRAPHQL
      ? new GraphQLDictionaryService({
          endpoint: config.graphQLEndpoint,
          apiKey: config.sitecoreApiKey,
          siteName,
          jssAppTemplateId: '{9ED66404-64C9-4122-90E1-869CB3CEA566}',
          /*
            The Dictionary Service needs a root item ID in order to fetch dictionary phrases for the current
            app. If your Sitecore instance only has 1 JSS App, you can specify the root item ID here;
            otherwise, the service will attempt to figure out the root item for the current JSS App using GraphQL and app name.
            rootItemId: '{GUID}'
          */
          // DEMO TEAM CUSTOMIZATION - To get JSS app running with SXA installed - https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1000624
          rootItemId: '{507B2363-3200-4CEA-B238-3045731BA6A5}',
        })
      : new RestDictionaryService({
          apiHost: config.sitecoreApiHost,
          apiKey: config.sitecoreApiKey,
          siteName,
        });
  }
}

/** DictionaryServiceFactory singleton */
export const dictionaryServiceFactory = new DictionaryServiceFactory();
