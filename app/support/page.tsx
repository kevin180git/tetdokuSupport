"use client"

import { useState } from "react"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    // Basic validation
    const consent = formData.get("consent")
    if (!consent) {
      alert("Please agree to the consent checkbox to proceed.")
      return
    }

    setIsSubmitting(true)
    setShowError(false)

    try {
      const response = await fetch("https://formspree.io/f/xqalnwan", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowConfirmation(true)
        form.reset()

        // Reset after delay
        setTimeout(() => {
          setShowConfirmation(false)
        }, 10000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setShowError(true)

      // Hide error after delay
      setTimeout(() => {
        setShowError(false)
      }, 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header currentPage="support" />

      <main className="min-h-[calc(100vh-140px)] py-8">
        <div className="max-w-6xl mx-auto px-5">
          <section className="bg-white p-12 rounded-xl shadow-xl mb-12">
            <h1 className="text-slate-800 mb-4 text-4xl font-bold">Support</h1>
            <p className="mb-8">
              Need help with Tetdoku? We're here to assist you! Please fill out the form below and we'll get back to you
              as soon as possible.
            </p>

            {!showConfirmation && (
              <form onSubmit={handleSubmit} className="max-w-2xl mb-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please describe your issue or question in detail..."
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-2 cursor-pointer text-sm leading-relaxed">
                    <input type="checkbox" id="consent" name="consent" required className="w-auto m-0" />
                    <span>I agree to the processing of my information for support purposes *</span>
                  </label>
                </div>

                {/* Hidden fields for Formspree */}
                <input type="hidden" name="_subject" value="Tetdoku Support Request" />
                <input type="hidden" name="_next" value="thank-you" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}

            {showConfirmation && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center mt-8">
                <h3 className="text-green-700 mb-2 font-semibold">✅ Message Sent Successfully!</h3>
                <p className="text-green-800">
                  Thank you for contacting us. We've received your message and will respond within 24-48 hours.
                </p>
              </div>
            )}

            {showError && (
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8 text-center mt-8">
                <h3 className="text-red-700 mb-2 font-semibold">❌ Message Failed to Send</h3>
                <p className="text-red-800">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}
          </section>

          <section className="bg-white p-12 rounded-xl shadow-xl">
            <h2 className="text-slate-800 mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-gray-700 mb-2 text-xl font-semibold">How do I play Tetdoku?</h3>
              <p>
                Tetdoku combines puzzle block placement with Sudoku logic. Place the provided blocks to complete
                rows, columns, and 3x3 grids to score points! Use power-ups to help you out in a pinch. Get more power-ups every 1000 points!
              </p>
            </div>
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-gray-700 mb-2 text-xl font-semibold">Is Tetdoku free to play?</h3>
              <p>
                Yes! Tetdoku is free to download and play with ads that support the game.
              </p>
            </div>
            <div className="mb-0 pb-0">
              <h3 className="text-gray-700 mb-2 text-xl font-semibold">What devices are supported?</h3>
              <p>
                Tetdoku is available for iOS and Android devices. Check the App Store or Google Play Store for specific
                compatibility requirements.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
