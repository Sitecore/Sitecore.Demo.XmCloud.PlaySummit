import { Category } from '../models/discover/Category';
import { Product } from '../models/discover/Product';
import { Suggestion } from '../models/discover/Suggestion';

const commonProps = {
  loaded: true,
  loading: false,
  dispatch: (): Promise<void> => {
    return null;
  },
};

export const filterOptionsProp = {
  rooms: [
    {
      value: 'room1',
      label: 'Meeting Room 1',
    },
    {
      value: 'room2',
      label: 'Meeting Room 2',
    },
    {
      value: 'room101',
      label: 'Room 101',
    },
    {
      value: 'curie-hall',
      label: 'Curie Hall',
    },
    {
      value: 'prostaff-hall',
      label: 'Prostaff Dining Hall',
    },
  ],
  schedule: [
    {
      value: 'day1-3pm',
      label: 'Day 1: 3:00pm - 3:55pm',
    },
    {
      value: 'day1-5pm',
      label: 'Day 1: 5:00pm - 6:55pm',
    },
    {
      value: 'day1-6pm',
      label: 'Day 1: 6:00pm - 6:55pm',
    },
    {
      value: 'day2-9am',
      label: 'Day 2: 4:00am - 5:55',
    },
    {
      value: 'day2-4pm',
      label: 'Day 2: 4:00pm - 4:55',
    },
  ],
};
export const facetsProp = {
  audience: {
    label: 'Audience',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IldlZWtlbmQgV2FycmlvciJ9',
        text: 'Weekend Warrior',
        count: 14,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkhlYWx0aHkgTGl2aW5nIn0=',
        text: 'Healthy Living',
        count: 13,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6Ik91dGRvb3IgRW50aHVzaWFzdCJ9',
        text: 'Outdoor Enthusiast',
        count: 10,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkZpdG5lc3MgRmFuYXRpYyJ9',
        text: 'Fitness Fanatic',
        count: 9,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkFkdmVudHVyZSBTZWVrZXIifQ==',
        text: 'Adventure Seeker',
        count: 7,
      },
    ],
  },
  days: {
    label: 'Days',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiZGF5cyIsInZhbHVlIjoiRGF5IDEifQ==',
        text: 'Day 1',
        count: 10,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiZGF5cyIsInZhbHVlIjoiRGF5IDIifQ==',
        text: 'Day 2',
        count: 10,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiZGF5cyIsInZhbHVlIjoiRGF5IDMifQ==',
        text: 'Day 3',
        count: 10,
      },
    ],
  },
  is_premium: {
    label: 'Featured',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiaXNfcHJlbWl1bSIsInZhbHVlIjoiZmFsc2UifQ==',
        text: 'false',
        count: 19,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiaXNfcHJlbWl1bSIsInZhbHVlIjoidHJ1ZSJ9',
        text: 'true',
        count: 6,
      },
    ],
  },
  rooms: {
    label: 'Rooms',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IktleW5vdGUgU3RhZ2UifQ==',
        text: 'Keynote Stage',
        count: 4,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IkN1cmllIEhhbGwifQ==',
        text: 'Curie Hall',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IlByb3N0YWZmIERpbmluZyBIYWxsIn0=',
        text: 'Prostaff Dining Hall',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IlJvb20gMTAxIn0=',
        text: 'Room 101',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IlJvb20gMTAzIn0=',
        text: 'Room 103',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IlN0cml2YSBEaW5pbmcgSGFsbCJ9',
        text: 'Striva Dining Hall',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IldvcmtzaG9wIFJvb20gMSJ9',
        text: 'Workshop Room 1',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IldvcmtzaG9wIFJvb20gMiJ9',
        text: 'Workshop Room 2',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IldvcmtzaG9wIFJvb20gMyJ9',
        text: 'Workshop Room 3',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoicm9vbXMiLCJ2YWx1ZSI6IkZhcmFkYXkgSGFsbCJ9',
        text: 'Faraday Hall',
        count: 1,
      },
    ],
  },
  speakers: {
    label: 'Speakers',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6Ikplc3NpZSBNYWhlciJ9',
        text: 'Jessie Maher',
        count: 5,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkFseSBOaWNob2xzIn0=',
        text: 'Aly Nichols',
        count: 4,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkphbGVuIFdpbGxpYW1zIn0=',
        text: 'Jalen Williams',
        count: 4,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkFsZXggTWVuYSJ9',
        text: 'Alex Mena',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkFuZHJlIEZhdnJlYXUifQ==',
        text: 'Andre Favreau',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkNocmlzIFdpbGxpYW1zIn0=',
        text: 'Chris Williams',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkNsaW50IEFkYW1zIn0=',
        text: 'Clint Adams',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6Ikpha2UgSm9oYW5zc2VuIn0=',
        text: 'Jake Johanssen',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkVkIEpvbmVzIn0=',
        text: 'Ed Jones',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BlYWtlcnMiLCJ2YWx1ZSI6IkphY29iIEdvbnphbGV6In0=',
        text: 'Jacob Gonzalez',
        count: 2,
      },
    ],
  },
  sponsors: {
    label: 'Sponsors',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IlN0cml2YSJ9',
        text: 'Striva',
        count: 6,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IlNwYXJrIn0=',
        text: 'Spark',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IkFsYmEifQ==',
        text: 'Alba',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IlByb3N0YWZmIn0=',
        text: 'Prostaff',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6Ik1hcGQifQ==',
        text: 'Mapd',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6Ik92ZXJ1bmRlciJ9',
        text: 'Overunder',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IlBhY2lmaXF1ZSJ9',
        text: 'Pacifique',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoic3BvbnNvcnMiLCJ2YWx1ZSI6IldhdmU1MiJ9',
        text: 'Wave52',
        count: 1,
      },
    ],
  },
  vendors: {
    label: 'Vendors',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiU3RyaXZhIn0=',
        text: 'Striva',
        count: 4,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiQWxiYSJ9',
        text: 'Alba',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiQ2VudGVyQ3ljbGUifQ==',
        text: 'CenterCycle',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiU3lkbmV5IEN1bW1pbmdzIn0=',
        text: 'Sydney Cummings',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiRnJ1aXRmdWwifQ==',
        text: 'Fruitful',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiUHJvc3RhZmYifQ==',
        text: 'Prostaff',
        count: 2,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiRHdlbGwifQ==',
        text: 'Dwell',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiR2FtZWRheSJ9',
        text: 'Gameday',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiT3V0cmFjZSJ9',
        text: 'Outrace',
        count: 1,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidmVuZG9ycyIsInZhbHVlIjoiT3ZlcnVuZGVyIn0=',
        text: 'Overunder',
        count: 1,
      },
    ],
  },
};
export const filtersProp = [
  {
    facetId: 'audience',
    facetValueId:
      'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IldlZWtlbmQgV2FycmlvciJ9',
  },
  {
    facetId: 'audience',
    facetValueId:
      'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkZpdG5lc3MgRmFuYXRpYyJ9',
  },
];

