import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Image, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';
import { Speaker } from 'src/types/speaker';

export type FeaturedEventProps = ComponentProps & {
  fields: {
    Name: Field<string>;
    Image: ImageField;
    Premium: Field<boolean>;
    Speakers: Speaker[];
  };
};

const FeaturedEvent = (props: FeaturedEventProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  const speakersSection = props.fields?.Speakers.map((speaker) => (
    <div className="event-subtitle" key={speaker.fields?.Name.value}>
      <FontAwesomeIcon className="icon" icon={faUser} />
      <Text field={speaker.fields?.Name} />
      <Text field={speaker.fields?.JobTitle} tag="p" className="event-subtext" />
    </div>
  ));

  return (
    <section
      className={`featured-event ${
        props.fields?.Premium.value ? 'premium-event' : ''
      } ${sxaStyles}`}
    >
      <Image field={props.fields?.Image} alt="Image" loading="lazy" />
      <div className="content">
        <div className="triangle-area">
          <div className="text-area">
            <h1 className="section-title">Featured Event</h1>
            <Text field={props.fields?.Name} className="event-title" tag="h1" />
            {speakersSection}
          </div>
          <div className="btn-area">
            <Link href="/tickets" className="btn-main">
              Book Tickets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = FeaturedEvent;
