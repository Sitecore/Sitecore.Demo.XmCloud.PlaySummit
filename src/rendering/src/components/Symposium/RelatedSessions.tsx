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
      if (engage && pageState === 'normal') {
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

    if (engageLoaded && pageState === 'normal') {
      fetchData();
    }
  }, [engageLoaded, friendlyId, pageState]);

  if (
    (pageState === 'normal' && responseReady)
  ) {
    return (
      <div className="w-full">
        <h2 className="font-bold text-5xl w-1/3 text-blue-light" style={{ margin: '0 auto' }}>Personalized Sessions</h2>

        <div className="columns-3 text-center w-1/2" style={{ margin: '0 auto' }}>
          {sessions.sessions.data.sessions.results.map((item, index) => (
            <div className="session" key={index}>
              <Link href={item.url.path}>
                <h2>{item.pageTitle.value}</h2>
                <img src={item.image.jsonValue.value.src} alt={item.image.jsonValue.value.alt} />
                <div dangerouslySetInnerHTML={{ __html: item.description.value }} className="truncate"></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <h2 className="font-bold text-5xl w-1/3 text-blue-light" style={{ margin: '0 auto' }}>Personalized Sessions</h2>

        <div className="columns-3 text-center w-1/2" style={{ margin: '0 auto' }}>
          <div className="session">
            <Link href="#">
              <h2>Session Title</h2>
              <img className="mx-auto" src="-/media/Project/PLAY/playwebsite/media/img/speaker-john-doe" alt="Image Placeholder" />
              <p className="truncate">Session Description</p>
            </Link>
          </div>
          <div className="session">
            <Link href="#">
              <h2>Session Title</h2>
              <img className="mx-auto" src="-/media/Project/PLAY/playwebsite/media/img/speaker-john-doe" alt="Image Placeholder" />
              <p className="truncate">Session Description</p>
            </Link>
          </div>
          <div className="session">
            <Link href="#">
              <h2>Session Title</h2>
              <img className="mx-auto" src="-/media/Project/PLAY/playwebsite/media/img/speaker-john-doe" alt="Image Placeholder" />
              <p className="truncate">Session Description</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


export const Default = RelatedSessions;
