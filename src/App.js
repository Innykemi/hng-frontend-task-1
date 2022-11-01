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
              <a href="https://twitter.com/innykemi/" className="button" target="_blank" rel="noreferrer">Twitter Link</a>
              <a href="https://training.zuri.team/" className="button" id="btn__zuri" target="_blank" rel="noreferrer">Zuri Team</a>
              <a href="http://books.zuri.team/" className="button" id="books" target="_blank" rel="noreferrer">Zuri Books</a>
              <a href="https://books.zuri.team/" className="button" id="book__python" target="_blank" rel="noreferrer">Python Books</a>
              <a href="https://background.zuri.team/" className="button" id="pitch" target="_blank" rel="noreferrer">Background Check for Coders</a>
              <a href="https://books.zuri.team/design-rules" className="button" id="book__design" target="_blank" rel="noreferrer">Design Books</a>
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
