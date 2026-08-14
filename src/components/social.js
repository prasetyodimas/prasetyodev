import React from "react"
import { SocialIcon } from "react-social-icons"

const iconStyle = { width: 38, height: 38 }

const Social = () => {
  return (
    <div className="social-icons mb-3">
      <SocialIcon
        network="github"
        target="_blank"
        href="https://github.com/prasetyodimas"
        style={iconStyle}
      />
      <SocialIcon
        network="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/dimas-prasetyo"
        style={iconStyle}
      />
      <SocialIcon
        network="instagram"
        target="_blank"
        href="https://www.instagram.com/dimas_prsetyo"
        style={iconStyle}
      />
      <SocialIcon
        network="stackoverflow"
        target="_blank"
        href="https://stackoverflow.com/users/4939125/dimas-prasetyo"
        style={iconStyle}
      />
    </div>
  )
}

export default Social
