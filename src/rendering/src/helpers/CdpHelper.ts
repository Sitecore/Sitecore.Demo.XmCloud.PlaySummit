export const isCdpEnabled =
  !!process.env.NEXT_PUBLIC_CDP_CLIENT_KEY && !!process.env.NEXT_PUBLIC_CDP_TARGET_URL;
