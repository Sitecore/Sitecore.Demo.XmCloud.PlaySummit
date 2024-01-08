import Link from 'next/link';
import { getPublicAssetUrl } from 'src/helpers/PublicUrlHelper';

export type GoogleResultProps = {
  isSponsored?: boolean;
  isPlaySummitResult?: boolean;
  websiteTitle: string;
  websiteUrl: string;
  websiteHref?: string;
  contentTitle: string;
  contentBody: string;
  contentImage?: string;
};

const GoogleResult = ({
  isSponsored,
  isPlaySummitResult,
  websiteTitle,
  websiteUrl,
  websiteHref,
  contentTitle,
  contentBody,
  contentImage,
}: GoogleResultProps): JSX.Element => {
  const publicUrl = getPublicAssetUrl();

  return (
    <article className="google-result">
      {isSponsored && <p className="sponsored-label">Sponsored</p>}
      <div className="google-result-container">
        <div>
          <div className="google-result-website">
            {isPlaySummitResult ? (
              <img
                className="website-icon"
                src={`${publicUrl}/assets/img/channels/play-avatar.png`}
                alt={websiteTitle}
              />
            ) : (
              <div className="website-icon">{websiteTitle.slice(0, 1)}</div>
            )}
            <Link href={websiteHref || '#'}>
              <h6 className="website-title">{websiteTitle}</h6>
              <p className="website-url">{websiteUrl}</p>
            </Link>
          </div>
          <div className="google-result-content">
            <h3 className="content-title">
              <Link href={websiteHref || '#'}>{contentTitle}</Link>
            </h3>
            <p className="content-body">{contentBody}</p>
          </div>
        </div>
        {contentImage && <img className="content-image" src={contentImage} alt={contentTitle} />}
      </div>
    </article>
  );
};

export default GoogleResult;
