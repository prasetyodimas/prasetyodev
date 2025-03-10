import React from "react"
const year = new Date().getFullYear() - 2017;
const BadgeYears = () => (
  <div
    className="d-block badge rounded-pill"
    style={{
      width: "150px",
      height: "150px",
      padding: ".25rem .5rem",
      fontSize: ".75rem",
      position: "absolute",
      bottom: 0,
      cursor: "pointer",
      background: "linear-gradient(120deg,rgb(255, 230, 0) 0%,rgb(255, 0, 0) 100%)",
      borderRadius: "50%",
      transition: "transform 0.3s, box-shadow 0.3s",
      overflow: "hidden"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "scale(1.5)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}
    >
      <h4
        className="h4 m-0 pt-2 position-relative"
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '4rem',
          top: '10px',
          color: '#fff'
        }}
      >
        {year}
      </h4>
      <p className="text shake" style={{ color: '#fff' }}>Year Experience</p>
    </div>
  </div>
)

export default BadgeYears

