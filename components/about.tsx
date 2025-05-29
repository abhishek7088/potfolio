export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a passionate full-stack developer. I specialize in modern web technologies and love turning complex problems into simple,
              beautiful designs.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good cup of coffee while sketching out my next big idea.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">1+ Years</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Projects</h3>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Clients</h3>
                <p className="text-muted-foreground">25+ Happy</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">INDIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
