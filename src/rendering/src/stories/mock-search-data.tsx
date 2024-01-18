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

export const facetsProp = [
  {
    name: 'activities',
    label: 'Activities',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiQ3ljbGluZyJ9',
        text: 'Cycling',
        count: 3,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiTW91bnRhaW4gQmlraW5nIn0=',
        text: 'Mountain Biking',
        count: 3,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiSGlraW5nIn0=',
        text: 'Hiking',
        count: 2,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiUnVubmluZyJ9',
        text: 'Running',
        count: 2,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiU3dpbW1pbmcifQ==',
        text: 'Swimming',
        count: 2,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiS2F5YWtpbmcifQ==',
        text: 'Kayaking',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiU2FpbGluZyJ9',
        text: 'Sailing',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiU2N1YmEgRGl2aW5nIn0=',
        text: 'Scuba Diving',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiU2tpaW5nIn0=',
        text: 'Skiing',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiU3VyZmluZyJ9',
        text: 'Surfing',
        count: 1,
        min: 0,
        max: 0,
      },
    ],
  },
  {
    name: 'audience',
    label: 'Audience',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkFkdmVudHVyZSBTZWVrZXIifQ==',
        text: 'Adventure Seeker',
        count: 3,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IldlZWtlbmQgV2FycmlvciJ9',
        text: 'Weekend Warrior',
        count: 3,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6Ik91dGRvb3IgRW50aHVzaWFzdCJ9',
        text: 'Outdoor Enthusiast',
        count: 2,
        min: 0,
        max: 0,
      },
    ],
  },
  {
    name: 'type',
    label: 'Content Type',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoidmVuZG9yIn0=',
        text: 'vendor',
        count: 4,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiZXZlbnQifQ==',
        text: 'event',
        count: 3,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoicGhvdG8ifQ==',
        text: 'photo',
        count: 2,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoic2Vzc2lvbiJ9',
        text: 'session',
        count: 2,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoibmV3cyJ9',
        text: 'news',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoic3BlYWtlciJ9',
        text: 'speaker',
        count: 1,
        min: 0,
        max: 0,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoic3BvbnNvciJ9',
        text: 'sponsor',
        count: 1,
        min: 0,
        max: 0,
      },
    ],
  },
];

export const filtersProp = [
  {
    facetId: 'type',
    facetValueId: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoidmVuZG9yIn0=',
    facetLabel: 'Content Type',
    valueLabel: 'vendor',
    type: 'valueId',
  },
  {
    facetId: 'activities',
    facetValueId: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYWN0aXZpdGllcyIsInZhbHVlIjoiQ3ljbGluZyJ9',
    facetLabel: 'Activities',
    valueLabel: 'Cycling',
    type: 'valueId',
  },
];
