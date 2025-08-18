function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Built and deployed web applications for various clients, ranging from small businesses to startups. Designed responsive UIs, implemented secure authentication systems, and integrated third-party APIs. Managed deployments and provided ongoing maintenance and support to ensure optimal performance and user satisfaction.",
      skills: [
        "React",
        "NodeJS",
        "Express",
        "MongoDB",
        "MySQL",
        "Bootstrap",
        "Python",
        "Flask",
        "Django",
        "Nginx",
        "DigitalOcean",
      ],
    },
    {
      role: "Python Developer",
      company: "Bincom ICT Solutions",
      period: "2023 – 2025",
      location: "Remote",
      description:
        "Developed and maintained scalable backend services using Python and various libraries. Led the design and implementation of RESTful APIs, and improved API performance by 30%. Collaborated with cross-functional teams to deliver new features, troubleshoot issues, and ensure code quality through testing and code reviews. Reduced client complaints by 20% by proactively addressing pain points and enhancing system reliability.",
      skills: [
        "Python",
        "Microservices",
        "REST API",
        "Docker",
        "PostgreSQL",
        "FastAPI",
        "Django",
      ],
    },
    {
      role: "ICT/Computer Programming Instructor and Supervisor",
      company: "MiddleTech/Digital Data Academy",
      period: "2024 – 2025",
      location: "Onsite",
      description:
        "Instructed over 50 students in computer programming concepts and practical applications, covering languages such as Python and JavaScript. Developed comprehensive curriculum and hands-on projects to reinforce learning. Supervised practical sessions where students built real-world web applications and helped them overcome technical challenges.",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      role: "Software Engineering",
      company: "ALX Africa",
      period: "2022 – 2023",
      location: "Hybrid",
      description:
        "Worked on collaborative projects, contributing to open-source initiatives. Specialized in backend and DevOps tasks, including server configuration, and automation scripts. Mentored junior cohorts and participated in regular knowledge-sharing sessions to foster a culture of continuous learning.",
      skills: [
        "Bash",
        "C",
        "Git",
        "Linux",
        "Python",
        "Flask",
        "JavaScript",
        "NodeJs",
      ],
    },
    {
      role: "IT Instructor",
      company: "Galaxy Computer College",
      period: "2019 – 2020",
      location: "Onsite",
      description:
        "Taught web development courses to students of varying skill levels, focusing on HTML, CSS, JavaScript, and design tools. Developed curriculum and learning materials tailored to student needs. Organized workshops and provided one-on-one support to help students build foundational skills and complete their projects successfully.",
      skills: ["HTML", "CSS", "JavaScript", "CorelDRAW", "Microsoft Office"],
    },
  ];

  return (
    <div className="flex-root" id="top">
      <section className="section flex-grow-1 d-flex align-items-center">
        <div className="container py-4">
          <p className="typing-effect ms-1">Where I've Worked.</p>
          <h2 className="mb-4 fw-bold" style={{ color: "var(--accent)" }}>
            Experience
          </h2>
          <div className="row g-4 reveal-on-load">
            {experiences.map((exp, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div
                  className="card card-dark h-100 p-4 position-relative exp-fade-in breathe"
                  style={{
                    overflow: "hidden",
                    animationDelay: `${idx * 0.5}s, 0s`,
                  }}
                >
                  <div className="ms-4">
                    <div className="d-flex flex-wrap align-items-center mb-1">
                      <h5
                        className="fw-bold mb-0 me-2"
                        style={{ color: "var(--accent)" }}
                      >
                        {exp.role}
                      </h5>
                      <span
                        className="badge bg-secondary ms-1"
                        style={{
                          background: "var(--secondary)",
                          color: "#2e2c2cff",
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div
                      className="mb-2 text-secondary"
                      style={{ fontSize: "0.98em" }}
                    >
                      {exp.period} &nbsp;|&nbsp; {exp.location}
                    </div>
                    <p className="mb-2" style={{ color: "#e5e7eb" }}>
                      {exp.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge s-badge certificate-card"
                          style={{
                            boxShadow: "0 2px 12px 0 rgba(139,92,246,0.10)",
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${
                              exp.skills.length * 0.3 + 2.1
                            }s`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
