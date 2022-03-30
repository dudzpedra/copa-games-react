import Social from "../components/ui/Social/index";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <Social />
      <p>Please feel free to contact me in any social media!</p>
      <p>I would love some feedback!</p>
      <p>
        This project is available at{" "}
        <a
          href="https://github.com/dudzpedra/copa-games-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          this Github repo.
        </a>
      </p>
    </div>
  );
};

export default Contact;
