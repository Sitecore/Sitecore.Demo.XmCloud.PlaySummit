import { useRouter } from 'next/router';
import { ComponentProps } from 'lib/component-props';
import HeaderContent from './HeaderContent';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeaderProps = ComponentProps & {
  fields: {
    data: {
      item: {
        children: {
          results: [
            {
              displayName: string;
              field: {
                jsonValue: {
                  value: {
                    anchor?: string;
                    href: string;
                    linktype?: string;
                    target?: string;
                    text?: string;
                    url?: string;
                  };
                };
              };
            }
          ];
        };
      };
    };
  };
};

const Header = (props: HeaderProps): JSX.Element => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { sitecoreContext } = useSitecoreContext();

  return (
    <HeaderContent
      pathname={pathname}
      asPath={asPath}
      query={query}
      sitecoreContext={sitecoreContext}
      {...props}
    />
  );
};

export const Default = Header;
