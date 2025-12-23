import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Fair-Ride Logistics",
      role: "Web App Developer",
      description: "Dispatch and logistics company platform connecting verified riders for safe, swift, and affordable deliveries.",
      technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS"],
      url: "https://fair-ride-two.vercel.app/",
      image: "/fair-ride.png",
      sector: "Logistics",
    },
    {
      title: "Padama Energy",
      role: "Web App Developer",
      description: "Dedicated to driving the future of energy with unparalleled expertise in upstream energy solutions. Delivering innovative and effective solutions that meet the evolving needs of clients.",
      technologies: ["JavaScript"],
      url: "#",
      image: "/padama.png",
      sector: "Energy",
    },
    {
      title: "Sea to Seas Ltd",
      role: "Web App Developer",
      description: "Complete solution provider for energy sector projects, specializing in Oil and Gas Trading, modular refinery construction, and power generation infrastructure.",
      technologies: ["JavaScript", "Bootstrap"],
      url: "#",
      image: "/sea-to-seas.jpg",
      sector: "Oil & Gas",
    },
    {
      title: "BMA Scholarship Foundation",
      role: "Web App Developer",
      description: "Non-profit Scholarship Foundation dedicated to empowering less-privileged individuals through scholarships, educational grants, mentorship programs, and skill development.",
      technologies: ["JavaScript"],
      url: "https://mba-project-pzss.vercel.app/index.html",
      image: "/bma.jpg",
      sector: "Non-profit",
    },
    {
      title: "Wood & Steel Medallions",
      role: "Web App Developer",
      description: "Leading manufacturing and steel fabrication company delivering premium interior, residential, and commercial fabrication solutions combining quality craftsmanship and innovative design.",
      technologies: ["JavaScript"],
      url: "https://woodmath.com/",
      image: "/woodmath.png",
      sector: "Manufacturing",
    },
  ]

  const skills = {
    Frontend: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    Styling: ["Tailwind CSS", "Tailwind Variant", "Bootstrap", "HTML5", "CSS3"],
    Backend: ["Restful APIs"],
    "Tools & Others": ["Git/GitHub", "Performance Optimization", "jest", "command line Savvy"]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full border-4 border-primary/20 p-1 shadow-lg">
              <Image
                src="/daniel-elom.jpg?v=1"
                alt="Daniel Elom - Frontend Engineer"
                fill
                className="object-cover rounded-full object-center "
                style={{ objectPosition: 'top' }}
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">Daniel Elom</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-4">Frontend Engineer</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Experienced Frontend Developer with expertise in HTML5, CSS, Tailwind, Bootstrap, JavaScript/TypeScript,
              React/Next.js, and Vue/Nuxt.js. Skilled in building responsive, dynamic, user-friendly interfaces and
              optimizing web performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:elomd4294@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/daniel-elom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/DanielElom/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234 813 393 3217</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>elomd4294@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            A showcase of innovative applications across various industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {project.sector}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                        {project.role}
                      </CardDescription>
                    </div>
                    {project.url !== "#" && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Professional Summary</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">7+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Industry Sectors</div>
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Experienced Frontend Developer with expertise in HTML5, CSS, Tailwind, Bootstrap, JavaScript/TypeScript,
                React/Next.js, and Vue/Nuxt.js. Skilled in building responsive, dynamic, user-friendly interfaces and
                optimizing web performance. Deeply committed to creating seamless digital experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Ready to bring your next project to life? I'm available for freelance work, consulting, and full-time
            opportunities.
          </p>

          <Card className="border-border/50 mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-primary mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span>+234 813 393 3217</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>elomd4294@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-4">Professional Links</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-4 w-4 text-accent" />
                      <a
                        href="https://www.linkedin.com/in/daniel-elom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-4 w-4 text-accent" />
                      <a
                        href="https://github.com/DanielElom/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:elomd4294@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/daniel-elom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/DanielElom/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Daniel Elom - Frontend Engineer. Available for new opportunities.</p>
        </div>
      </footer>
    </div>
  )
}
