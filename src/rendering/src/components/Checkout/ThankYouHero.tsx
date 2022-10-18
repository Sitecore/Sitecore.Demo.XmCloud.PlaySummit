import { getPublicAssetUrl } from '../../../src/helpers/PublicUrlHelper';

const ThankYouHero = (): JSX.Element => {
  const publicUrl = getPublicAssetUrl();

  return (
    <section className="thank-you-hero">
      <div className="thank-you-hero-inner">
        <div className="thank-you-hero-content">
          <h1>Thank you</h1>
          <p>Your order has been completed successfully.</p>
        </div>
        <div className="thank-you-hero-image">
          <img src={`${publicUrl}/assets/img/shop/thank-you-hero.png`} alt="Thank you" />
        </div>
      </div>
    </section>
  );
};

export default ThankYouHero;
