const clientKey = process.env.NEXT_PUBLIC_CUSTOM_CDP_CLIENT_KEY;
const apiTargetEndpoint = process.env.CUSTOM_CDP_AUTHENTICATED_API_TARGET_ENDPOINT;
const apiToken = process.env.CUSTOM_CDP_API_TOKEN;

export const cdpConfig = {
  clientKey,
  apiTargetEndpoint,
  apiToken,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${Buffer.from(`${clientKey}:${apiToken}`).toString('base64')}`,
  },
};
