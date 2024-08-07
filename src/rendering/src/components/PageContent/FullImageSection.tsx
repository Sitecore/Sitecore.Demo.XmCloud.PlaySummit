import {
  Field,
  Image,
  ImageField,
  LinkField,
  RichText,
  Text,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FullImageSectionProps = ComponentProps & {
  fields: {
    title: Field<string>;
    subtitle: Field<string>;
    content: Field<string>;
    callToActionLink: LinkField;
    backgroundImage: ImageField;
  };
};

const FullImageSection = ({ fields }: FullImageSectionProps): JSX.Element => {
  return (
    <section className={`section flex items-center justify-center w-full !pb-[20px]`}>
      <div className="container">
        <div className="  flex flex-col-reverse md:flex-row items-center w-full">
          <div className="md:w-1/2 md:ml-[25px]">
            <Image field={fields.backgroundImage} alt={fields.title} loading="lazy" className="" />
          </div>
          <div className="full-image-section-content md:w-1/2 md:ml-8">
            <div className="content-card !bg-[#f8f8f8]">
              <Text tag="h2" field={fields.title} className="text-[36px]" />
              <RichText field={fields.content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<FullImageSectionProps>(FullImageSection);
