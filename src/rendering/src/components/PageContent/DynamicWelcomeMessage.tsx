import { useEffect, useState } from 'react';
import { getDynamicWelcomeMessage, WelcomeMessage } from 'src/services/BoxeverService';
import { getIpAddress } from 'src/services/IpAddressService';
import { useRouter } from 'next/router';
import { ComponentProps } from 'lib/component-props';
import { useI18n } from 'next-localization';

const DynamicWelcomeMessage = (props: ComponentProps): JSX.Element => {
  const { t } = useI18n();
  const DEFAULT_MESSAGE = t('Welcome to PLAY! Summit') || 'Welcome to PLAY! Summit';

  const [message, SetMessage] = useState('');
  const router = useRouter();

  const sxaStyles = `${props.params?.styles || ''}`;

  useEffect(() => {
    const language: string = navigator.language
      ? navigator.language
      : router.locale
      ? router.locale
      : 'en';

    getIpAddress()
      .then((ipAddress) => getDynamicWelcomeMessage(ipAddress, language))
      .then((content: WelcomeMessage) =>
        SetMessage(content.message ? content.message : DEFAULT_MESSAGE)
      )
      .catch(() => SetMessage(DEFAULT_MESSAGE));
  }, [DEFAULT_MESSAGE, router.locale]);

  const messageContent = message && (
    <section className={`section dynamic-welcome-message ${sxaStyles}`}>
      <div className="container message-banner">
        <span>{message}</span>
      </div>
    </section>
  );
  return <>{messageContent}</>;
};

export const Default = DynamicWelcomeMessage;
