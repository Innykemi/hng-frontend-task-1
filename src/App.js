import './App.scss';
import ProfileImg from './profile-pic.jpg';
import ShareIcon from './share-icon.svg';
import DotsIcon from './dots.svg';
import SlackIcon from './slack.svg';
import GithubIcon from './github.svg';
import ZuriLogo from './Zuri.Internship_Logo.png';
import I4G from './I4G.png';

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
              <span className="share-dots">
                <img src={DotsIcon} alt="share-icon" />
              </span>
            </div>
            <div className="link-section">
              <a href="https://twitter.com/innykemi/" className="button" target="_blank" rel="noreferrer">Twitter Link</a>
              <a href="https://training.zuri.team/" className="button" id="btn__zuri" target="_blank" rel="noreferrer">Zuri Team</a>
              <a href="http://books.zuri.team/" className="button" id="books" target="_blank" rel="noreferrer">Zuri Books</a>
              <a href="https://books.zuri.team/" className="button" id="book__python" target="_blank" rel="noreferrer">Python Books</a>
              <a href="https://background.zuri.team/" className="button" id="pitch" target="_blank" rel="noreferrer">Background Check for Coders</a>
              <a href="https://books.zuri.team/design-rules" className="button" id="book__design" target="_blank" rel="noreferrer">Design Books</a>
            </div>
          </div>
          <div className="social-section">
            <div className="social-icons">
              <img src={SlackIcon} alt="slack" />
              <img src={GithubIcon} alt="github" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container">
          <div className="footer-content">
            <img src={ZuriLogo} alt="zuri" />
            <p className="footer-text">HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="IF4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
