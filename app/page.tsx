import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"


export default function HomePage() {
  return (
    <>
      <Header currentPage="home" />

      <main className="min-h-[calc(100vh-140px)] py-8">
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-16 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto px-5">
            <h1 className="text-6xl font-bold mb-4">Tetdoku</h1>
            <p className="text-xl mb-8 opacity-90">
              The ultimate puzzle experience combining the best of puzzle blocks and Sudoku. Challenge your mind with this
              innovative mobile game that tests both your spatial reasoning and logical thinking skills.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a
                href="https://apps.apple.com/us/app/tetdoku/id6748969433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img 
                  src="/appStore.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nervoushippo.tetdoku&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform"
              >
                <img 
                  src="/googlePlay.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/support"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
              >
                Get Support
              </Link>
              <Link
                href="/privacy"
                className="inline-block px-6 py-3 bg-white/20 text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/30 hover:-translate-y-0.5 transition-all"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>


        {/* App Showcase */}
        <section className="py-20 lg:py-32 wood-texture">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Why You'll Love It</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Take a peek inside and discover how fun it is to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-muted flex items-center justify-center relative">
                    <img
                      src="/1_intro.png"
                      alt="fun block puzzle game with power-ups"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-center">Block puzzle game with power-ups</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-muted flex items-center justify-center relative">
                    <img
                      src="/2_powerup.png"
                      alt="power-ups"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-center">Fun power-ups to help you along the way</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-muted flex items-center justify-center relative">
                    <img
                      src="/3_combopoints.png"
                      alt="Score more points with combos!"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-center">Score more points with combos!</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-center text-4xl font-bold mb-12 text-slate-800">Game Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">🧩 Unique Gameplay</h3>
                <p>Experience the perfect blend of puzzle block placement and Sudoku logic puzzles.</p>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">📱 Mobile Optimized</h3>
                <p>Designed specifically for mobile devices with intuitive touch controls.</p>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">🎯 Progressive Difficulty</h3>
                <p>Start easy and work your way up to mind-bending challenges.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 wood-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I download the app?</h3>
                <p className="text-sm text-muted-foreground">
                  Just click the App Store or Google Play buttons at the top of the page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is the app free?</h3>
                <p className="text-sm text-muted-foreground">Yes! The app is free to download and play.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What devices are supported?</h3>
                <p className="text-sm text-muted-foreground">
                  The app works on most iPhones, iPads, and Android smartphones/tablets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I get support if I have an issue?</h3>
                <p className="text-sm text-muted-foreground">You can reach us by clicking the Support button at the top of the page, or emailing us at support@nervoushippo.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
