import React from "react"
import { SocialIcon } from "react-social-icons"

const Social = () => {
  return (
    <div className="social-icons mb-3">
      <SocialIcon
        network="github"
        target="_blank"
        href="https://github.com/prasetyodimas"
      />
      <SocialIcon
        network="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/dimas-prasetyo"
      />
      <SocialIcon
        network="instagram"
        target="_blank"
        href="https://www.instagram.com/dimas_prsetyo"
      />
      <SocialIcon
        network="stackoverflow"
        target="_blank"
        href="https://stackoverflow.com/users/4939125/dimas-prasetyo"
      />
    </div>
  )
}

export default Social
