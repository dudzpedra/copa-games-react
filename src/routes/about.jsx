import "../styles/about.css";
const About = () => {
  return (
    <div className="about-container">
      <h2>How does it work?</h2>
      <div className="about-info">
        <h3>Instructions</h3>
        <h4>
          On the main page, click the start button and follow the instructions
          below:
        </h4>
        <p>
          1. Select the amount of games you want for the competition (4 or 8
          games).
        </p>
        <p>
          2. Select the games you want to add to the competition by clicking the
          select button.
        </p>
        <p>
          3. Once you've selected the games, click on the Submit Games button.
        </p>
        <p>4. On the next screen, click on the Start Competition button.</p>
        <p>5. You can see the winner and the vice on the next screen!</p>
        <p>
          That's it! You can go back to the Games page and start another
          competition!
        </p>
      </div>
    </div>
  );
};

export default About;
