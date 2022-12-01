import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';

const FullImageCTASection = (props: ComponentProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`section full-image-section full-image-section-map ${sxaStyles}`}>
      <div className="section-content full-image-section-content">
        <Link href="/map">
          <a className="btn-square">Venue Map</a>
        </Link>
      </div>
    </section>
  );
};

export const Default = FullImageCTASection;
