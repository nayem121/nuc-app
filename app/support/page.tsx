import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Download, HelpCircle, Shield, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Support - Youth Empowerment Center Apps",
  description:
    "Get help and support for all NUC mobile applications including Sundarban, PHLPost, InterParcel, TForce, and ABF tracking apps.",
  keywords: "support, help, FAQ, mobile apps, tracking, courier, logistics",
}

export default function SupportPage() {
  const apps = [
    { name: "Sundarban Courier Tracking", id: "com.nuc.sundarban" },
    { name: "PHLPost Tracking", id: "com.nuc.philpost" },
    { name: "InterParcel Tracking", id: "com.nuc.interparcel" },
    { name: "TForce Freight Tracking", id: "com.nuc.tforce" },
    { name: "ABF Freight Tracking", id: "com.azad241.ABF" },
  ]

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

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to the official support page for Youth Empowerment Center App. Find help, resources, and contact
              information for all our Android apps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <Download className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">5+ Apps</h3>
              <p className="text-gray-600 text-sm">Available on Play Store</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">24-48 Hours</h3>
              <p className="text-gray-600 text-sm">Response Time</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-gray-600 text-sm">Quick & Friendly</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-cyan-600" />
              Our Apps
            </h2>
            <div className="grid gap-4">
              {apps.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{app.name}</span>
                  <Link
                    href={`https://play.google.com/store/apps/details?id=${app.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors text-sm"
                  >
                    Download
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-600" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I download your apps?</h3>
                <p className="text-gray-600">
                  You can download our apps directly from Google Play Store using the links above. All apps are free to
                  download and use.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I report a problem with an app?</h3>
                <p className="text-gray-600">
                  Open the app and go to the Support/Contact section, describe the issue in detail, or send an email to
                  our support team at nayem121@programmer.net.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I request new features?</h3>
                <p className="text-gray-600">
                  We love feedback! Please send feature requests to nayem121@programmer.net. Your suggestions help us
                  improve our apps continuously.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How is my data handled?</h3>
                <p className="text-gray-600">
                  We respect your privacy. Please see our Privacy Policy to understand how we collect and use data.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Troubleshooting Tips</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    • <strong>App not opening:</strong> Ensure your device has the latest Android update. Restart your
                    device.
                  </li>
                  <li>
                    • <strong>Tracking not working:</strong> Check your internet connection and ensure correct details
                    are entered.
                  </li>
                  <li>
                    • <strong>Notifications not received:</strong> Allow notifications in device settings and app
                    permissions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 text-white text-center">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Need More Help?</h2>
            <p className="mb-4 opacity-90">If you cannot find a solution in the FAQ, reach out to us directly.</p>
            <Link
              href="mailto:nayem121@programmer.net"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              nayem121@programmer.net
            </Link>
            <p className="text-sm mt-4 opacity-75">We aim to respond within 24–48 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
