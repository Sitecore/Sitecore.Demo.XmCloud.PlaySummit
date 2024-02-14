import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Html: Field<string>;
}

export type HtmlContentProps = {
  params: { [key: string]: string };

  fields: Fields;
};

export const Default = (props: HtmlContentProps): JSX.Element => {
  return <div dangerouslySetInnerHTML={{ __html: props.fields.Html.value.toString() }} />;
};