const previewSearchCommonProps = {
  lockSuggestions: false,
  lockCategories: false,
  category: '',
  suggestion: '',
  trendingCategory: '',
  available: true,
  onSuggestionChange: (): void => {
    return null;
  },
  onTrendingCategoryChange: (): void => {
    return null;
  },
  onKeyphraseChange: (): void => {
    return null;
  },
  onCategoryChange: (): void => {
    return null;
  },
};

const productsProps = {
  products: [
    {
      brand: 'CenterCycle',
      breadcrumbs: 'Activities>Cycling>Equipment>Maintenance',
      category_names: ['Maintenance'],
      description: `A universal hand pump that works with the three most popular valves: Schrader, Presta and Dunlop. With its simple design it's easy to use anywhere and anytime. Super compact, making it easy to carry in your bag so you can always inflate tires on the go. The ultra-lightweight pump fits easily into any bicycle or sports equipment bag and comes with an attachment clip allowing you to take it with you anywhere you go.`,
      final_price: '6.99',
      id: 406222380,
      image_url: 'https://ch.sitecoredemo.com/api/public/content/bike-hand-pump-product?v=4e0023e4',
      name: 'Hand Pump',
      price: '6.99',
      product_group: 'PSPCCHP',
      product_url: '/shop/products/PSPCCHP/centercycle-hand-pump',
      short_description: 'Portable universal hand pump',
      sku: 'PSPCCHP',
      skuid: 1699340652,
    },
    {
      brand: 'CenterCycle',
      breadcrumbs: 'Activities>Cycling>Equipment>Maintenance',
      category_names: ['Maintenance'],
      description:
        'This pump fills both large volume fat bike tires and higher pressure MTB tires, as well as gravel bike tires with ease. Its technology uses both strokes to compress air to deliver high pressure output and saves time and effort. Integrated dust cap keeps pump head clean and thumb lock lever ensures air-tight seal.\n',
      final_price: '40.00',
      id: 230655082,
      image_url: '//ch.sitecoredemo.com/api/public/content/telescopic-bike-pump-product?v=e3799b74',
      name: 'Travel Pump',
      price: '40.00',
      product_group: 'PSPCCTP',
      product_url: '/shop/products/PSPCCTP/centercycle-travel-pump',
      short_description: 'Small and compact pump for use on go.',
      sku: 'PSPCCTP',
      skuid: 530282067,
    },
    {
      brand: 'CenterCycle',
      breadcrumbs: 'Activities>Cycling>Equipment>Maintenance',
      category_names: ['Maintenance'],
      description:
        "The new generation of BTP-1 Bike Pump is the perfect choice to inflate tires on bicycles, hybrid bikes, city bikes or even baby strollers and wheelchairs. The BTP-1 Bike Pump is equipped with a pressure indicator in bars and PSI (needle pressure gauge). It's designed for mountain bike tires with maximum pressure 8 bars / 116 PSI. Clip connection.",
      final_price: '24.99',
      id: 706727858,
      image_url: '//ch.sitecoredemo.com/api/public/content/bike-foot-pump-product?v=cbcee1dc',
      name: 'Foot Pump',
      price: '24.99',
      product_group: 'PSPCCFP',
      product_url: '/shop/products/PSPCCFP/centercycle-foot-pump',
      short_description:
        'Universal foot pump with pressure indicator bars and a needle pressure gauge',
      sku: 'PSPCCFP',
      skuid: 68055081,
    },
  ] as Product[],
};

