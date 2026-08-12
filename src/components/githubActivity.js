import React, { useEffect, useState } from "react"
import BlockElement from "../components/blockElement"

const GITHUB_USERNAME = "prasetyodimas"
const MAX_REPOS = 6
const MAX_EVENTS = 8
const WEEKS = 26

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  HTML: "#e34c26",
  PHP: "#4f5d95",
  Vue: "#41b883",
  Python: "#3572a5",
  Java: "#b07219",
  Go: "#00add8",
}

const toDateKey = date =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`

const intensityOf = count =>
  count === 0
    ? 0.04
    : count <= 2
    ? 0.12
    : count <= 4
    ? 0.22
    : count <= 7
    ? 0.35
    : 0.55

const buildCalendar = countsByDate => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const cursor = new Date(today)
  cursor.setDate(cursor.getDate() - 7 * WEEKS)
  cursor.setDate(cursor.getDate() - cursor.getDay())

  const days = []
  while (cursor <= today) {
    const date = new Date(cursor)
    days.push({
      key: toDateKey(date),
      label: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      count: countsByDate[toDateKey(date)] || 0,
    })
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

const timeAgo = dateStr => {
  const minutes = Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000)
  if (minutes < 60) return `${Math.max(minutes, 1)}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 5) return `${weeks}w ago`
  return `${Math.floor(days / 30)}mo ago`
}

const describeEvent = event => {
  const repo = event.repo.name.split("/")[1] || event.repo.name
  switch (event.type) {
    case "PushEvent":
      return { action: "pushed to", repo }
    case "PullRequestEvent":
      return {
        action:
          event.payload.action === "closed" && event.payload.pull_request?.merged
            ? "merged PR in"
            : "opened PR in",
        repo,
      }
    case "PullRequestReviewEvent":
      return { action: "reviewed PR in", repo }
    case "CreateEvent":
      return { action: `created ${event.payload.ref_type} in`, repo }
    case "IssuesEvent":
      return { action: "opened issue in", repo }
    case "IssueCommentEvent":
      return { action: "commented in", repo }
    case "ForkEvent":
      return { action: "forked", repo }
    case "WatchEvent":
      return { action: "starred", repo }
    case "ReleaseEvent":
      return { action: "published release in", repo }
    default:
      return { action: "activity in", repo }
  }
}

const GithubActivity = () => {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [events, setEvents] = useState([])
  const [calendar, setCalendar] = useState([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const [profileRes, reposRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${MAX_REPOS}`
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`
          ),
        ])
        if (!profileRes.ok || !reposRes.ok || !eventsRes.ok) {
          throw new Error("Failed to fetch GitHub data")
        }

        const [profileData, reposData, eventsData] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
          eventsRes.json(),
        ])
        setProfile(profileData)
        setRepos(reposData)
        setEvents(eventsData.slice(0, MAX_EVENTS))

        let countsByDate = {}
        try {
          const calendarRes = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
          )
          if (!calendarRes.ok) throw new Error("Failed to fetch contributions")
          const calendarData = await calendarRes.json()
          countsByDate = calendarData.contributions.reduce(
            (acc, day) => ({ ...acc, [day.date]: day.count }),
            {}
          )
        } catch {
          countsByDate = eventsData.reduce((acc, event) => {
            const key = event.created_at.slice(0, 10)
            return { ...acc, [key]: (acc[key] || 0) + 1 }
          }, {})
        }

        const days = buildCalendar(countsByDate)
        setCalendar(days)
        setTotalContributions(
          days.reduce((total, day) => total + day.count, 0)
        )
        setStatus("success")
      } catch (error) {
        setStatus("error")
      }
    }

    fetchGithub()
  }, [])

  return (
    <BlockElement className="github-activity px-4 py-5" component="div">
      <div id="github-activity" className="github-activity-anchor" />
      <div className="github-activity-header">
        <h2 className="github-activity-title">GitHub Activity</h2>
        <a
          className="github-view-profile"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          View Profile ↗
        </a>
      </div>
      {status === "loading" && (
        <p className="text-center text-body-secondary">
          Loading GitHub activity...
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-body-secondary">
          Unable to load GitHub activity right now.{" "}
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
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <h3 className="github-contributions-title">
              {totalContributions} contributions in the last 6 months
            </h3>
            <div className="github-panel p-3 p-md-4 mb-4">
              <div className="github-heatmap">
                {calendar.map(day => (
                  <div
                    key={day.key}
                    className="github-heatmap-day"
                    title={
                      day.count === 0
                        ? `No activity on ${day.label}`
                        : `${day.count} event${
                            day.count > 1 ? "s" : ""
                          } on ${day.label}`
                    }
                    style={{
                      backgroundColor: `rgba(209, 0, 84, ${intensityOf(
                        day.count
                      )})`,
                    }}
                  />
                ))}
              </div>
              <div className="github-heatmap-legend">
                <span>Less</span>
                {[0.04, 0.12, 0.22, 0.35, 0.55].map(opacity => (
                  <div
                    key={opacity}
                    className="github-heatmap-day"
                    style={{
                      backgroundColor: `rgba(209, 0, 84, ${opacity})`,
                    }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
            {profile && (
              <div className="row g-3 mb-5">
                <div className="col-4">
                  <div className="github-stat-card">
                    <div className="github-stat-value">
                      {profile.public_repos}
                    </div>
                    <div className="github-stat-label">Repositories</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="github-stat-card">
                    <div className="github-stat-value">
                      {profile.followers}
                    </div>
                    <div className="github-stat-label">Followers</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="github-stat-card">
                    <div className="github-stat-value">
                      {profile.following}
                    </div>
                    <div className="github-stat-label">Following</div>
                  </div>
                </div>
              </div>
            )}
            <h3 className="github-section-subtitle">Recent Repositories</h3>
            <div className="row row-cols-1 row-cols-sm-2 g-3">
              {repos.map(repo => (
                <div className="col" key={repo.id}>
                  <a
                    className="github-repo-card h-100"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="github-repo-name">{repo.name}</h4>
                    <p className="github-repo-description">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="github-repo-meta">
                      {repo.language && (
                        <span className="github-repo-language">
                          <span
                            className="github-repo-language-dot"
                            style={{
                              backgroundColor:
                                languageColors[repo.language] || "#adb5bd",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span>★ {repo.stargazers_count}</span>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <h3 className="github-section-subtitle">Recent Activity</h3>
            <div className="github-panel github-activity-feed">
              {events.length === 0 && (
                <p className="text-body-secondary p-3 mb-0">
                  No recent public activity.
                </p>
              )}
              {events.map(event => {
                const { action, repo } = describeEvent(event)
                return (
                  <div className="github-activity-item" key={event.id}>
                    <span className="github-activity-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4" />
                        <path d="m6 8-4 4 4 4" />
                        <path d="m14.5 4-5 16" />
                      </svg>
                    </span>
                    <div>
                      <p className="github-activity-text">
                        {action}{" "}
                        <a
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo}
                        </a>
                      </p>
                      <p className="github-activity-time">
                        {timeAgo(event.created_at)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </BlockElement>
  )
}

export default GithubActivity
