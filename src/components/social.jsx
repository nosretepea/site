import * as React from "react";
import { LayoutContext } from "../components/layout";
import GithubDark from "../assets/github-dark.png";
import GithubLight from "../assets/github-light.png";
import MailDark from "../assets/mail-dark.png";
import MailLight from "../assets/mail-light.png";
import LinkedinDark from "../assets/linkedin-dark.png";
import LinkedinLight from "../assets/linkedin-light.png";

export default class Social extends React.Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {theme => (
          <div className="flex">
            <div className={`icon icon__${this.props.height} mx-2 md:mx-4`}>
              <a href="mailto:nosretepea@gmail.com">
                <img className="h-full" src={theme.displayMode === "dark" ? MailDark : MailLight} alt="email" width="40" height="40" />
              </a>
            </div>
            <div className={`icon icon__${this.props.height} mx-2 md:mx-4`}>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashley-peterson-24387814a/">
                <img className="h-full" src={theme.displayMode === "dark" ? LinkedinDark : LinkedinLight} alt="linkedin" width="40" height="40" />
              </a>
            </div>
            <div className={`icon icon__${this.props.height} mx-2 md:mx-4`}>
              <a target="_blank" rel="noreferrer" href="https://www.github.com/nosretepea">
                <img className="h-full" src={theme.displayMode === "dark" ? GithubDark : GithubLight} alt="github" width="40" height="40" />
              </a>
            </div>
          </div>
        )}
      </LayoutContext.Consumer>
    );
  }
};
