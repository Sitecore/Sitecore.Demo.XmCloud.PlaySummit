import {
  RichText,
  Text,
  Field,
  Link,
  Placeholder,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentWithChildrenProps } from 'lib/component-props';
import { useEffect, useState } from 'react';

type SectionProps = ComponentWithChildrenProps & {
  fields: {
    title: Field<string>;
    content: Field<string>;
    callToActionLink: LinkField;
  };
};

const Section = (props: SectionProps): JSX.Element => {
  const [hiddenItem, setHiddenItem] = useState(false);
  const renderHeading = (a: string) => {
    props?.fields?.title?.value.toLowerCase().trim() === a.toLowerCase().trim()
      ? setHiddenItem(true)
      : false;
  };

  useEffect(() => {
    renderHeading('NEWS HIGHLIGHTS');
    renderHeading('Featured insights ');
  });

  const titleAndContent = props.fields && (
    <>
      <Text
        tag="h2"
        field={props.fields.title}
        className={hiddenItem ? 'hidden ' : '' + ' section-content-title'}
      />
      {props.fields.content && (
        <RichText
          tag="div"
          field={props.fields.content}
          className={hiddenItem ? 'hidden ' : '' + ' section-content-p'}
        />
      )}
    </>
  );
  // console.log(props);
  const placeholder = !!props.rendering && (
    <Placeholder name="jss-section-content" rendering={props.rendering} />
  );

  const callToAction = !!props.fields?.callToActionLink?.value?.href && (
    <Link
      field={props.fields.callToActionLink}
      className={hiddenItem ? 'hidden ' : '' + ' btn-main'}
    />
  );

  return (
    <section className={`section`}>
      <div className="section-content">
        {titleAndContent}
        {placeholder}
        {props.children}
        {callToAction}
      </div>
    </section>
  );
};

export const Default = Section;
