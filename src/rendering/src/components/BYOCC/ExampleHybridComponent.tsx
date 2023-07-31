import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function ExampleClientsideComponent(props: {
  firstName: string;
  lastName: string;
  telephone: string;
  bold: boolean;
}) {
  return (
    <div style={props.bold ? { fontWeight: 'bold' } : {}} suppressHydrationWarning>
      This is a simple hybrid component that displays my name and my telephone. My name is{' '}
      {props.firstName} {props.lastName} and my telephone is {props.telephone}
      <br />
      Are we in browser?: {typeof window != 'undefined' ? 'Yes' : 'No'}
    </div>
  );
}

FEAAS.registerComponent(ExampleClientsideComponent, {
  name: 'hybrid',
  description: 'Description of my example component',
  thumbnail:
    'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Examples',
  required: ['firstName'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    telephone: {
      type: 'number',
      title: 'Telephone',
      minLength: 10,
    },
    bold: {
      type: 'boolean',
      title: 'Show text in bold weight',
    },
  },
  ui: {
    firstName: {
      'ui:autofocus': true,
      'ui:emptyValue': '', // ui:emptyValue causes this field to always be valid despite being required
      'ui:placeholder': 'Write your first name',
    },
    bold: {
      'ui:widget': 'radio',
    },
  },
});
