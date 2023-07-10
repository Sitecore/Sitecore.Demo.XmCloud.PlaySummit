import {
  AUDIENCE_FACET_TYPE,
  CONTENT_SEARCH_RESULT_TYPE,
  SESSION_SEARCH_RESULT_TYPE,
  SPEAKER_SEARCH_RESULT_TYPE,
  SPONSOR_SEARCH_RESULT_TYPE,
  VENDOR_SEARCH_RESULT_TYPE,
} from '../helpers/ContentSearchHelper';
import { ContentSearchWidgetResponseFacet } from '../interfaces/contentSearch/ContentSearchWidgetResponse';

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

export const facetsProp: ContentSearchWidgetResponseFacet[] = [
  {
    name: 'audience',
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
  {
    name: 'days',
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
  {
    name: 'is_premium',
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
  {
    name: 'rooms',
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
  {
    name: 'speakers',
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
  {
    name: 'sponsors',
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
  {
    name: 'vendors',
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
];

export const filtersProp = [
  {
    facetId: AUDIENCE_FACET_TYPE,
    facetValueId:
      'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IldlZWtlbmQgV2FycmlvciJ9',
  },
  {
    facetId: AUDIENCE_FACET_TYPE,
    facetValueId:
      'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoiYXVkaWVuY2UiLCJ2YWx1ZSI6IkZpdG5lc3MgRmFuYXRpYyJ9',
  },
];

export const tabsProp = [
  {
    id: SESSION_SEARCH_RESULT_TYPE,
    name: 'Sessions (8)',
    color: '#3d93ff',
    Component: (): JSX.Element => <div>Sessions component</div>,
  },
  {
    id: SPEAKER_SEARCH_RESULT_TYPE,
    name: 'Speakers (6)',
    color: '#ff8d02',
    Component: (): JSX.Element => <div>Speakers component</div>,
  },
  {
    id: VENDOR_SEARCH_RESULT_TYPE,
    name: 'Vendors (3)',
    color: '#ff1a87',
    Component: (): JSX.Element => <div>Vendors component</div>,
  },
  {
    id: SPONSOR_SEARCH_RESULT_TYPE,
    name: 'Sponsors (1)',
    color: '#ffd51d',
    Component: (): JSX.Element => <div>Sponsors component</div>,
  },
  {
    id: CONTENT_SEARCH_RESULT_TYPE,
    name: 'News (10)',
    color: '#000',
    Component: (): JSX.Element => <div>News Articles component</div>,
  },
];
