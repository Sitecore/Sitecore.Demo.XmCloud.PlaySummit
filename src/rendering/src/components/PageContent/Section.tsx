import {
  RichText,
  Text,
  Field,
  Placeholder,
  LinkField,
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentWithChildrenProps } from 'lib/component-props';
import { useEffect, useState } from 'react';

export type SectionProps = ComponentWithChildrenProps & {
  fields: {
    title: Field<string>;
    content: Field<string>;
    callToActionLink: LinkField;
  };
};
const Section = (props: SectionProps): JSX.Element => {
  // to achieve dynamic heading, we have implemented logic to apply css according to incoming rendering component.

  const [newsComponent, setNewsComponent] = useState(false);
  const [insightsComponent, setInsightsComponent] = useState(false);

  const contentArray = props.rendering.placeholders['jss-section-content'];

  const compName = contentArray
    .filter((item) => 'componentName' in item) // Check if componentName exists
    .map((item) => (item as ComponentRendering).componentName);

  useEffect(() => {
    newsCompHeading('NewsGrid');
    fInsightsHeading('PersonalizedPicksWrapper');
  });

  const newsCompHeading = (a: string) => {
    compName[0].toLowerCase().trim() === a.toLowerCase().trim() ? setNewsComponent(true) : false;
  };
  const fInsightsHeading = (a: string) => {
    compName[0].toLowerCase().trim() === a.toLowerCase().trim()
      ? setInsightsComponent(true)
      : false;
  };

  const titleAndContentAndCta = props.fields && (
    <div className={insightsComponent ? 'container' : ''}>
      <div
        className={
          newsComponent
            ? 'news-tweet'
            : insightsComponent
            ? ' featuredItems flex flex-col lg:flex-row justify-between items-center mb-[32px] '
            : ' '
        }
      >
        <Text
          tag="h2"
          field={props.fields.title}
          className={
            newsComponent
              ? 'NewsHeading '
              : insightsComponent
              ? ' featured-heading text-[50px] font-bold md:text-[68px] leading-[48px] md:leading-[60px] text-center text-black uppercase  '
              : ' ' + ' section-content-title'
          }
        />
        {props?.fields?.content && props?.fields?.content !== null && (
          <RichText
            tag="div"
            field={props?.fields?.content}
            // add className='news-tweet-button' for newsComponent after css removed after backend.
            className={
              newsComponent
                ? ' '
                : insightsComponent
                ? ' mt-5 lg:mt-0 '
                : ' ' + ' section-content-p'
            }
          />
        )}
      </div>
    </div>
  );

  const placeholder = !!props.rendering && (
    <Placeholder name="jss-section-content" rendering={props.rendering} />
  );
  return (
    <section className={`section`}>
      <div className={newsComponent ? 'section-news-container container ' : 'section-content'}>
        {titleAndContentAndCta}
        {placeholder}
        {props.children}
      </div>
    </section>
  );
};

export const Default = Section;
