import { getPublicAssetUrl } from 'src/helpers/PublicUrlHelper';

const CareConnectHeader = () => {
  const publicUrl = getPublicAssetUrl();

  return (
    <header className="careconnect-header">
      <img
        src={`${publicUrl}/assets/img/careconnect/careconnect-logo.svg`}
        alt="CareConnect"
        className="careconnect-logo"
      />
      <img src={`${publicUrl}/assets/img/careconnect/user-avatar.png`} alt="Avatar" />
    </header>
  );
};

export default CareConnectHeader;
