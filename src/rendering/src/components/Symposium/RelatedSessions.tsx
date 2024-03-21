import React, { useEffect, useState } from 'react';
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

export const RelatedSessions = (props: MyComponentProps): JSX.Element => {
    const {
        sitecoreContext: { pageState },
    } = useSitecoreContext();

    const id = props.params.RenderingIdentifier;

    const [sessions, setSessions] = useState<sessionDataResponse>();
    const [engageLoaded, setengageLoaded] = useState<boolean>(false);
    const [responseReady, setResponseReady] = useState(false);
    const friendlyId = 'jzisymposium';

    useEffect(() => {
        const engageLoadededInterval = setInterval(() => {
          if (engage && pageState === 'normal') {
            setengageLoaded(true);
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
          } catch (error) {}
        }
    
        if (engageLoaded && pageState === 'normal') {
          fetchData();
        }
      }, [engageLoaded, friendlyId, pageState]);
    
      if (
        (pageState === 'normal' && responseReady) ||
        pageState === 'edit' ||
        pageState === 'preview'
      ) {
        return (
          <div>
              <h1>{sessions.sessions.data.sessions.results[0].pageTitle.value}</h1>
          </div>
        );
      } else {
        return (
          <div
            className={`component contract-data ${props.params.styles.trimEnd()}`}
            id={id ? id : undefined}
          >Not loaded?</div>
        );
      }
}


export const Default = RelatedSessions;
