const SKILL_KEYWORDS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "Angular",
  "Node.js",
  "Express",
  "NestJS",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "Symfony",
  "Python",
  "Django",
  "Flask",
  "Golang",
  "Java",
  "Spring Boot",
  "Kotlin",
  "Swift",
  "Flutter",
  "React Native",
  "Ruby",
  "Rails",
  "Rust",
  "C#",
  ".NET",
  "HTML",
  "CSS",
  "SASS",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "jQuery",
  "Redux",
  "GraphQL",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Elasticsearch",
  "Firebase",
  "Supabase",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "CI/CD",
  "Jenkins",
  "GitLab",
  "GitHub",
  "Git",
  "Linux",
  "Nginx",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Playwright",
  "Selenium",
  "Figma",
  "Microservices",
  "RabbitMQ",
  "Kafka",
  "WordPress",
  "SEO",
  "PWA",
]

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

const findSkills = text => {
  const found = new Set()
  SKILL_KEYWORDS.forEach(skill => {
    const pattern = new RegExp(
      `(^|[^\\w+.#])${escapeRegExp(skill)}([^\\w+#]|$)`,
      "i"
    )
    if (pattern.test(text)) {
      found.add(skill)
    }
  })
  return [...found]
}

const cleanLine = line => line.trim().replace(/\s+/g, " ")

const findCompanyName = text => {
  const noise = /\s+(?:is hiring|is looking|sedang membuka|membuka lowongan|mencari|dibutuhkan).*$/i
  const patterns = [
    /(?:company|perusahaan)\s*[:\-]\s*([^\n\r,]+)/i,
    /([A-Z][A-Za-z0-9&.\s]{2,40}?)\s+(?:is hiring|sedang membuka|is looking for|membuka lowongan)/i,
    /\b(PT\.?\s+[A-Z][A-Za-z0-9&.,()\s]{2,60}?)(?=\s*(?:\n|[.,;:!?]|is\b|sedang\b|membuka\b|adalah\b|kami\b|$))/,
    /\b(CV\.?\s+[A-Z][A-Za-z0-9&.,()\s]{2,60}?)(?=\s*(?:\n|[.,;:!?]|is\b|sedang\b|membuka\b|adalah\b|kami\b|$))/,
    /(?:join|gabung|bergabung)(?:\s+(?:us|kami|with|dengan))?\s+(?:at\s+|di\s+)?([A-Z][A-Za-z0-9&.,()\s]{2,50})/i,
    /(?:we are|kami adalah|tentang)\s+([A-Z][A-Za-z0-9&.,()\s]{2,50})/i,
  ]
  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match && match[1]) {
      const candidate = cleanLine(match[1])
        .replace(noise, "")
        .replace(/[.,;:!?]+$/, "")
      if (candidate.length > 1 && candidate.length < 60) {
        return candidate
      }
    }
  }
  return ""
}

const findJobTitle = text => {
  const patterns = [
    /(?:posisi|position|job title|jabatan|role|vacancy|lowongan)\s*[:\-]\s*([^\n\r]+)/i,
    /(?:hiring|mencari|dibutuhkan|looking for|we need|kami membutuhkan)\s*[:\-]?\s*([A-Z][^\n\r]{2,60})/i,
    /(?:as|sebagai)\s+(?:a\s+|an\s+)?([A-Z][A-Za-z\s/-]{3,50}(?:Developer|Engineer|Designer|Manager|Analyst|Specialist|Programmer|Architect|Lead))/i,
  ]
  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match && match[1]) {
      const candidate = cleanLine(match[1])
        .replace(/[.,;:!?]+$/, "")
        .replace(/\s+(at|di|untuk|in|yang|dan|with|for)\s+.+$/i, "")
      if (candidate.length > 2 && candidate.length < 70) {
        return candidate
      }
    }
  }
  return ""
}

const findLocation = text => {
  const patterns = [
    /(?:lokasi|location|penempatan|placement|domisili|based in|kantor)\s*[:\-]\s*([^\n\r]+)/i,
    /\b(Jakarta(?:\s+(?:Selatan|Utara|Barat|Timur|Pusat))?|Bekasi|Depok|Tangerang(?:\s+Selatan)?|Bogor|Bandung|Semarang|Yogyakarta|Surabaya|Malang|Medan|Denpasar|Bali|Makassar|Batam|Palembang|Remote|WFA|Hybrid)\b/i,
  ]
  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match && match[1]) {
      return cleanLine(match[1]).replace(/[.,;:!?]+$/, "")
    }
  }
  return ""
}

