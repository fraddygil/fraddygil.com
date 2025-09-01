"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { JSX } from "react/jsx-runtime" // Declared JSX variable

export default function TerminalPortfolio() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandHistory, setCommandHistory] = useState<Array<{ command: string; output: JSX.Element }>>([])
  const [showCursor, setShowCursor] = useState(true)
  const [currentDateTime, setCurrentDateTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval) // Fixed clear interval function
  }, [])

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
      setCurrentDateTime(now.toLocaleDateString("en-US", options))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Show welcome message on load
    setCommandHistory([
      {
        command: "welcome",
        output: (
          <div className="command-output">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-fg.png" alt="FG Logo" className="w-12 h-12 rounded-full opacity-80" />
              <div className="text-primary font-bold">Welcome to Fraddy Gil's Terminal Portfolio</div>
            </div>
            <div className="mb-2">Type 'help' to see available commands</div>
            <div className="text-muted-foreground">fraddygil@mossit:~$</div>
          </div>
        ),
      },
    ])
  }, [])

  const commands = {
    help: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Available Commands:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <span className="text-accent">about</span> - Personal information
          </div>
          <div>
            <span className="text-accent">experience</span> - Work experience
          </div>
          <div>
            <span className="text-accent">skills</span> - Technical skills
          </div>
          <div>
            <span className="text-accent">contact</span> - Contact information
          </div>
          <div>
            <span className="text-accent">languages</span> - Languages spoken
          </div>
          <div>
            <span className="text-accent">hobbies</span> - Personal interests
          </div>
          <div>
            <span className="text-accent">privacy</span> - Privacy policy link
          </div>
          <div>
            <span className="text-accent">terms</span> - Terms and conditions link
          </div>
          <div>
            <span className="text-accent">clear</span> - Clear terminal
          </div>
        </div>
      </div>
    ),
    about: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">FRADDY GIL</div>
        <div className="mb-2">Developer specializing in back end development.</div>
        <div className="mb-2">
          Experienced with all stages of the development cycle for back end and front end projects.
        </div>
        <div className="mb-2">Well-versed in programming languages including Python, JAVA, C#, CSS, MSSQL, MySQL.</div>
        <div className="mb-2">DevOps, Strong background in project management and customer relations.</div>
        <div className="text-accent">Email: fraddygil[at]gmail[dot]com</div>
        <div className="text-accent">Website: fraddygil.com</div>
      </div>
    ),
    experience: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-4">Professional Experience</div>

        <div className="mb-4">
          <div className="text-accent font-bold">CSQ Non Stop Shop – Head of NOC</div>
          <div className="text-muted-foreground mb-2">June 2021 – Present</div>
          <div className="text-sm">
            <div>• Led efforts to improve monitoring, incident management and on-call practices</div>
            <div>• Implementation of new ticket management system and procedures</div>
            <div>• Design and deployment of bot system for early alerts</div>
            <div>• Microsoft Azure Cloud Management Assistant</div>
            <div>• Quality Assurance Engineer for deployed applications</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-accent font-bold">CSQ Non Stop Shop – Back-end Developer</div>
          <div className="text-muted-foreground mb-2">January 2019 – June 2021</div>
          <div className="text-sm">
            <div>• Senior Developer maintaining and developing internal adapters</div>
            <div>• Microservices and APIs using C#, Java, Python</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-accent font-bold">CSQ Non Stop Shop – Senior Sysadmin</div>
          <div className="text-muted-foreground mb-2">June 2012 – January 2019</div>
          <div className="text-sm">
            <div>• Systems administration of Windows and Linux servers</div>
            <div>• Management Firewalls, Fortigate and Mikrotik</div>
            <div>• SIP Calls Administration using Asterisk</div>
            <div>• Quality Assurance Engineer for deployed applications</div>
          </div>
        </div>
      </div>
    ),
    skills: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-4">Areas of Knowledge and Skill Highlights</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div>• Managing Applications in Production since 2016</div>
          <div>• DevOps in Azure and Linux servers</div>
          <div>• Avid Linux User</div>
          <div>• Working with Azure since 2018</div>
          <div>• Experience leading a team of 10 people</div>
          <div>• Python Frameworks (FastApi, Flask)</div>
          <div>• C#, Java</div>
          <div>• Networking Knowledge (VPN, IPSEC, Mikrotik, Cisco)</div>
          <div>• Experience in MSSQL, MYSQL</div>
          <div>• Avid Docker User</div>
          <div>• VoIP Knowledge (Issabel, Asterisk)</div>
          <div>• Incident analysis and troubleshooting</div>
          <div>• Project management</div>
          <div>• Strong decision maker</div>
        </div>
      </div>
    ),
    contact: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Contact Information</div>
        <div className="text-accent">Email: fraddygil[at]gmail[dot]com</div>
        <div className="text-accent">Website: fraddygil.com</div>
      </div>
    ),
    languages: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Languages</div>
        <div>• English (Professional working/Fluent)</div>
        <div>• Spanish (Native)</div>
      </div>
    ),
    hobbies: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Hobbies</div>
        <div>• Reading News and Technological Articles</div>
        <div>• Movies and Series fan</div>
        <div>• Historical Research</div>
        <div>• PCB Development for Smart Home</div>
        <div>• Continuous Learning</div>
        <div>• Programming</div>
      </div>
    ),
    privacy: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Privacy Policy</div>
        <div className="mb-2">Access our complete privacy policy at:</div>
        <div className="text-accent">
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-300 transition-colors"
          >
            https://fraddygil.com/privacy
          </a>
        </div>
        <div className="text-muted-foreground text-sm mt-2">
          Click the link above to view our complete privacy policy in a new tab.
        </div>
      </div>
    ),
    terms: () => (
      <div className="command-output">
        <div className="text-primary font-bold mb-2">Terms and Conditions</div>
        <div className="mb-2">Access our complete terms and conditions at:</div>
        <div className="text-accent">
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-300 transition-colors"
          >
            https://fraddygil.com/terms
          </a>
        </div>
        <div className="text-muted-foreground text-sm mt-2">
          Click the link above to view our complete terms and conditions in a new tab.
        </div>
      </div>
    ),
    clear: () => null,
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()

    if (command === "clear") {
      setCommandHistory([])
      return
    }

    const output = commands[command as keyof typeof commands]?.() || (
      <div className="command-output">
        <div className="text-destructive">Command not found: {command}</div>
        <div>Type 'help' to see available commands</div>
      </div>
    )

    if (output) {
      setCommandHistory((prev) => [...prev, { command: cmd, output }])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentCommand)
      setCurrentCommand("")
    }
  }

  const quickCommands = ["about", "experience", "skills", "contact", "privacy", "terms", "help"]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-green-900/20"></div>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Content overlay */}
      <div className="relative z-10 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Window */}
          <div className="terminal-window">
            {/* Terminal Title Bar */}
            <div className="terminal-titlebar">
              <div className="terminal-controls">
                <div className="terminal-button terminal-close"></div>
                <div className="terminal-button terminal-minimize"></div>
                <div className="terminal-button terminal-maximize"></div>
              </div>
              <div className="terminal-title flex items-center justify-center flex-1 gap-2">
                fraddygil@mossit: ~/personal-website
              </div>
              <div className="terminal-menu">
                <div className="terminal-datetime text-xs text-green-400 mr-2">{currentDateTime}</div>
                <div className="terminal-menu-item">⚙️</div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="terminal-content">
              {/* Command History */}
              {commandHistory.map((item, index) => (
                <div key={index}>
                  <div className="command-line">
                    <span className="prompt">fraddygil@mossit:~$</span>
                    <span>{item.command}</span>
                  </div>
                  {item.output}
                </div>
              ))}

              {/* Current Command Line */}
              <div className="command-line">
                <span className="prompt">fraddygil@mossit:~$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-transparent border-none outline-none flex-1 text-foreground font-mono"
                  placeholder="Type a command..."
                  autoFocus
                />
                {showCursor && <span className="cursor"></span>}
              </div>

              {/* Quick Commands */}
              <div className="mt-8 pt-4 border-t border-border/30">
                <div className="text-muted-foreground/60 text-xs mb-2">Quick commands:</div>
                <div className="flex flex-wrap gap-2 justify-start">
                  {quickCommands.map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleCommand(cmd)}
                      className="command-button text-xs opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
