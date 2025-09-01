import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Terminal
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing this website and using our AI development and integration services, you agree to be bound by
              these terms and conditions. If you do not agree with any part of these terms, you should not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Services Provided</h2>
            <p>Fraddy Gil provides the following professional services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Backend and frontend development services</li>
              <li>AI assistant development and integration</li>
              <li>
                API integration services (WhatsApp API, Google APIs, Gmail API, Google Sheets API, Google Drive API)
              </li>
              <li>DevOps and cloud infrastructure management (Azure, Linux servers)</li>
              <li>Technical consulting and project management</li>
              <li>Database management and optimization (MSSQL, MySQL)</li>
              <li>Network administration and VoIP solutions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">AI Services and Limitations</h2>
            <p>
              Our AI systems are designed to assist and automate various tasks including but not limited to data
              processing, content generation, and system integration. While we strive for accuracy and reliability, AI
              responses and automated processes may not always be perfect. Users should review and validate AI-generated
              content and automated processes before implementation in production environments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">API Integration Services</h2>
            <p>We provide professional integration services for various APIs and platforms including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>WhatsApp Business API:</strong> Automated messaging and customer communication
              </li>
              <li>
                <strong>Google Workspace APIs:</strong> Gmail, Google Sheets, Google Drive integration
              </li>
              <li>
                <strong>Microsoft Azure services:</strong> Cloud infrastructure and AI services
              </li>
              <li>
                <strong>Custom API development:</strong> Tailored solutions for specific business needs
              </li>
              <li>
                <strong>Database integrations:</strong> MSSQL, MySQL, and other database systems
              </li>
            </ul>
            <p>All API integrations comply with the respective platform's terms of service and privacy policies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Processing and AI</h2>
            <p>
              By using our services, you consent to data processing necessary for AI functionality, API integrations,
              and service delivery. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing data through AI models for analysis and automation</li>
              <li>Storing necessary data for API integrations and service continuity</li>
              <li>Using anonymized data to improve AI model performance</li>
              <li>Sharing data with integrated third-party services as required for functionality</li>
            </ul>
            <p>All data processing is conducted in accordance with our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p>
              All custom code, AI models, configurations, and solutions developed as part of our services remain the
              intellectual property of the respective parties as agreed in individual contracts. Generic frameworks,
              methodologies, and non-proprietary code may be reused across projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Availability and Support</h2>
            <p>
              We strive to maintain high availability for our services and integrations. However, we cannot guarantee
              100% uptime due to factors including but not limited to third-party API limitations, network issues, and
              scheduled maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              Our services are provided "as is" without warranties of any kind. We are not liable for indirect,
              incidental, or consequential damages arising from the use of our AI systems, API integrations, or other
              services. Our liability is limited to the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Compliance and Regulations</h2>
            <p>
              Our services are designed to comply with relevant regulations including GDPR, data protection laws, and
              API provider terms of service. Clients are responsible for ensuring their use of our services complies
              with their local laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be effective
              immediately upon posting on this website. Continued use of our services after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>For questions about these terms and conditions or our services, please contact:</p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong> fraddygil[at]gmail[dot]com
              </li>
              <li>
                <strong>Website:</strong> fraddygil.com
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by applicable international laws and regulations. Any disputes
              will be resolved through appropriate legal channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
