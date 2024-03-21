import { engage } from 'components/Symposium/PageViewCdp';

const POS = process.env.NEXT_PUBLIC_CDP_POINTOFSALE || '';
const channel = 'WEB';
const currency = 'USD';

export type sessionDataResponse = {
    sessions: {
        data: {
            sessions: {
                // total: string, // don't actually need this one
                results: session[]
            }
        }
    }
};

type session = {
    pageTitle: {
        value: string
    };
    name: {
        value: string
    };
    premium: {
        value: string
    };
    description: {
        value: string
    };
    image: {
        jsonValue: {
            value: {
                // stylelabs-content-type
                alt: string,
                // stylelabs-content-id
                thumbnailsrc: string,
                src: string
            }
        }
    };
    imageTransformation: {
        value: string
    };
    rooms: {
        jsonValue: room[]
    };
    speakers: {
        jsonValue: speaker[]
    };
    day: {
        jsonValue: day[]
    };
    timeslots: {
        jsonValue: timeslot[]
    };
    audience: {
        jsonValue: audience[]
    };
    vendors: {
        jsonValue: vendor[]
    };
    sponsors: {
        jsonValue: sponsor[]
    };
    url: {
        path: string
    };
};

type room = {
    url: string;
    displayName: string;
}

type speaker = {
    url: string;
    displayName: string;
    fields: {
        Location: {
            value: string;
        };
        Description: {
            value: string
        };
        JobTitle: {
            value: string
        };
        Picture: {
            value: {
                src: string
            }
        };
    };
}

type day = {
    url: string;
    displayName: string;
}

type timeslot = {
    url: string,
    displayName: string;
}

type audience = {
    url: string,
    displayName: string;
}

type vendor = {
    url: string,
    displayName: string;
}

type sponsor = {
    url: string,
    displayName: string;
}

export async function getVariant(friendlyId: string) {
    const personalizationData = {
        channel,
        currency,
        pointOfSale: POS,
        friendlyId: friendlyId,
    };

    const response = (await engage.personalize(personalizationData)) as sessionDataResponse;

    return response;
}