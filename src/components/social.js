import React from "react"
import { SocialIcon } from 'react-social-icons'

const Social = () => {
  return(
    <div className="d-flex justify-content-center">
      <SocialIcon
        network="github"
        target="_blank"
        href="https://github.com/prasetyodimas"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/dimas-prasetyo"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="instagram"
        target="_blank"
        href="https://www.instagram.com/dimas_prsetyo"
        style={{ height: 30, width: 30, marginRight: 6 }}
      />
      <SocialIcon
        network="stackoverflow"
        target="_blank"
        href="https://stackoverflow.com/users/4939125/dimas-prasetyo"
        style={{ height: 30, width: 30 }}
      />
    </div>
  )
}

export default Social
