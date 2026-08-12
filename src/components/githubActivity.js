import React, { useEffect, useState } from "react"
import BlockElement from "../components/blockElement"

const GITHUB_USERNAME = "prasetyodimas"
const MAX_REPOS = 10

const GithubActivity = () => {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${MAX_REPOS}`
        )
        if (!response.ok) throw new Error("Failed to fetch repositories")
        const data = await response.json()
        setRepos(data)
        setStatus("success")
      } catch (error) {
        setStatus("error")
      }
    }

    fetchRepos()
  }, [])

  return (
    <BlockElement
      className="github-activity px-4 py-5"
      component="div"
    >
      <div id="github-activity" className="github-activity-anchor" />
      <h4 className="text-center mb-4">GitHub Activity</h4>
      <p className="lead text-center text-body-secondary mb-5">
        Recent repositories — things I build and maintain in the open.
      </p>
      {status === "loading" && (
        <p className="text-center text-body-secondary">
          Loading repositories...
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-body-secondary">
          Unable to load repositories right now.{" "}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub profile →
          </a>
        </p>
      )}
      {status === "success" && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {repos.map(repo => (
            <div className="col" key={repo.id}>
              <a
                className="github-repo-card h-100"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="github-repo-name">{repo.name}</h5>
                <p className="github-repo-description">
                  {repo.description || "No description provided."}
                </p>
                <div className="github-repo-meta">
                  {repo.language && (
                    <span className="github-repo-language">
                      {repo.language}
                    </span>
                  )}
                  <span>★ {repo.stargazers_count}</span>
                  <span>
                    Updated{" "}
                    {new Date(repo.updated_at).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      <p className="text-center mt-4 mb-0">
        <a
          className="github-profile-link"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          View full GitHub profile →
        </a>
      </p>
    </BlockElement>
  )
}

export default GithubActivity
