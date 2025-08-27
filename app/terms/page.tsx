import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, FileText, Globe, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions - Youth Empowerment Center Apps",
  description:
    "Terms and conditions for Youth Empowerment Center mobile applications including usage policies and legal information.",
  keywords: "terms, conditions, legal, policy, mobile apps, youth empowerment center",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> August 26, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Welcome to <strong>Youth Empowerment Center App</strong> ("we", "our", or "us"). By accessing our
                website <strong>https://nuc-app.vercel.app</strong> or using our Android apps available on the Google
                Play Store, you agree to comply with and be bound by the following Terms & Conditions.
              </p>
              <p className="text-gray-700 font-semibold">
                Our apps include: Sundarban Courier Tracking, PHLPost Tracking, InterParcel Tracking, TForce Freight
                Tracking, and ABF Freight Tracking.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cyan-600" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-4">By accessing our website or apps, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Abide by these Terms & Conditions</li>
                  <li>Follow all applicable laws and regulations</li>
                  <li>Provide accurate information when using our services</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you do not agree to these terms, please do not use our website or apps.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    All content, logos, app designs, text, images, and software on our website or apps are{" "}
                    <strong>owned by Youth Empowerment Center</strong>.
                  </li>
                  <li>
                    You may <strong>not copy, reproduce, distribute, or create derivative works</strong> without prior
                    written permission.
                  </li>
                  <li>
                    Google Play Store and its logos are <strong>trademarks of Google LLC</strong>.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Apps and Website</h2>
                <p className="text-gray-700 mb-4">
                  Our apps are intended for personal or business use in accordance with their described functionality.
                </p>
                <p className="text-gray-700 mb-2">
                  You agree <strong>not to misuse</strong> the apps, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Attempting to hack, reverse engineer, or modify the apps</li>
                  <li>Uploading malicious content</li>
                  <li>Interfering with other users' experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Some features may require creating an account.</li>
                  <li>
                    You are responsible for maintaining <strong>the confidentiality of your account credentials</strong>
                    .
                  </li>
                  <li>You must notify us immediately if you suspect unauthorized use of your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Our website or apps may contain links to third-party websites or services (e.g., Google Play Store).
                  </li>
                  <li>
                    We <strong>do not control and are not responsible</strong> for third-party content, policies, or
                    actions.
                  </li>
                  <li>
                    Users are encouraged to review the privacy policies and terms of third-party services before
                    interacting with them.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Youth Empowerment Center provides services <strong>"as is"</strong> and does not guarantee
                    uninterrupted or error-free operation.
                  </li>
                  <li>
                    We are <strong>not liable for any direct, indirect, incidental, or consequential damages</strong>{" "}
                    arising from your use of our website or apps.
                  </li>
                  <li>By using our apps, you accept these risks.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Information provided on our website and apps is for{" "}
                    <strong>general informational purposes only</strong>.
                  </li>
                  <li>
                    We reserve the right to <strong>update, modify, or remove content</strong> at any time without
                    notice.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    We may suspend or terminate access to the website or apps <strong>without notice</strong> for
                    violation of these Terms & Conditions.
                  </li>
                  <li>Users can also stop using our services at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms & Conditions</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We may revise these Terms & Conditions periodically.</li>
                  <li>
                    The <strong>effective date</strong> will be updated at the top of this page.
                  </li>
                  <li>
                    Continued use of our website or apps constitutes <strong>acceptance of the revised terms</strong>.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-cyan-600" />
                  10. Governing Law
                </h2>
                <p className="text-gray-700">
                  These Terms & Conditions are governed by the{" "}
                  <strong>laws applicable in USA, UK, Australia, Canada, Philippines and Bangladesh</strong>, without
                  regard to conflict of law principles.
                </p>
              </section>

              <section className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6" />
                  11. Contact Information
                </h2>
                <p className="mb-4">
                  If you have any questions or concerns regarding these Terms & Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Website:</strong> https://nuc-app.vercel.app
                  </p>
                  <p>
                    <strong>Email:</strong> nayem121@programmer.net
                  </p>
                </div>
              </section>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>© 2025 Youth Empowerment Center. All rights reserved.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
