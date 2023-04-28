import { Meta } from '@storybook/react';

import SearchNewsResultsTab from '../../components/ContentSearch/SearchNewsResultsTab';
import { ContentSearchNews } from '../../interfaces/contentSearch/ContentSearchNews';
import { mockSearchResultsTabCommonArgs } from './ResultsTabArgs';
import { CONTENT_SEARCH_RESULT_TYPE } from '../../helpers/ContentSearchHelper';

export default {
  title: 'Components/ContentSearch/SearchNewsResultsTab',
  component: SearchNewsResultsTab,
} as Meta<typeof SearchNewsResultsTab>;

const items = [
  {
    audience: ['Fitness Fanatic', 'Healthy Living'],
    content:
      'Ut vitae enim nec enim pretium dapibus at consequat mi. In sapien lorem, vehicula sit amet lectus vitae, mattis ornare libero. Vestibulum rhoncus justo ultrices metus imperdiet tempus. Aenean non consequat ante, vel molestie elit. Curabitur ac lobortis odio, nec posuere quam. Donec eget euismod risus. Maecenas eget aliquet ipsum. Praesent vehicula volutpat quam, dignissim tincidunt ante interdum sed. Pellentesque pellentesque non velit ut dictum. Nulla facilisi. Morbi pellentesque, orci ac bibendum porttitor, urna ipsum suscipit libero, a efficitur enim dolor at nulla. Praesent auctor enim quis mattis venenatis. Mauris consequat semper arcu, in vestibulum enim volutpat in. Aliquam mollis sagittis sem, sed elementum metus fermentum a. Nulla quis odio tortor. Pellentesque interdum quis tortor vitae fringilla.Suspendisse lorem metus, congue sed lectus pharetra, aliquet sagittis augue. Integer quis ultricies erat. Nulla sagittis auctor tincidunt. Nam eget massa ante. Aenean lectus purus, eleifend in ex lacinia, pellentesque blandit orci. Donec lectus felis, hendrerit fringilla varius sit amet, sagittis quis orci. Suspendisse tempor aliquam eros a fermentum. Donec venenatis ligula eget turpis finibus, commodo hendrerit urna sagittis. Fusce scelerisque nulla ut est venenatis, molestie molestie turpis dictum. In hac habitasse platea dictumst. Donec sollicitudin nulla vestibulum, rhoncus magna et, interdum diam. Quisque tincidunt tellus eros, ut ullamcorper augue dictum id. Vivamus justo lectus, ornare et placerat a, venenatis ut odio. In feugiat ex augue, a scelerisque mauris viverra id. Mauris ullamcorper turpis non magna lacinia, vel facilisis diam sodales. Integer quis metus eu tellus cursus convallis ut in sapien.',
    excerpt:
      'Ut et suscipit justo. Fusce sit amet sollicitudin arcu. Curabitur et elit ut sapien varius faucibus a volutpat felis. Duis congue consectetur vehicula. Vestibulum diam erat, varius a facilisis eget, mollis a ligula. Quisque dictum convallis odio, ac condimentum lacus maximus eget. Cras id mattis diam.',
    id: '8b66023d-6f02-4440-98f2-2eec696e7ef3',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/fb61d88ba91147109496119795169279?v=7127f275&t=postcard',
    name: 'Striva to premiere new fitness app at PLAY! Summit',
    publish_date: '2021-08-07T18:22:27.037Z',
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/Striva-to-premiere-new-fitness-app-at-PLAY-Summit',
  },
  {
    audience: ['Fitness Fanatic', 'Healthy Living'],
    content:
      "Everybody wants to find a competitive advantage. Well, one of the best tricks is also very achievable. Getting into a great exercise routine can help you improve your focus and make you more productive. Of course, jumping into a rigorous routine isn't without challenges of its own. From finding the workouts to do to dealing with the soreness and pain after working out, getting into shape is hard.Fortunately, this deal on the Openfit Fitness App: 2-Year Subscription + DynaMini Massage Gun can help you in both regards. Valued at $141, this bundle is on sale for just $49. With this two-for-one deal, you'll get a two-year subscription to Openfit, one of the top fitness apps on the web, as well as a DynaMini Massage Gun from LifePro Fitness.Openfit has earned 4.9 stars on the App Store and 4.6 stars on the Google Play Store, because it makes healthy living more achievable by integrating fitness, nutrition, and wellness into a single app. You can choose from structured programs, monthly challenges, as well as hundreds of live and on-demand workouts covering barre, cardio, strength training, and much more. Plus, with the app, you can create a customized meal plan, track your calories and macros, and access thousands of tasty recipes to ensure you have the right diet to meet all of your health goals. It's compatible with virtually all devices and will help you see results fast.",
    excerpt:
      'Start getting into a better fitness routine with a bundle of fitness apps available for PLAY! Summit attendees.',
    id: 'a2fca80d-4c97-4378-91ab-77df77be546a',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/a2bb5300531b4cddbb2c97f2fa198a90?v=1fa6de83&t=postcard',
    name: 'Get two-year access to a top fitness app',
    publish_date: '2021-10-30T04:00:00Z',
    type: CONTENT_SEARCH_RESULT_TYPE,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/Get-two-year-access-to-a-top-fitness-app',
  },
  {
    audience: ['Outdoor Enthusiast', 'Weekend Warrior', 'Adventure Seeker'],
    content:
      "Why it matters: Recreational advocates say the metro is in need of another public park, as evidenced by a 40% jump in trail usage last year.Polk County recently purchased the land — which is near a flood plain and connects to the Gay Lea Wilson Trail just off East University Ave. — for $300K.Lemons to lemonade: While traditional development flunked, the property is ideal for a mountain bike park because its bumpy surface can be used as jumps, Leopold said.Details: The county's drafted plans call for 4.5 miles of dirt tracks oriented for mountain biking, fat biking and hiking.A pump track and skills area would include rocks and other native landscaping features for bikers.A wetland area would help filter water from Copper Creek before it enters the adjacent Fourmile Creek.The project is scheduled to be completed in 2025. PLAY! Summit is still looking for partners to assist with maintenance and care after when the park is operational.",
    excerpt:
      'Around 50 acres of undeveloped land connecting Des Moines and Pleasant Hill will be turned into a new mountain bike park, according to PLAY! Summit director Rich Ronald.',
    id: '337f8439-2b2e-497b-a91e-a5b840d66769',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/d896d75cea754445aad0d1e645ba37e6?v=7a4806ee&t=postcard',
    name: 'PLAY! Summit to build new mountain bike park',
    publish_date: '2021-11-10T05:00:00Z',
    type: CONTENT_SEARCH_RESULT_TYPE,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/PLAY-Summit-to-build-new-mountain-bike-park',
  },
  {
    audience: [
      'Adventure Seeker',
      'Weekend Warrior',
      'Healthy Living',
      'Fitness Fanatic',
      'Outdoor Enthusiast',
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mollis tincidunt magna eu blandit. Praesent at urna in massa tempus varius a eu diam. Etiam at porta nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ultricies sed purus a interdum. Nullam ut tempus tellus. Pellentesque venenatis, nisi vitae iaculis auctor, tellus quam dignissim lorem, sit amet aliquet enim nulla vitae neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Fusce non mauris interdum, cursus nibh a, facilisis ex. Ut in placerat orci, ut pretium quam. Donec id odio ac tellus lacinia ullamcorper sed quis purus. Sed consectetur molestie congue. Pellentesque eu nisl vitae est hendrerit cursus vel a mauris. Etiam feugiat ultrices lacus ut vehicula. Donec diam erat, efficitur nec orci at, volutpat mattis justo. Fusce egestas non tortor nec interdum. Fusce nec augue hendrerit, facilisis lorem eu, molestie libero. Donec eget sem egestas orci ullamcorper molestie. Sed felis turpis, interdum et est vel, eleifend tincidunt magna. Nulla vel nisl et odio lacinia congue. Curabitur suscipit cursus tellus, vitae pulvinar ex imperdiet non. In pulvinar tellus quam, et gravida felis mattis id. Integer congue ligula ac nunc vulputate viverra nec et lectus. Pellentesque malesuada magna malesuada fermentum placerat. Fusce sit amet arcu nec tortor laoreet volutpat sed eget libero. Quisque convallis arcu eu nisl consectetur egestas. Praesent imperdiet dictum ex at aliquet. Sed rhoncus venenatis purus et dapibus. Nulla tincidunt sit amet erat eu elementum. Cras in ipsum sed dolor laoreet ornare. Nulla facilisi.',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan posuere orci, placerat tristique quam vulputate non. Aliquam erat volutpat. Vestibulum ante ipsum primis in orci luctus et posuere cubilia Sed mollis tincidunt eu. Vestibulum ante ipsum primis in orci luctus et posuere cubilia Sed mollis tincidunt eu.',
    id: 'e4ea6cae-3afd-4edf-bb3c-686bd83c898b',
    image_url:
      'https://playsummit.sitecoresandbox.cloud/api/public/content/394a9ffe7b5f4cf29b6646571fe96248?v=05668867&t=postcard',
    name: 'PLAY! Summit Goes Live',
    publish_date: '2021-08-04T17:27:51Z',
    type: CONTENT_SEARCH_RESULT_TYPE,
    url: 'https://play-summit-dt-avwdiawgakytx0hdc9bpxa-website-ios01g972.vercel.app/news/Play-summit-goes-live',
  },
] as ContentSearchNews[];

export const Default = {
  args: {
    ...mockSearchResultsTabCommonArgs,
    items,
  },
};
