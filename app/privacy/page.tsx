import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Terminal
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <p>
              Fraddy Gil, developer and technology consultant, is committed to protecting the privacy of users and
              complying with applicable regulations, including the General Data Protection Regulation (GDPR) and other
              international privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
            <p>To improve our services and AI development solutions, we collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number (when provided)</li>
              <li>Usage data and interaction patterns with AI systems</li>
              <li>Technical data for API integrations (WhatsApp API, Google APIs, etc.)</li>
            </ul>
            <p>Data collection requires explicit user consent, granted by accepting our terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Use of Data</h2>
            <p>Collected data is used exclusively for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improving and optimizing AI assistant performance</li>
              <li>Providing technical support and consulting services</li>
              <li>Developing custom AI solutions and integrations</li>
              <li>
                API integration services (WhatsApp API, Google APIs, Gmail API, Google Sheets API, Google Drive API)
              </li>
              <li>DevOps and cloud infrastructure management</li>
            </ul>
            <p>We do not share or sell data to third parties under any circumstances.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Storage and Security</h2>
            <p>
              Collected data is stored in secure databases with industry-standard encryption. We implement technical and
              organizational measures to protect against unauthorized access, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data encryption in transit and at rest</li>
              <li>Strict access controls and authentication</li>
              <li>Continuous monitoring of our systems</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">AI and Machine Learning</h2>
            <p>
              Our AI systems process data to provide intelligent responses, automation, and API integrations. All AI
              processing complies with privacy regulations and follows data minimization principles. AI models are
              trained and operated with privacy-by-design principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">User Rights</h2>
            <p>In accordance with GDPR and other privacy laws, users have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access:</strong> Request access to collected data
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of incorrect or incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of personal data
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of data in structured format
              </li>
              <li>
                <strong>Objection:</strong> Object to data processing for specific purposes
              </li>
            </ul>
            <p>To exercise these rights, contact us at: fraddygil[at]gmail[dot]com</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">API Integration and Third-Party Services</h2>
            <p>
              Our services integrate with various APIs and third-party services. Data sharing with these services is
              limited to what is necessary for functionality and complies with their respective privacy policies and our
              contractual agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy. Users will be notified of any changes through our
              website or direct communication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p>For questions related to this policy or data privacy, contact us at:</p>
            <ul className="list-none space-y-2">
              <li>
                <strong>Email:</strong> fraddygil[at]gmail[dot]com
              </li>
              <li>
                <strong>Website:</strong> fraddygil.com
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
