import {
  Field,
  ImageField,
  LayoutServicePageState,
  Text,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import InformationPageHero from '../NonSitecore/InformationPageHero';
import { useI18n } from 'next-localization';
import Head from 'next/head';

export type SpeakerInformationPageHeroProps = ComponentProps & {
  fields: {
    Name: Field<string>;
    Featured: Field<boolean>;
    Picture: ImageField;
    JobTitle: Field<string>;
    Company: Field<string>;
    Location: Field<string>;
    FacebookProfileLink?: Field<string>;
    TwitterProfileLink?: Field<string>;
    InstagramProfileLink?: Field<string>;
    LinkedinProfileLink?: Field<string>;
  };
};

const SpeakerInformationPageHero = (props: SpeakerInformationPageHeroProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const { t } = useI18n();

  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;

  const { fields, ...propsRest } = props;
  const newFields = {
    Name: fields.Name,
    Image: fields.Picture,
    FacebookProfileLink: fields.FacebookProfileLink,
    TwitterProfileLink: fields.TwitterProfileLink,
    InstagramProfileLink: fields.InstagramProfileLink,
    LinkedinProfileLink: fields.LinkedinProfileLink,
  };

  const qualificative = props.fields.Featured?.value ? t('featured') || 'featured' : '';

  const informations =
    props.fields.JobTitle?.value ||
    props.fields.Company?.value ||
    props.fields.Location?.value ||
    isPageEditing ? (
      <>
        {props.fields.JobTitle?.value || isPageEditing ? (
          <div>
            <span className="label">{t('Job Title') || 'Job Title'}:</span>{' '}
            <Text field={props.fields.JobTitle} tag="span" />
          </div>
        ) : undefined}
        {props.fields.Company?.value || isPageEditing ? (
          <div>
            <span className="label">{t('Company') || 'Company'}:</span>{' '}
            <Text field={props.fields.Company} tag="span" />
          </div>
        ) : undefined}
        {props.fields.Location?.value || isPageEditing ? (
          <div>
            <span className="label">{t('Location') || 'Location'}:</span>{' '}
            <Text field={props.fields.Location} tag="span" />
          </div>
        ) : undefined}
      </>
    ) : undefined;

  return (
    <>
      <Head>
        <meta property="og:title" content={props.fields?.Name?.value} />
        <meta property="og:image" content={props.fields?.Picture?.value.src} />
        <meta property="og:type" content="speaker" />
      </Head>
      <InformationPageHero
        {...propsRest}
        fields={newFields}
        type="speaker"
        qualificative={qualificative}
        informations={informations}
      />
    </>
  );
};

export const Default = SpeakerInformationPageHero;
