import { getPublicAssetUrl } from 'src/helpers/PublicUrlHelper';
import { user } from './constants';
import GoogleResult, { GoogleResultProps } from './GoogleResult';

const Google = (): JSX.Element => {
  const publicUrl = getPublicAssetUrl();
  const suggestionPills = [
    'Images',
    'Videos',
    'Examples',
    'Essay',
    'Plan',
    'PDF',
    'Quotes',
    'Drawing',
  ];

  const resultsContent: GoogleResultProps[] = [
    {
      isSponsored: true,
      websiteIcon: `${publicUrl}/assets/img/channels/play-avatar.png`,
      websiteTitle: 'PLAY! Summit',
      websiteUrl: 'https://www.playsummit.com',
      contentTitle: 'Healthy Living: Reality vs Theory',
      contentBody:
        'Embark on a transformative journey toward a healthier lifestyle with our thought-provoking session at PLAY! Summit. Join esteemed speakers Aly Nichols and Sophia Taylor...',
      contentImage:
        'https://playsummit.sitecoresandbox.cloud/api/public/content/83da9d31fc674139affc0864b0acf074?v=234fb5ef',
      websiteHref: '/sessions/Healthy-living-reality-vs-theory',
    },
    {
      contentTitle: 'Healthy Lifestyles, Healthy Outlook | Patient Education',
      websiteTitle: 'UCSF Health',
      websiteUrl: 'https://www.ucsfhealth.org › education › healthy-lifest...',
      contentBody:
        "Eat a well-balanced, low-fat diet with lots of fruits, vegetables, and whole grains. Choose a diet that's low in saturated fat and cholesterol, and moderate in ...",
    },
    {
      contentTitle: 'Healthy Lifestyle Benefits: 5 Tips for Living Your Strongest, ...',
      websiteTitle: 'Healthline',
      websiteUrl: 'https://www.healthline.com › health › fitness-nutrition',
      contentBody:
        'Starting a healthy lifestyle can involve eating nutritious foods, engaging in regular physical activity, and prioritizing your mental health ...',
    },
    {
      websiteIcon: `${publicUrl}/assets/img/channels/play-avatar.png`,
      websiteTitle: 'PLAY! Summit',
      websiteUrl: 'https://www.playsummit.com',
      contentTitle: 'Healthy Living: Reality vs Theory',
      contentBody:
        'Embark on a transformative journey toward a healthier lifestyle with our thought-provoking session at PLAY! Summit. Join esteemed speakers Aly Nichols and Sophia Taylor...',
      websiteHref: '/sessions/Healthy-living-reality-vs-theory',
    },
    {
      contentTitle: 'Healthy lifestyle: 5 keys to a longer life',
      websiteTitle: 'Harvard Health',
      websiteUrl: 'https://www.health.harvard.edu › blog › healthy-lifest...',
      contentBody:
        'Healthy lifestyle: 5 keys to a longer life · 1. Healthy diet · 2. Healthy physical activity level · 3. Healthy body weight, · 4. Smoking · 5.',
    },
    {
      contentTitle: 'Healthy Lifestyle',
      websiteTitle: 'American Heart Association',
      websiteUrl: 'https://www.heart.org › healthy-living › healthy-lifestyle',
      contentBody:
        'How do you want to live? Along with eating right and being active, real health includes getting enough sleep, practicing mindfulness, managing stress, ...',
    },
    {
      contentTitle: '10 TIPS FOR MAINTAINING A HEALTHY LIFESTYLE AND ...',
      websiteTitle: 'Richard M. Fairbanks School of Public Health',
      websiteUrl: 'https://fsph.iupui.edu › doc › 10-Tips-Healthy-...',
      contentBody:
        'In some cases, high doses of vitamins can be bad for your health. 4. Drink Water and Stay Hydrated, and Limit Sugared Beverages. Drink water regularly to stay ...',
    },
    {
      contentTitle: '4 Steps to a Healthy Lifestyle',
      websiteTitle: 'WebMD',
      websiteUrl: 'https://www.webmd.com › ... › Feature Stories',
      contentBody:
        'Meditate, pray, or otherwise find solace for at least 10-20 minutes each day. Contemplation is good for your soul, helps you cope with the demands of daily life ...',
    },
    {
      contentTitle: 'Healthy living',
      websiteTitle: 'SANE Australia',
      websiteUrl: 'https://www.sane.org › ... › Factsheets & Guides',
      contentBody:
        "'Healthy living' means maintaining a healthy lifestyle and introducing habits that improve your health. It can be difficult to change old habits, but there are ...",
    },
  ];

  return (
    <>
      <header className="google-header">
        <div className="google-header-left">
          <img
            src={`${publicUrl}/assets/img/channels/google-logo.png`}
            alt="Google"
            className="logo"
          />
        </div>
        <div className="google-header-main">
          <input type="text" value={'healthy lifestyle'} />
          <ul className="suggestion-pills">
            {suggestionPills.map((pill) => (
              <li key={pill}>{pill}</li>
            ))}
          </ul>
        </div>
        <div className="google-header-right">
          <svg viewBox="0 0 24 24">
            <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
            <circle cx="12" cy="12" r="3.5"></circle>
          </svg>
          <svg viewBox="0 0 24 24">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
          <img src={user.image} alt={user.name} className="avatar" />
        </div>
      </header>
      <main className="google-main">
        <div className="google-main-container">
          <p className="results-stats">About 1,970,000,000 results (0.36 seconds)</p>
          {resultsContent.map((result) => (
            <GoogleResult {...result} key={result.websiteUrl} />
          ))}
        </div>
      </main>
    </>
  );
};

export const Default = Google;
