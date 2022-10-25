import { DiscoverNews } from '../../interfaces/DiscoverNews';
import { DiscoverSession } from '../../interfaces/DiscoverSession';
import { DiscoverSpeaker } from '../../interfaces/DiscoverSpeaker';
import { DiscoverSponsor } from '../../interfaces/DiscoverSponsor';
import { DiscoverVendor } from '../../interfaces/DiscoverVendor';
import { News } from '../../types/news';
import { GraphQLSession } from '../../types/session';
import { Speaker } from '../../types/speaker';
import { Sponsor } from '../../types/sponsor';
import { Vendor } from '../../types/vendor';

export const getRelativeUrl = (url: string): string => url.slice(0, 1);
export const getUrlFromName = (type: string, name: string): string =>
  `${type}/${name.replaceAll(' ', '-')}`;

export const sessionAdapter = ({
  name,
  url,
  image_url,
  is_premium,
  rooms,
  days,
  speakers,
  time_slots,
}: DiscoverSession): GraphQLSession => ({
  name: { value: name },
  premium: { value: is_premium },
  url: { path: getRelativeUrl(url) },
  imageTransformation: {
    value: image_url,
  },
  speakers: {
    targetItems: speakers.map((value) => ({
      name: { value },
      jobTitle: { value: '' },
      url: {
        path: getUrlFromName('speaker', value),
      },
    })),
  },
  rooms: {
    targetItems: rooms.map((value) => ({
      name: { value },
    })),
  },
  day: {
    targetItems: days.map((value) => ({
      name: { value },
    })),
  },
  timeslots: {
    targetItems: time_slots.map((value) => ({
      name: { value },
    })),
  },
});

export const speakerAdapter = ({
  name,
  url,
  is_featured,
  image_url,
  job_title,
  location,
  company,
  description,
}: DiscoverSpeaker): Speaker => ({
  url,
  fields: {
    Name: { value: name },
    Featured: { value: is_featured },
    Picture: {
      value: { src: image_url },
    },
    JobTitle: {
      value: job_title,
    },
    Company: {
      value: company,
    },
    Description: {
      value: description,
    },
    Location: {
      value: location,
    },
  },
});

export const vendorAdapter = ({ name, url, level, image_url }: DiscoverVendor): Vendor => ({
  url,
  fields: {
    Name: { value: name },
    Level: { value: level },
    Logo: {
      value: { src: image_url },
    },
  },
});

export const sponsorAdapter = ({ name, url, image_url }: DiscoverSponsor): Sponsor => ({
  url,
  fields: {
    Name: { value: name },
    Logo: {
      value: { src: image_url },
    },
  },
});

export const newsAdapter = ({
  publish_date,
  excerpt,
  name,
  url,
  image_url,
}: DiscoverNews): News => ({
  url,
  name: { value: name },
  fields: {
    Title: { value: name },
    Excerpt: { value: excerpt },
    PublishDate: { value: publish_date },
    Image: {
      value: { src: image_url },
    },
  },
});
