import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Lumen Market Case Study - Daniel Elom",
  description:
    "How Daniel Elom designed and built Lumen Market, an AI-native e-commerce platform for Nigeria with an AI customer-service agent, human-in-the-loop escalation and automated payment, delivery and policy workflows.",
}

const stack = [
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "BullMQ",
  "Socket.io",
  "Next.js",
  "n8n",
  "LLM Agents",
  "Paystack",
  "Claude Code",
]

const highlights = [
  { value: "35+", label: "Specification-driven build stages" },
  { value: "600+", label: "Automated tests" },
  { value: "22", label: "Tests for the AI chat flow" },
]

const sections = [
  {
    title: "AI chat first responder",
    points: [
      "Built an AI agent that answers live-chat customers first.",
      "The NestJS backend decides when the AI may reply and calls an n8n workflow through a webhook with header-key authentication.",
      "An LLM agent with a product-search tool answers from the live catalogue, never from memory.",
      "Every reply follows a fixed JSON contract (reply, escalate, reason) checked by a structured output parser.",
    ],
  },
  {
    title: "Human-in-the-loop escalation",
    points: [
      "Order-specific, payment and complaint questions, plus any AI failure (timeout, error, invalid response, rate cap), hand the conversation to staff with a recorded reason.",
      "Staff can claim, assign and hand threads back to the AI.",
      "Alerts go out by email, with timed reminders during support hours.",
      "An HMAC-signed outbound webhook supports external alerting, such as WhatsApp via n8n.",
    ],
  },
  {
    title: "Production reliability",
    points: [
      "Background job queue (BullMQ) with message debouncing and concurrent processing.",
      "Idempotency: one AI reply per customer message, guaranteed at database level.",
      "Per-conversation hourly caps and live typing indicators over WebSockets.",
      "A feature flag switches the AI off instantly.",
    ],
  },
  {
    title: "Privacy and safety by design",
    points: [
      "Emails, phone numbers and order numbers are masked before any data leaves the system, and the AI never sees order data.",
      "Replies are sanitised: HTML stripped, links allowlisted.",
      "Logs contain no message text or personal data.",
      "Customers see a clear AI disclosure and a “Talk to a person” button.",
    ],
  },
  {
    title: "Testing and debugging",
    points: [
      "Built a mock n8n server that simulates slow, failing and malformed responses.",
      "Wrote 22 automated tests for the AI flow.",
      "Diagnosed live integration failures from structured logs and status codes, including an authentication mismatch and a missing memory session key.",
    ],
  },
  {
    title: "Natural-language product search (“Ask Lumen”)",
    points: [
      "Customers describe what they want in plain language.",
      "Hard constraints like price limits are enforced in code rather than left to the model.",
      "Results say honestly when nothing matches.",
      "Built as a shared layer that a future LLM parser plugs into.",
    ],
  },
  {
    title: "Single source of truth automation",
    points: [
      "Replaced hand-typed store policies with one policy service that drives the website, checkout, emails, delivery-date calculations and FAQ.",
      "The FAQ is generated from one Markdown file with policy placeholders and exposed as JSON for the chatbot.",
      "Automated tests block any drift between policies and what customers see.",
    ],
  },
  {
    title: "Payment and operations automation",
    points: [
      "Paystack webhook processing with row-level locking.",
      "Asynchronous bank-transfer and USSD payments are reconciled automatically: late payments either revive the order or refund it, with a customer email either way.",
      "Delivery promises are calculated at payment from configurable delivery days and holidays.",
      "Staff cancellations refund and restock automatically.",
    ],
  },
  {
    title: "AI-assisted engineering",
    points: [
      "Delivered the platform through 35+ specification-driven stages with Claude Code.",
      "Each stage had written acceptance criteria and a reviewed report.",
      "Branch and pull-request workflow, with 600+ automated tests.",
    ],
  },
]

const skills = [
  "AI agents and tool use",
  "n8n workflow automation",
  "LLM system-message and structured-output design",
  "Webhooks and HMAC signing",
  "Human-in-the-loop design",
  "API integration (Paystack, Resend, Cloudinary)",
  "NestJS/TypeScript",
  "PostgreSQL/Prisma",
  "Redis/BullMQ",
  "Next.js",
  "Data privacy (NDPA-aware design)",
]

export default function LumenMarketCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-10 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>

          <Badge variant="secondary" className="mb-4">
            Case Study · E-commerce
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">Lumen Market</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-pretty">
            AI-native e-commerce platform for Nigeria
          </p>
          <p className="text-sm font-medium text-muted-foreground mb-8">Founder and solo builder · 2026</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {stack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://lumen-market.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Live Site
            </a>
          </Button>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Screenshot */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border/50 shadow-lg mb-16">
          <Image
            src="/final-dark-1440-top.png"
            alt="Lumen Market storefront homepage"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Designed and built a full e-commerce platform, pre-launch, with an AI customer-service layer, human-in-the-loop
            escalation, and automated payment, delivery and policy workflows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {highlights.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What was built */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">What I built</h2>
          <div className="space-y-6">
            {sections.map(({ title, points }, index) => (
              <Card key={title} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">
                    <h3>
                      <span className="text-accent mr-2">{String(index + 1).padStart(2, "0")}</span>
                      {title}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-accent">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Skills demonstrated</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <Badge variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="mailto:elomd4294@gmail.com">Get in touch</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
