import { Meta } from '@storybook/react';

import { Default as Questionnaire } from '../../components/Questionnaire/Questionnaire';

export default {
  title: 'Components/Questionnaire/Questionnaire',
  component: Questionnaire,
} as Meta<typeof Questionnaire>;

export const Default = {
  args: {
    fields: {
      data: {
        datasource: {
          title: {
            jsonValue: {
              value: 'Your recommended content',
            },
          },
          questions: {
            results: [
              {
                id: '62D6C967426A4E039CF47BDC4792D4DC',
                title: {
                  jsonValue: {
                    value: 'Which activity are you most interested in?',
                  },
                },
                body: {
                  jsonValue: {
                    value:
                      '<p>By selecting the type of activity you are interested in <strong>PLAY! Lifestyle</strong> will personalize your experience to match your interest. You can change you interest at any time.</p>\r\n<p>Select the interest that matches you best.</p>',
                  },
                },
                options: {
                  results: [
                    {
                      id: '33F244FDB3C645F3A8225C4B217EF165',
                      text: {
                        jsonValue: {
                          value: 'Hiking',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Hiking.png?h=162&iar=0&w=226&hash=ADE219033D41F9786D05462D148176E0',
                            alt: 'Hiking',
                            width: '226',
                            height: '162',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: 'Outdoor Enthusiast',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: 'E95549F809D6485E998BE0A2B888C4AC',
                      text: {
                        jsonValue: {
                          value: 'Mountain Biking',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/MountainBiking.png?h=225&iar=0&w=226&hash=FCD5E4F2C578D9332EF5597803607BC0',
                            alt: 'Mountain Biking',
                            width: '226',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: 'Adventure Seeker',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: 'BBF86F44F0B248328AE91CF6A8BE773E',
                      text: {
                        jsonValue: {
                          value: 'Running',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Running.png?h=215&iar=0&w=173&hash=60162DFDF80F4AF4FD55C66DEBA1D44F',
                            alt: 'Running',
                            width: '173',
                            height: '215',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: 'Weekend Warrior',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: '3006A167D2814D238B51254AAC9EF176',
                      text: {
                        jsonValue: {
                          value: 'Strength Training',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/StrengthTraining.png?h=225&iar=0&w=226&hash=BB230549DE406CD6BC2904E8DC553F29',
                            alt: 'Strength Training',
                            width: '226',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: 'Fitness Fanatic',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: 'AAA09841A6B5442E815909A60F2B81BE',
                      text: {
                        jsonValue: {
                          value: 'Yoga',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Yoga.png?h=225&iar=0&w=198&hash=2C6BC32DEDFAEF529734477A344E50D4',
                            alt: 'Yoga',
                            width: '198',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: 'Healthy Living',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: 'D250667DA29B424DBD5BC4C9B33D80F3',
                      text: {
                        jsonValue: {
                          value: "I don't know",
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/dontKnow.png?h=225&iar=0&w=141&hash=F28947E96E48BF2855138EDEE77F5FF1',
                            alt: "I don't know",
                            width: '141',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
              {
                id: '9B12542EB2D548E596A5EADC7561126F',
                title: {
                  jsonValue: {
                    value: 'What do you find most challenging about exercise?',
                  },
                },
                body: {
                  jsonValue: {
                    value:
                      '<p>By selecting "what do you find most challenging about exercise" <strong>PLAY! Lifestyle</strong> will personalize your experience to match your interest. You can change you interest at any time.</p>\r\n<p>Select the interest that matches you best.</p>',
                  },
                },
                options: {
                  results: [
                    {
                      id: 'DA1ACFF942B64DB2A64BD45A088A6713',
                      text: {
                        jsonValue: {
                          value: 'Eating healthy',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/EatingHealthy.png?h=218&iar=0&w=226&hash=8D9755EB5C52EB083FF9A1F01380E225',
                            alt: 'Eating Healthy',
                            width: '226',
                            height: '218',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: '84763EAC686E4B1DA4B4389EE96B8774',
                      text: {
                        jsonValue: {
                          value: 'Lack of energy',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/LackOfEnergy.png?h=225&iar=0&w=226&hash=EE345066778B193B24F2AAF2D018C5A4',
                            alt: 'Lack of energy',
                            width: '226',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: '70A07D973F26455F9066293FFAA4E9B1',
                      text: {
                        jsonValue: {
                          value: 'Lack of time',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/LackOfTime.png?h=218&iar=0&w=155&hash=0F825DF36C65F7CE3B3166BFA67F6A5E',
                            alt: 'Lack of time',
                            width: '155',
                            height: '218',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: '0F679B2D767B47D09534D8FE333B0C81',
                      text: {
                        jsonValue: {
                          value: 'Mental health issues',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Hospital.png?h=225&iar=0&w=218&hash=0753AEC649F91B34F223C824D3558012',
                            alt: 'Hospital',
                            width: '218',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: 'B17C0BA1508842A4922DA31ADE309A1C',
                      text: {
                        jsonValue: {
                          value: 'Too expensive',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/LackOfMoney.png?h=222&iar=0&w=198&hash=4D230CF5BC8C388BF06DA3B522CD7540',
                            alt: 'Lack of money',
                            width: '198',
                            height: '222',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                    {
                      id: '3733A73D33974D0A879F9C2200E3E1E7',
                      text: {
                        jsonValue: {
                          value: "I don't know",
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/dontKnow.png?h=225&iar=0&w=141&hash=F28947E96E48BF2855138EDEE77F5FF1',
                            alt: "I don't know",
                            width: '141',
                            height: '225',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: '',
                        },
                      },
                    },
                  ],
                },
              },
              {
                id: '08B75429806248C4A14B1D93C00DEE9A',
                title: {
                  jsonValue: {
                    value: 'What type of sessions are you most interested in?',
                  },
                },
                body: {
                  jsonValue: {
                    value:
                      '<p>By selecting "what type of sessions are you most interested in" <strong>PLAY! Lifestyle </strong>will personalize your experience to match your interest. You can change you interest at any time.\r\n</p>\r\n<p>Select the interest that matches you best.</p>',
                  },
                },
                options: {
                  results: [
                    {
                      id: 'D59B8FE0A1654BF58135341A7A20801C',
                      text: {
                        jsonValue: {
                          value: 'Keynotes',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Keynote.png?h=224&iar=0&w=198&hash=E295ADE0469CB657E9563320DB435800',
                            alt: 'Keynote',
                            width: '198',
                            height: '224',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: 'Keynote',
                        },
                      },
                    },
                    {
                      id: '4E05FDA0E4854A0F878639B356248C5C',
                      text: {
                        jsonValue: {
                          value: 'Workshops',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/Workshop.png?h=218&iar=0&w=226&hash=12847FB155DF36F3EF628DF89F2BC833',
                            alt: 'Workshop',
                            width: '226',
                            height: '218',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: 'Workshop',
                        },
                      },
                    },
                    {
                      id: '3F1983D97152465A8944D1BC2BF04EEE',
                      text: {
                        jsonValue: {
                          value: 'Q&A',
                        },
                      },
                      image: {
                        jsonValue: {
                          value: {
                            src: '-/media/Project/PLAY/playwebsite/media/img/Session-Finder/QandA.png?h=189&iar=0&w=226&hash=6BC200FBDB71B3B20AA3B3CE3C783A40',
                            alt: 'Q&A',
                            width: '226',
                            height: '189',
                          },
                        },
                      },
                      audience: {
                        jsonValue: {
                          value: '',
                        },
                      },
                      sessionType: {
                        jsonValue: {
                          value: 'Session',
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        sessions: {
          children: {
            total: 25,
            results: [
              {
                itemName: '7 mindset strategies to raise your game',
                name: {
                  value: 'Seven mindset strategies to raise your game',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/7-mindset-strategies-to-raise-your-game',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Inspirational',
                      'stylelabs-content-id': '38239',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38239/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/e67627244df04ec3a0ed5cdb5851160c?v=3df11beb&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '11 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Ed Jones',
                      },
                      url: {
                        path: '/speakers/Ed-Jones',
                      },
                      role: {
                        value: 'Sales Guru',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Ask an expert Nutrition',
                name: {
                  value: 'Ask an expert: nutrition',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Ask-an-expert-Nutrition',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Nutrition expert',
                      'stylelabs-content-id': '38513',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38513/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/c87e9c1c087b485289784fe4c5bc445b?v=4b519f23&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jalen Williams',
                      },
                      url: {
                        path: '/speakers/Jalen-Williams',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Ask an expert outdoor survival',
                name: {
                  value: 'Ask an expert: outdoor survival',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Ask-an-expert-outdoor-survival',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Outdoor expert',
                      'stylelabs-content-id': '38531',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38531/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/1939307bff0b4e53a8797d0d805aa0fe?v=2269254d&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Clint Adams',
                      },
                      url: {
                        path: '/speakers/Clint-Adams',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Ask an expert ski and snowboard gear',
                name: {
                  value: 'Ask an expert: ski and snowboard gear',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Ask-an-expert-ski-and-snowboard-gear',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Ski expert',
                      'stylelabs-content-id': '38543',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38543/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/a76e8a98fd844664805dead6907a2d74?v=ea307c17&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Alex Mena',
                      },
                      url: {
                        path: '/speakers/Alex-Mena',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Breakfast',
                name: {
                  value: 'Breakfast',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Breakfast',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Dining hall',
                      'stylelabs-content-id': '37887',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/37887/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/144aeb7cdb2a442b98df54c146df75e1?v=04664da0&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: '',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '8 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [],
                },
              },
              {
                itemName: 'Closing Keynote',
                name: {
                  value: 'Closing Keynote',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Closing-Keynote',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Satellite conference center 1',
                      'stylelabs-content-id': '36356',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/36356/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/746b9fa62b6e408e993371ccb2e0d58a?v=68fa852f&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Keynote',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '1 pm',
                      },
                    },
                    {
                      name: {
                        value: '2 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jessie Maher',
                      },
                      url: {
                        path: '/speakers/Jessie-Maher',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Jalen Williams',
                      },
                      url: {
                        path: '/speakers/Jalen-Williams',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                    {
                      name: {
                        value: 'Jake Johanssen',
                      },
                      url: {
                        path: '/speakers/Jake-Johanssen',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Diversity and inclusion Real world examples',
                name: {
                  value: 'Diversity and inclusion: Real world examples',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Diversity-and-inclusion-Real-world-examples',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Equity, diversity, and inclusion',
                      'stylelabs-content-id': '53321',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/53321/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/897f3b23ed894cb8b97f3bc0028a10ee?v=c907b0e8&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '2 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jalen Williams',
                      },
                      url: {
                        path: '/speakers/Jalen-Williams',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                    {
                      name: {
                        value: 'Jessie Maher',
                      },
                      url: {
                        path: '/speakers/Jessie-Maher',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Alex Mena',
                      },
                      url: {
                        path: '/speakers/Alex-Mena',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Li Xiu Ying',
                      },
                      url: {
                        path: '/speakers/Li-Xiu-Ying',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Fuel for life nutrition 101',
                name: {
                  value: 'Fuel for life: nutrition 101',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Fuel-for-life-nutrition-101',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Healthy eating',
                      'stylelabs-content-id': '37985',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/37985/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/bd09edfed5bf44779b336c5e4ec168bf?v=28ca1e99&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '11 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jalen Williams',
                      },
                      url: {
                        path: '/speakers/Jalen-Williams',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Guest Keynote with Chris Williams',
                name: {
                  value: 'Guest Keynote with Chris Williams',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Guest-Keynote-with-Chris-Williams',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Chris Williams Inspire',
                      'stylelabs-content-id': '54356',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/54356/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/8fb7fe8350b44cf781bba42d1ce34a27?v=46859a0a&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Keynote',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Chris Williams',
                      },
                      url: {
                        path: '/speakers/Chris-Williams',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                    {
                      name: {
                        value: 'Jessie Maher',
                      },
                      url: {
                        path: '/speakers/Jessie-Maher',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Jake Johanssen',
                      },
                      url: {
                        path: '/speakers/Jake-Johanssen',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Healthy living reality vs theory',
                name: {
                  value: 'Healthy living: reality vs. theory',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Healthy-living-reality-vs-theory',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Dumbbells resting',
                      'stylelabs-content-id': '38355',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38355/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/83da9d31fc674139affc0864b0acf074?v=234fb5ef&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '1 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Aly Nichols',
                      },
                      url: {
                        path: '/speakers/Aly-Nichols',
                      },
                      role: {
                        value: 'Sponsor',
                      },
                    },
                    {
                      name: {
                        value: 'Sophia Taylor',
                      },
                      url: {
                        path: '/speakers/Sophia-Taylor',
                      },
                      role: {
                        value: 'Sales Guru',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Intro to Cycling Sponsored by Striva',
                name: {
                  value: 'Intro to Cycling - Sponsored by Striva',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Intro-to-Cycling-Sponsored-by-Striva',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Cycling group',
                      'stylelabs-content-id': '38290',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38290/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/fbeff54120594339ac9c8ce2b32d82f5?v=b2aad55c&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Workshop',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '9 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Mary Asada',
                      },
                      url: {
                        path: '/speakers/Mary-Asada',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Jacob Gonzalez',
                      },
                      url: {
                        path: '/speakers/Jacob-Gonzalez',
                      },
                      role: {
                        value: 'Sales Guru',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Intro to Distance Running Sponsored by Alba',
                name: {
                  value: 'Intro to Distance Running - Sponsored by Alba',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Intro-to-Distance-Running-Sponsored-by-Alba',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Running alone',
                      'stylelabs-content-id': '38284',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38284/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/a8776e3945ed4dcab27b694b79dca368?v=b2e95d8a&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Workshop',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '9 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Ed Jones',
                      },
                      url: {
                        path: '/speakers/Ed-Jones',
                      },
                      role: {
                        value: 'Sales Guru',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Lunch',
                name: {
                  value: 'Lunch',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Lunch',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'session food',
                      'stylelabs-content-id': '31944',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/31944/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/4380ef54a3754d908476d1b0d73fe325?v=e175886b&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '12 noon',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Alex Mena',
                      },
                      url: {
                        path: '/speakers/Alex-Mena',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Meet a pro QA with  Andre Favreau',
                name: {
                  value: 'Meet a pro: Q&A with Andre Favreau',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/Meet-a-pro-QA-with--Andre-Favreau',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'basketball session',
                      'stylelabs-content-id': '38471',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38471/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/a75e871e825c4eaaad2a91e26259e0ba?v=99c76a76&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Andre Favreau',
                      },
                      url: {
                        path: '/speakers/Andre-Favreau',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Meet a pro QA with Chris Williams',
                name: {
                  value: 'Meet a pro: Q&A with Chris Williams',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/Meet-a-pro-QA-with-Chris-Williams',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Chris Williams',
                      'stylelabs-content-id': '49311',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/49311/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/bcebe6a34e444993826746063558d5cc?v=00595745&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '1 pm',
                      },
                    },
                    {
                      name: {
                        value: '2 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Chris Williams',
                      },
                      url: {
                        path: '/speakers/Chris-Williams',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Meet a pro QA with Zoran Borovic',
                name: {
                  value: 'Meet a pro: Q&A with Zoran Borovic',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/Meet-a-pro-QA-with-Zoran-Borovic',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Fishing session',
                      'stylelabs-content-id': '38487',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38487/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/757164bf8040434e81e619db7482af52?v=36715615&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '3 pm',
                      },
                    },
                    {
                      name: {
                        value: '4 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Zoran Borovic',
                      },
                      url: {
                        path: '/speakers/Zoran-Borovic',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Mountain biking maintenance or misfortune',
                name: {
                  value: 'Mountain biking: maintenance or misfortune',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/Mountain-biking-maintenance-or-misfortune',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Bicycle maintenance',
                      'stylelabs-content-id': '38235',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38235/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/058c0634c01548109076fa51eb1414e7?v=d9cfda0c&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Workshop',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '10 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Clint Adams',
                      },
                      url: {
                        path: '/speakers/Clint-Adams',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Mountain biking tales from the trail',
                name: {
                  value: 'Mountain biking: tales from the trail',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Mountain-biking-tales-from-the-trail',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Mountain biking 3',
                      'stylelabs-content-id': '38142',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38142/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/d896d75cea754445aad0d1e645ba37e6?v=7a4806ee&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '11 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Clint Adams',
                      },
                      url: {
                        path: '/speakers/Clint-Adams',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Navigating the outdoors with kids',
                name: {
                  value: 'Navigating the outdoors with kids',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Navigating-the-outdoors-with-kids',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Get Outdoors - Kids',
                      'stylelabs-content-id': '53269',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/53269/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/3db5cea1caaf4cc6b4e6596ef5e1fb52?v=c16aa6d2&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '2 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jessie Maher',
                      },
                      url: {
                        path: '/speakers/Jessie-Maher',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Opening Keynote',
                name: {
                  value: 'Opening Keynote',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Opening-Keynote',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Play Summit Speaking Hall2',
                      'stylelabs-content-id': '30591',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/30591/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/394a9ffe7b5f4cf29b6646571fe96248?v=05668867&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 1',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Adventure Seeker',
                      },
                    },
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Keynote',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '9 am',
                      },
                    },
                    {
                      name: {
                        value: '10 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Jessie Maher',
                      },
                      url: {
                        path: '/speakers/Jessie-Maher',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Zoran Borovic',
                      },
                      url: {
                        path: '/speakers/Zoran-Borovic',
                      },
                      role: {
                        value: 'Social Influencer',
                      },
                    },
                    {
                      name: {
                        value: 'Andre Favreau',
                      },
                      url: {
                        path: '/speakers/Andre-Favreau',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                    {
                      name: {
                        value: 'Aly Nichols',
                      },
                      url: {
                        path: '/speakers/Aly-Nichols',
                      },
                      role: {
                        value: 'Sponsor',
                      },
                    },
                    {
                      name: {
                        value: 'Alex Mena',
                      },
                      url: {
                        path: '/speakers/Alex-Mena',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                    {
                      name: {
                        value: 'Jake Johanssen',
                      },
                      url: {
                        path: '/speakers/Jake-Johanssen',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Organizing the impossible How to host a cycling race',
                name: {
                  value: 'Organizing the impossible: How to host a cycling race',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/Organizing-the-impossible-How-to-host-a-cycling-race',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Bicycle wheel closeup',
                      'stylelabs-content-id': '38095',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38095/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/6bb85a638c1a427db1015c03d6f5364f?v=17b911f3&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Outdoor Enthusiast',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '9 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Chris Williams',
                      },
                      url: {
                        path: '/speakers/Chris-Williams',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                    {
                      name: {
                        value: 'Jacob Gonzalez',
                      },
                      url: {
                        path: '/speakers/Jacob-Gonzalez',
                      },
                      role: {
                        value: 'Sales Guru',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Real talk balancing it all is a challenge',
                name: {
                  value: 'Real talk: balancing it all is a challenge',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Real-talk-balancing-it-all-is-a-challenge',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Crossfit resting',
                      'stylelabs-content-id': '38304',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38304/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/98aae63e186c44a1984c8793057b98a2?v=3b92b398&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '1 pm',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Aly Nichols',
                      },
                      url: {
                        path: '/speakers/Aly-Nichols',
                      },
                      role: {
                        value: 'Sponsor',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Running recap 50 years of passion',
                name: {
                  value: 'Running recap: 50 years of passion',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Running-recap-50-years-of-passion',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Running shoes',
                      'stylelabs-content-id': '38091',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38091/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/d84f82556a61431296d3e4d067c9d786?v=c9484b17&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                    {
                      name: {
                        value: 'Weekend Warrior',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '10 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Mary Asada',
                      },
                      url: {
                        path: '/speakers/Mary-Asada',
                      },
                      role: {
                        value: 'Speaker',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'So you want to be a yoga teacher',
                name: {
                  value: 'So you want to be a yoga teacher?',
                },
                premium: {
                  value: '1',
                },
                url: {
                  path: '/sessions/So-you-want-to-be-a-yoga-teacher',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Yoga outdoor',
                      'stylelabs-content-id': '37976',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/37976/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/9838d947f6484f49a4effb3d81f99101?v=ed84edbe&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 3',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Healthy Living',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Workshop',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '11 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Aly Nichols',
                      },
                      url: {
                        path: '/speakers/Aly-Nichols',
                      },
                      role: {
                        value: 'Sponsor',
                      },
                    },
                  ],
                },
              },
              {
                itemName: 'Train smarter not harder',
                name: {
                  value: 'Train smarter not harder',
                },
                premium: {
                  value: '',
                },
                url: {
                  path: '/sessions/Train-smarter-not-harder',
                },
                image: {
                  jsonValue: {
                    value: {
                      'stylelabs-content-type': 'Image',
                      alt: 'Fitness tracker 2',
                      'stylelabs-content-id': '38039',
                      thumbnailsrc:
                        'https://playsummit.sitecoresandbox.cloud/api/gateway/38039/thumbnail',
                      src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/a218d495616043568a73c79f05143a93?v=cf7bb555&t=web',
                    },
                  },
                },
                day: {
                  targetItems: [
                    {
                      name: {
                        value: 'Day 2',
                      },
                    },
                  ],
                },
                audience: {
                  targetItems: [
                    {
                      name: {
                        value: 'Fitness Fanatic',
                      },
                    },
                  ],
                },
                type: {
                  jsonValue: {
                    value: 'Session',
                  },
                },
                timeslots: {
                  targetItems: [
                    {
                      name: {
                        value: '9 am',
                      },
                    },
                  ],
                },
                speakers: {
                  targetItems: [
                    {
                      name: {
                        value: 'Andre Favreau',
                      },
                      url: {
                        path: '/speakers/Andre-Favreau',
                      },
                      role: {
                        value: 'Athlete',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
