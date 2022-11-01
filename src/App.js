import './App.scss';
import ProfileImg from './profile-pic.jpg';
import ShareIcon from './share-icon.svg';

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="main-section">
          <div className="content">
            <div className="profile-section">
              <img src={ProfileImg} id="profile__img" alt="Oluwakemi" />
              <p className="twitter-id" id="twitter">innykemi</p>
              <p className="slack-id" id="slack">InnyKemi</p>
              <span className="share-button">
                <img src={ShareIcon} alt="share-icon" />
              </span>
            </div>
            <div className="link-section">
              <span className="link">Twitter Link</span>
              <span className="link"></span>
              <span className="link"></span>
              <span className="link"></span>
              <span className="link"></span>
              <span className="link"></span>
            </div>
          </div>
        </div>
        <div className="social-section"></div>
      </div>
      <div className="footer-section">
        <div className="container">
          <div className="footer-content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
