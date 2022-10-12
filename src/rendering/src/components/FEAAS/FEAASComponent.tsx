import '@sitecore-feaas/clientside';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  FEAASComponentHTML: Field<string>;
}

export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const HTML = props.params?.FEAASComponentHTML;
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component rich-text ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="component-content">
        {HTML ? (
          <div dangerouslySetInnerHTML={{ __html: HTML }} />
        ) : (
          <div
            style={{
              background: 'rgb(246,246,254)',
              border: '1px solid rgba(93,83,209, 0.2)',
              color: 'rgb(93,83,209)',
              textAlign: 'center',
              padding: '50px',
            }}
          >
            <h2 style={{ color: 'rgb(93,83,209)' }}>Component Placeholder</h2>
            <p>Click to pick from the library</p>
          </div>
        )}
      </div>
    </div>
  );
};
