import "../style/header.css";

const Header = (props) => {
  const { score, best } = props;
  return (
    <div className="header">
      <img
        className="title-img"
        src="https://kirby.nintendo.com/assets/img/kirby-logo.png"
        alt="title"
      />
      <h1 className="title">Memory Game</h1>
      <div className="score">
        <ul className="score-list">
          <li className="score">
            <b>Current Score</b>: {score}
          </li>
          <li className="bestScore">
            <b>Best Score:</b> {best}
          </li>
        </ul>
      </div>
      <p>
        Get a high score by clicking the images, don't click the same one tho...
      </p>
    </div>
  );
};

export default Header;
