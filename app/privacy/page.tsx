import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header currentPage="privacy" />

      <main className="min-h-[calc(100vh-140px)] py-8">
        <div className="max-w-6xl mx-auto px-5">
          <section className="bg-white p-12 rounded-xl shadow-xl">
            <h1 className="text-slate-800 mb-4 text-4xl font-bold">Privacy Policy</h1>
            <p className="text-gray-600 italic mb-8">Last updated: September 24, 2025</p>

            <p className="mb-4">Nervous Hippo LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how Tetdoku handles information when you use our mobile game.</p>


            <div className="privacy-content">
              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Information We Collect</h2>
              <p className="mb-4">When you use Tetdoku, we may collect the following types of information. Certain data may also be automatically collected by third-party services we use:</p>
              <ul className="mb-4 pl-8 list-disc">
                <li className="mb-2">
                  <strong>Personal Information:</strong> When you contact us for support, we collect your name and email
                  address.
                </li>
                <li className="mb-2">
                  <strong>Game Data:</strong> We collect gameplay statistics, progress, and preferences to enhance your
                  gaming experience.
                </li>
                <li className="mb-2">
                  <strong>Device Information:</strong> We may collect information about your device, including device
                  type, operating system, and unique device identifiers.
                </li>
                <li className="mb-2">
                  <strong>Usage Data:</strong> We collect information about how you interact with our app, including
                  features used and time spent playing.
                </li>
                <li className="mb-2">
                  <strong>Advertising networks (AdMob by Google):</strong> May collect device identifiers, IP addresses, and usage data to serve and personalize ads, detect fraud, and measure performance.
                </li>
                <li className="mb-2">
                  <strong>Platform providers:</strong> Apple App Store and Google Play may collect information in accordance with their own privacy policies.
                </li>
              </ul>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="mb-4 pl-8 list-disc">
                <li className="mb-2">To provide and maintain our game service</li>
                <li className="mb-2">To respond to your support requests and communications</li>
                <li className="mb-2">To improve and optimize the game experience</li>
                <li className="mb-2">To analyze usage patterns and game performance</li>
                <li className="mb-2">To prevent fraud and ensure fair play</li>
                <li className="mb-2">To comply with legal obligations</li>
                <li className="mb-2">Displaying in-game advertisements</li>
                <li className="mb-2">Measuring ad performance and detecting fraud</li>
                <li className="mb-2">Improving ad relevance</li>
              </ul>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Third-Party Services
              </h2>
              <p className="mb-4">
                Tetdoku uses the following service that may collect and process data according to its own terms and policies:
              </p>
              <ul className="mb-4 pl-8 list-disc">
                <li className="mb-2">Google AdMob - <Link href="https://policies.google.com/privacy" target="_blank" className="text-indigo-500 hover:underline">AdMob Privacy Policy</Link></li>
              </ul>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the
                following circumstances:
              </p>
              <ul className="mb-4 pl-8 list-disc">
                <li className="mb-2">With your explicit consent</li>
                <li className="mb-2">To comply with legal requirements or court orders</li>
                <li className="mb-2">To protect our rights, property, or safety, or that of our users</li>
                <li className="mb-2">
                  With service providers who assist us in operating our app (under strict confidentiality agreements)
                </li>
              </ul>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Data Storage and Retention</h2>
              <p className="mb-4">
              We do not store any personal data on our own servers. Any data collected by third parties is retained according to their policies.
              </p>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have rights to access, correct, or delete your personal information, or to opt out of certain data processing activities. Please contact the relevant third-party service (such as Google AdMob) for requests related to their data collection.
              </p>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Children's Privacy</h2>
              <p className="mb-4">
                Tetdoku is not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from
                a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-gray-700 mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <ul className="mb-4 pl-8 list-disc">
                <li className="mb-2">
                  Through our{" "}
                  <Link href="/support" className="text-indigo-500 hover:underline">
                    Support page
                  </Link>
                </li>
                <li className="mb-2">Email: support@nervoushippo.com</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
