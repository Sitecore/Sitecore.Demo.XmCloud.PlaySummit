import { getPublicAssetUrl } from 'src/helpers/PublicUrlHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PLAY_SUMMIT_POSTS, USER } from './constants';
import { faBookmark, faUser, faHashtag, faPlus } from '@fortawesome/free-solid-svg-icons';
import LinkedinSponsoredPost from './LinkedinSponsoredPost';
import LinkedinPost from './LinkedinPost';

const Linkedin = (): JSX.Element => {
  const publicUrl = getPublicAssetUrl();

  return (
    <>
      <header className="linkedin-header">
        <div className="linkedin-container">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0a66c2"
              width="24"
              height="24"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <nav>
            <ul>
              <li className="active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                <span>Home</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <span>My Network</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <span>Jobs</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <span>Messaging</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <span>Notifications</span>
              </li>
              <li>
                <img src={USER.image} alt={USER.name} className="avatar" />
                <span>Me</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="linkedin-main">
        <div className="linkedin-container">
          <aside className="sidebar-left">
            <div className="user-card linkedin-box">
              <div className="user-cover"></div>
              <img src={USER.image} alt={USER.name} className="avatar" />
              <h3>{USER.name}</h3>
              <p>{USER.jobTitle}</p>
              <ul>
                <li>
                  <span>Who&apos;s viewed your profile</span>
                  <span>30</span>
                </li>
                <li>
                  <span>Connections</span>
                  <span>1 327</span>
                </li>
              </ul>
              <button>
                <FontAwesomeIcon icon={faBookmark} /> My items
              </button>
            </div>
            <div className="activity-card linkedin-box">
              <p className="activity-list-label">Recent</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span>DailySport Highlights</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>SportsContent</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Exclusive Sports Media</span>
                </li>
              </ul>
              <p className="activity-list-label">Groups</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span>DailySport Highlights</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUser} />
                  <span>Exclusive Sports Media</span>
                </li>
              </ul>
              <p className="activity-list-label">Followed Hashtags</p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>DailySport</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>SportsContent</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHashtag} />
                  <span>BeActive</span>
                </li>
              </ul>
              <hr />
              <button>Discover more</button>
            </div>
          </aside>
          <aside className="linkedin-feed">
            <div className="linkedin-box new-post">
              <div className="new-post-input">
                <img src={USER.image} alt={USER.name} className="avatar" />
                <input type="text" placeholder="Start a post" />
              </div>
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#378fe9">
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                  <span>Media</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c37d16">
                    <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                  </svg>
                  <span>Event</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e06847">
                    <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                  </svg>
                  <span>Write article</span>
                </li>
              </ul>
            </div>
            <LinkedinSponsoredPost {...PLAY_SUMMIT_POSTS.linkedin} />
            <LinkedinPost {...USER.contacts[0]} timestamp="4h" />
            <LinkedinPost {...USER.contacts[8]} timestamp="2d" />
            <LinkedinPost {...USER.contacts[7]} timestamp="1w" />
          </aside>
          <aside className="sidebar-right">
            <div className="connect-suggestions linkedin-box">
              <h5>Add to your feed</h5>
              <ul>
                <li>
                  <img
                    src={USER.contacts[5].image}
                    alt={USER.contacts[5].name}
                    className="avatar"
                  />
                  <div>
                    <h6>{USER.contacts[5].name}</h6>
                    <p>{USER.contacts[5].jobTitle}</p>
                    <button>
                      <FontAwesomeIcon icon={faPlus} /> Follow
                    </button>
                  </div>
                </li>
                <li>
                  <img
                    src={USER.contacts[12].image}
                    alt={USER.contacts[12].name}
                    className="avatar"
                  />
                  <div>
                    <h6>{USER.contacts[12].name}</h6>
                    <p>{USER.contacts[12].jobTitle}</p>
                    <button>
                      <FontAwesomeIcon icon={faPlus} /> Follow
                    </button>
                  </div>
                </li>
                <li>
                  <img
                    src={`${publicUrl}/assets/img/channels/play-avatar.png`}
                    alt="PLAY! Summit"
                    className="avatar"
                  />
                  <div>
                    <h6>PLAY! Summit</h6>
                    <p>Company • Sports and Recreation</p>
                    <button>
                      <FontAwesomeIcon icon={faPlus} /> Follow
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export const Default = Linkedin;
