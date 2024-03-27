import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ComponentParams,
  ComponentRendering,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { sessionDataResponse, getVariant } from 'src/utility/CDPPersonalizeService';
import { engage } from './PageViewCdp';

interface MyComponentProps {
    rendering: ComponentRendering & { params: ComponentParams };
    params: ComponentParams;
  }

  const RelatedSessions = (props: MyComponentProps): JSX.Element => {
    const {
        sitecoreContext: { pageState },
    } = useSitecoreContext();

    console.log(props);

    const [sessions, setSessions] = useState<sessionDataResponse>();
    const [engageLoaded, setEngageLoaded] = useState<boolean>(false);
    const [responseReady, setResponseReady] = useState(false);
    const friendlyId = 'jzisymposium';

    useEffect(() => {
        const engageLoadededInterval = setInterval(() => {
          if (engage && pageState === 'preview') {
            setEngageLoaded(true);
            clearInterval(engageLoadededInterval);
          }
        }, 100);
        return () => {
          clearInterval(engageLoadededInterval);
        };
      }, [pageState]);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await getVariant(friendlyId);
            setSessions(response);
            setResponseReady(true);
          } catch (error) {
          }
        }
    
        if (engageLoaded && pageState === 'preview') {
          fetchData();
        }
      }, [engageLoaded, friendlyId, pageState]);

      if (
        (pageState === 'preview' && responseReady)
      ) {
        return (
          <div className="w-full columns-3 text-center">
             {sessions.sessions.data.sessions.results.map((item, index) => (
                <div className="session" key={index}>
                  <Link href={item.url.path}>
                    <h2>{item.pageTitle.value}</h2>
                    <img src={item.image.jsonValue.value.src} alt={item.image.jsonValue.value.alt} />
                    <p dangerouslySetInnerHTML={{ __html: item.description.value }} className="truncate"></p>
                  </Link>
                </div>
              ))}
          </div>
        );
      } else {
        return (
          <div
            //className={`component contract-data ${props.params.styles.trimEnd()}`}
            //id={id ? id : undefined}
          >Not loaded?</div>
        );
      }
}


export const Default = RelatedSessions;
