import * as FEAAS from '@sitecore-feaas/clientside/react';
import LinkedComponents from '../components/BYOCC/LinkedComponents';

export default async function ExternalComponents({
  searchParams,
}: {
  searchParams: { feaasSrc: string; data: string };
}) {
  const src = searchParams.feaasSrc;
  const data = searchParams.data ? JSON.parse(searchParams.data) : {};

  return (
    <>
      <LinkedComponents />
      <FEAAS.External.Preview src={src} data={data}></FEAAS.External.Preview>
    </>
  );
}
