import { ComponentWithChildrenProps } from 'lib/component-props';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

const SummitFeatures = (props: ComponentWithChildrenProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <div className={`item-grid summit-features ${sxaStyles}`}>
      <div className="grid-content">
        <Placeholder name="jss-summit-features-content" rendering={props.rendering} />

        {props.children}
      </div>
    </div>
  );
};

export const Default = SummitFeatures;
