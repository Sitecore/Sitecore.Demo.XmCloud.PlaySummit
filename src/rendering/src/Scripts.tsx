// The BYOC bundle imports external (BYOC) components into the app and makes sure they are ready to be used
import BYOC from 'src/byoc';
import CdpPageView from 'components/nextjs-sxa/CdpPageView';

const Scripts = (): JSX.Element => {
  return (
    <>
      <BYOC />
      <CdpPageView />
    </>
  );
};

export default Scripts;
