import { identifyVisitor as identifyVisitorInCdpCloudSDK } from './CloudSDKService';
import { identifyVisitor as identifyVisitorInCdp } from './CdpService';
import { identifyVisitor as identifyVisitorInSend } from './SendService';

export async function identifyVisitor(
  email: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string
): Promise<unknown> {
  identifyVisitorInSend(email, firstName, lastName);

  // Log the 'IDENTITY' event to CDP using the Cloud SDK
  try {
    await identifyVisitorInCdpCloudSDK(email, firstName, lastName, phoneNumber);
  } catch (e) {
    console.error(e);
  }

  return identifyVisitorInCdp(email, firstName, lastName, phoneNumber);
}