const JOB_NOISE = /hiring|lowongan|posisi|vacancy|dibutuhkan|apply|lamar|kirim|requirements?|kualifikasi|qualification|jobdesc|tanggung jawab|responsibilit|benefit|gaji|salary|must know|\bskills?\b|\b(company|role|location|lokasi|penempatan)\s*:/i

const findSummary = (text, company) => {
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 40 && s.length < 250 && !JOB_NOISE.test(s))
  const descriptive = sentences.find(
    s =>
      !company ||
      !s.toLowerCase().includes(company.toLowerCase()) ||
      /adalah|merupakan|is a|is an|berfokus|perusahaan|company/i.test(s)
  )
  return descriptive || ""
}

export const extractJobInfo = text => {
  const normalized = text.trim()
  const company = findCompanyName(normalized)
  return {
    company,
    role: findJobTitle(normalized),
    location: findLocation(normalized),
    skills: findSkills(normalized),
    summary: findSummary(normalized, company),
  }
}

const listSkills = skills => {
  if (skills.length === 0) return ""
  if (skills.length === 1) return skills[0]
  if (skills.length === 2) return `${skills[0]} and ${skills[1]}`
  return `${skills.slice(0, -1).join(", ")}, and ${skills[skills.length - 1]}`
}

export const buildCoverLetter = info => {
  const company = info.company || "{company_name}"
  const role = info.role || "{your_role_specialization}"
  const locationNote = info.location ? ` (${info.location})` : ""
  const skillsList = listSkills(info.skills)

  const intro = `I am writing to express my strong interest in the ${role} position at ${company}. With a proven track record of delivering exceptional web experiences and leading development teams, I am excited about the opportunity to contribute my expertise to your dynamic team.
Over the past 5++ years, I have built a strong foundation in frontend development through a combination of hands-on experience and continuous learning. I have successfully developed and launched numerous web applications and websites, ensuring optimal user experiences and responsiveness across various devices and platforms.
My qualifications for the ${role} role include:
1. Technical Expertise: Proficient in HTML5, CSS3, JavaScript (including ES6+), and modern frontend libraries and frameworks such as React, Angular and Vue. I have a deep understanding of responsive web design, cross-browser compatibility, and accessibility standards.
2. Problem-Solving Abilities: I excel at identifying and solving complex technical challenges. I am skilled in debugging, performance optimization, and implementing best practices to improve code quality and maintainability.
3. User-Centric Approach: I am passionate about creating user-centric web experiences. I have a keen eye for design details, usability, and user interface best practices, which I leverage to enhance the overall user experience.
4. Continuous Learning: I am committed to staying up-to-date with the latest trends, technologies, and best practices in frontend development.
5. Effective Communication: I have excellent communication skills, which allow me to collaborate effectively with cross-functional teams, stakeholders, and clients.
6. Leadership Skills: I have a proven track record of leading frontend development teams, fostering collaboration, and guiding junior developers to achieve their best.`

  const matchingSkills = skillsList
    ? `My hands-on experience with ${skillsList} aligns directly with the technical requirements of this role, and I am confident I can ramp up quickly within your engineering environment. `
    : ""

  const companyContext = info.summary
    ? `What draws me to ${company} is that ${info.summary} `
    : ""

  const whyJoin = `${companyContext}I am excited about the prospect of joining ${company} and contributing to the team's mission. ${matchingSkills}I am confident that my technical expertise and leadership abilities make me a strong candidate for the ${role}${locationNote} position.`

  const callToAction = `Enclosed is my resume, which provides further details about my professional background and accomplishments. I would welcome the opportunity to discuss how my skills and experience align with the needs of ${company}. Please feel free to contact me at {your_number} or via email at {your_email_address} to schedule an interview.
Thank you for considering my application. I look forward to the possibility of contributing to the success of ${company} as a ${role}.`

  return {
    company,
    intro,
    whyJoin,
    callToAction,
    detected: {
      company: info.company,
      role: info.role,
      location: info.location,
      skills: info.skills,
    },
  }
}
