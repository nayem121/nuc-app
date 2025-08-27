import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Globe, MessageSquare, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Youth Empowerment Center Apps",
  description:
    "Get in touch with Youth Empowerment Center for support, feedback, or inquiries about our mobile applications.",
  keywords: "contact, support, email, youth empowerment center, mobile apps",
}

export default function ContactPage() {
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
            <MessageSquare className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help! Get in touch with our team for support, feedback, or any questions about our mobile
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-cyan-50 rounded-xl">
                <Mail className="w-6 h-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-3">
                    Send us an email for any questions, bug reports, or feature requests.
                  </p>
                  <Link href="mailto:nayem121@programmer.net" className="text-cyan-600 hover:text-cyan-700 font-medium">
                    nayem121@programmer.net
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    We aim to respond to all inquiries within <strong>24-48 hours</strong>
                    during business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <Globe className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                  <p className="text-gray-600 mb-3">Visit our website for more information and resources.</p>
                  <Link href="https://nuc-app.vercel.app" className="text-green-600 hover:text-green-700 font-medium">
                    https://nuc-app.vercel.app
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">What can we help you with?</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Technical support for our apps</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Feature requests and suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Bug reports and issues</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>General inquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Partnership opportunities</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm opacity-90">
                  <strong>Pro Tip:</strong> When reporting issues, please include your device model, Android version,
                  and app version for faster resolution.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Apps</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Sundarban Courier", id: "com.nuc.sundarban" },
                { name: "PHLPost Tracking", id: "com.nuc.philpost" },
                { name: "InterParcel Tracking", id: "com.nuc.interparcel" },
                { name: "TForce Freight", id: "com.nuc.tforce" },
                { name: "ABF Freight", id: "com.azad241.ABF" },
              ].map((app, index) => (
                <Link
                  key={index}
                  href={`https://play.google.com/store/apps/details?id=${app.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all text-center"
                >
                  <h3 className="font-medium text-gray-900 mb-2">{app.name}</h3>
                  <span className="text-sm text-cyan-600 hover:text-cyan-700">View on Play Store →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              <strong>Youth Empowerment Center</strong> - Creating innovative mobile solutions for logistics,
              productivity, and user experience.
            </p>
            <p className="text-sm text-gray-500">© 2025 Youth Empowerment Center. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
