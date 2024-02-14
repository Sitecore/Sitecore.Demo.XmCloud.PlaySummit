import React from 'react';
import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HtmlContentProps = ComponentProps & {
  fields: {
    Html: Field<string>;
  };
};

const HtmlContent = (props: HtmlContentProps): JSX.Element => {
  return <div dangerouslySetInnerHTML={{ __html: props.fields.Html.value.toString() }} />;
};

export const Default = withDatasourceCheck()<HtmlContentProps>(HtmlContent);
