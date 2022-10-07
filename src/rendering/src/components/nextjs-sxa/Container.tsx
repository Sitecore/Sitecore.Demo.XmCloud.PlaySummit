import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

const BACKGROUND_REG_EXP = new RegExp(
  /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi
);

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const containerStyles = props.params && props.params.Styles ? props.params.Styles : '';
  const styles = `${props.params.GridParameters} ${containerStyles}`.trimEnd();
  const phKey = `container-${props.params.DynamicPlaceholderId}`;
  const id = props.params.RenderingIdentifier;
  let backgroundImage = props.params.BackgroundImage as string;
  let backgroundStyle: { [key: string]: string } = { backgroundImage: '' };
  let backgroundClass = '';

  if (backgroundImage) {
    const prefix = `${sitecoreContext.pageState !== 'normal' ? '/sitecore/shell' : ''}/-/media/`;
    backgroundImage = `${backgroundImage?.match(BACKGROUND_REG_EXP)?.pop()?.replace(/-/gi, '')}`;
    backgroundClass = 'not-empty-placeholder';
    backgroundStyle = {
      backgroundImage: `url('${prefix}${backgroundImage}')`,
    };
  }

  return (
    <div
      className={`component container ${styles}`}
      id={id ? id : undefined}
      style={backgroundStyle}
    >
      <div className={`component-content ${backgroundClass}`}>
        <div className="row">
          <Placeholder name={phKey} rendering={props.rendering} />
        </div>
      </div>
    </div>
  );
};
