// The BYOC bundle imports external (BYOC) components into the app and makes sure they are ready to be used
import BYOC from 'src/byoc';
import CdpPageView from 'components/nextjs-sxa/CdpPageView';
import FEAASScripts from 'components/nextjs-sxa/FEAASScripts';

const Scripts = (): JSX.Element => {
  return (
    <>
      <BYOC />
      <CdpPageView />
      <FEAASScripts />
    </>
  );
};

export default Scripts;
