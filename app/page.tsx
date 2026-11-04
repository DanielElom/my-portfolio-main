import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Lumen-Market",
      role: "Full-Stack Developer",
      description: "Lumen Market is a modern e-commerce marketplace (Nigeria-first, currency ₦). Temu-style breadth of catalog but a calmer, more trustworthy visual tone.",
      technologies: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.io", "Tailwind CSS", "Paystack"],
      url: "https://lumen-market.vercel.app/",
      image: "/final-dark-1440-top.png",
      sector: "E-commerce",
    },
    {
      title: "Sarva-Logistics",
      role: "Web App Developer",
      description: "Full-stack logistics dispatch PWA. Package delivery app for Abuja, Nigeria. Similar to Bolt but for deliveries. Single app with role-based routing.",
      technologies: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.io", "Tailwind CSS", "Zustand"],
      url: "https://sarva-logistics.vercel.app/",
      image: "/sarva-logistics-mobile-dark.png",
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
      title: "Sarva-Tech",
      role: "Product Lead & Web App Developer ",
      description: "The official website for Sarva Tech, a technology company that identifies problems, designs solutions, builds them, ships them, and keeps improving them.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      url: "https://sarvatechhq.com/",
      image: "/hero-1440-night.png",
      sector: "Technology",
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

  const skills = [
    { category: "Frontend Development", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript"] },
    { category: "UI & Styling", items: ["Tailwind CSS", "shadcn/ui", "Bootstrap", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Backend & APIs", items: ["Node.js", "NestJS", "TypeScript", "RESTful APIs", "Axios"] },
    { category: "Database & Storage", items: ["PostgreSQL", "Prisma ORM", "Redis", "Cloudinary"] },
    { category: "Real-time Systems & Processing", items: ["Socket.IO", "WebSockets", "BullMQ", "GPS Tracking", "Live Dispatch"] },
    {
      category: "Integrations & DevOps",
      items: ["Git/GitHub", "Paystack", "JWT Authentication", "Resend", "Vercel", "Render", "Supabase", "Africa's Talking"],
    },
  ]

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
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-4">Full Stack Engineer</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Full-Stack Developer experienced in building scalable, responsive web applications and business solutions. Skilled in JavaScript/TypeScript, React, Next.js, Vue.js, NestJS, PostgreSQL and Redis. Experienced in API development, database architecture, real-time systems, payment integrations, application security and performance optimization. Focused on transforming business challenges into practical, reliable software solutions.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map(({ category, items }) => (
              <Card
                key={category}
                className="h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    <h3>{category}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2" aria-label={`${category} technologies`}>
                    {items.map((skill) => (
                      <li key={skill}>
                        <Badge variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
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
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
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
                Full-Stack Developer experienced in building scalable, responsive web applications and business solutions. Skilled in JavaScript/TypeScript, React, Next.js, Vue.js, NestJS, PostgreSQL and Redis. Experienced in API development, database architecture, real-time systems, payment integrations, application security and performance optimization. Focused on transforming business challenges into practical, reliable software solutions.
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
