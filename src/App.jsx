const projects = [
  { number: '01', title: 'Your first project', type: 'Featured work', description: 'Introduce a project you’re proud of. Describe what you built, your role, and what you learned.', style: 'green', mark: 'Make it\nmeaningful.' },
  { number: '02', title: 'Your next big idea', type: 'Selected work', description: 'Add another project here. A clear story and a few thoughtful screenshots go a long way.', style: 'pink', mark: 'Small idea.\nBig potential.' },
]

export default function App() {
  return (
    <>
      <header className="nav wrap">
        <a className="wordmark" href="#home" aria-label="Portfolio home">Your name<span>®</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="home">
        <section className="hero wrap" aria-labelledby="intro">
          <p className="eyebrow"><span className="dot" /> A little introduction</p>
          <h1 id="intro">Good ideas.<br />Thoughtfully <em>built.</em></h1>
          <div className="hero-bottom"><p>I’m <strong>Your name</strong>. Welcome to my corner of the internet—a collection of things I’m making, learning, and exploring.</p><a className="button" href="#work">Explore my work <span aria-hidden="true">↘</span></a></div>
        </section>
        <section className="work wrap" id="work" aria-labelledby="work-title">
          <div className="section-top"><h2 id="work-title">Selected work</h2><span>Room for what’s next</span></div>
          <div className="projects">{projects.map(project => <article key={project.number}>
            <div className={`project-art ${project.style}`}><span className="art-label">PROJECT {project.number} / PLACEHOLDER</span><p>{project.mark}</p><span className="art-star" aria-hidden="true">✳</span></div>
            <div className="project-heading"><h3>{project.title}</h3><span>{project.type}</span></div><p className="project-description">{project.description}</p>
          </article>)}</div>
        </section>
        <section className="about wrap" id="about" aria-labelledby="about-title"><p className="eyebrow">The person behind the projects</p><div className="about-grid"><h2 id="about-title">Curious by nature.<br /><em>Always learning.</em></h2><div><p>This is your space to tell your story. Share what interests you, what you enjoy building, and where you’d like to go next.</p><p className="muted">Replace this starter copy with a few honest sentences about yourself. Keep it personal, clear, and in your own voice.</p></div></div></section>
        <section className="contact wrap" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Have something in mind?</p><h2 id="contact-title">Let’s make<br /><em>something good.</em></h2><p>Add your preferred email address and social links here so people can reach you.</p></section>
      </main>
      <footer className="wrap"><span>© {new Date().getFullYear()} Your name</span><a href="#home">Back to top ↑</a><span>Made with care.</span></footer>
    </>
  )
}