export const mockDiscoverData = {
  previewSearchProps: {
    ...commonProps,
    ...previewSearchCommonProps,
    ...productsProps,
    rfkId: 'rfkid_6',
    categories: [
      {
        id: 'suggestion_idZXF1aXBtZW50',
        in_content: 'product',
        text: 'equipment',
        url: '/shop/category/activities/hiking/equipment',
      },
    ],
    keyphrase: 'pump',
    trendingCategories: [
      {
        id: 'suggestion_idZXF1aXBtZW50',
        in_content: 'product',
        text: 'equipment',
        url: '/shop/category/activities/hiking/equipment',
      },
    ],
    suggestions: [{ freq: 3, id: 'suggestion_idcHVtcA==', in_content: 'product', text: 'pump' }],
    selectedKeyword: 'pump',
    redirectUrl: '/shop/products?q=',
    inputQuerySelector: '#search-input',
  },

  fullPageSearchProps: {
    ...commonProps,
    ...productsProps,
    rfkId: 'rfkid_7',
    error: '',
    keyphrase: 'pump',
    totalItems: 3,
    productsPerPage: 10,
    facets: [
      {
        display_name: 'Price',
        facetType: 'price',
        number_of_products: 3,
        values: [
          {
            count: 2,
            id: 'facet_ideyJtYXgiOjE1LCJtaW4iOjV9',
            in_content: 'product',
            max: 15,
            min: 5,
            text: '5 - 15',
          },
        ],
      },
      {
        display_name: 'Final price',
        facetType: 'final_price',
        number_of_products: 3,
        values: [
          {
            count: 2,
            id: 'facet_ideyJtYXgiOjE1LCJtaW4iOjV9',
            in_content: 'product',
            max: 15,
            min: 5,
            text: '5 - 15',
          },
        ],
      },
    ],
    page: 1,
    sortChoices: [
      {
        label: 'Featured ASC',
        name: 'featured',
        order: 'asc',
      },
      {
        label: 'Featured DESC',
        name: 'featured',
        order: 'desc',
      },
    ],
    sortType: '',
    sortDirection: '',
    totalPages: 1,
  },

  trendingCategoriesProps: {
    ...commonProps,
    ...previewSearchCommonProps,
    rfkId: 'ps_trending_categories',
    trendingCategories: [
      {
        url: '/shop/category/activities/hiking/equipment',
        text: 'equipment',
        in_content: 'product',
        id: 'suggestion_idZXF1aXBtZW50',
      },
      {
        url: '/shop/category/activities/cycling/equipment/maintenance',
        text: 'maintenance',
        in_content: 'product',
        id: 'suggestion_idbWFpbnRlbmFuY2U=',
      },
      {
        url: '/shop/category/activities/yoga/accessories',
        text: 'accessories',
        in_content: 'product',
        id: 'suggestion_idYWNjZXNzb3JpZXM=',
      },
    ],
    products: [] as Product[],
    categories: [] as Category[],
    suggestions: [] as Suggestion[],
    keyphrase: '',
    selectedKeyword: '',
  },

  searchInputProps: {
    keyphrase: 'fitness equipment',
    setSearchString: (): void => {
      return null;
    },
    onFocus: (): void => {
      return null;
    },
    placeholder: 'I am shopping for...',
    redirectUrl: '/shop/products?q=',
    setOpen: (): void => {
      return null;
    },
  },
};
