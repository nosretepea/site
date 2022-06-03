import React, { useContext, ReactElement } from "react";
import { GlobalContext } from "../util/globalContext";
import GithubDark from "../assets/github-dark.png";
import GithubLight from "../assets/github-light.png";
import MailDark from "../assets/mail-dark.png";
import MailLight from "../assets/mail-light.png";
import LinkedinDark from "../assets/linkedin-dark.png";
import LinkedinLight from "../assets/linkedin-light.png";

type SocialProps = {
  height: string,
}

const Social: React.FC<SocialProps> = (props: SocialProps): ReactElement => {
  const { displayMode } = useContext(GlobalContext);

  return (
    <>
      <div className="flex">
        <div className={`icon icon__${props.height} mx-2 md:mx-4`}>
          <a className="icon-link" href="mailto:nosretepea@gmail.com">
            <img className="h-full" src={displayMode === "dark" ? MailDark : MailLight} alt="email" width="40" height="40" />
          </a>
        </div>
        <div className={`icon icon__${props.height} mx-2 md:mx-4`}>
          <a className="icon-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashley-peterson-24387814a/">
            <img className="h-full" src={displayMode === "dark" ? LinkedinDark : LinkedinLight} alt="linkedin" width="40" height="40" />
          </a>
        </div>
        <div className={`icon icon__${props.height} mx-2 md:mx-4`}>
          <a className="icon-link" target="_blank" rel="noreferrer" href="https://www.github.com/nosretepea">
            <img className="h-full" src={displayMode === "dark" ? GithubDark : GithubLight} alt="github" width="40" height="40" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Social;