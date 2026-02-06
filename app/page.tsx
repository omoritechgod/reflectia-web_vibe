"use client"
import Image from "next/image"
import { useState } from "react"
import { Sparkles, Zap, Heart, Download, Menu, X } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturesShowcase } from "@/components/feature-section"
import { IosModal } from "@/components/ios-modal"

export default function Home() {
  const [isIosModalOpen, setIsIosModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/favicon-colored.png" alt="Reflectia Logo" width={40} height={40} className="w-10 h-10" />
              <span className="font-bold"> Reflectia</span>
              {/* <Image src="/logo-colored.png" alt="Reflectia" width={120} height={40} className="h-8 w-auto" /> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                About
              </a>
              <a href="#download" className="text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                Download
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 animate-in slide-in-from-top duration-200">
              <a href="#features" className="block text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                Features
              </a>
              <a href="#about" className="block text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                About
              </a>
              <a href="#download" className="block text-gray-600 hover:text-[#4DD0C1] transition font-medium">
                Download
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 animate-float">
              <Image
                src="/logo-colored.png"
                alt="Reflectia Icon"
                width={96}
                height={96}
                className="w-40 h-40 drop-shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              Find Your Inner <span className="text-gradient">Balance</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              Build character, track your daily insights, and receive personalized AI nudges to become your best self
            </p>

            <HeroCarousel />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <a
                href="#download"
                className="group px-8 py-4 bg-gradient-to-r from-[#4DD0C1] to-[#3DBDAE] hover:from-[#3DBDAE] hover:to-[#2CA89A] text-white font-semibold rounded-full transition shadow-lg hover:shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download App
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white hover:bg-gray-50 text-[#4DD0C1] font-semibold rounded-full transition shadow-lg border-2 border-[#4DD0C1] inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Features Showcase */}
      <FeaturesShowcase />

      {/* Features Grid Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Grow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Reflections</h3>
              <p className="text-gray-600 leading-relaxed">
                Capture your thoughts, track your mood, and build a personal growth journal that evolves with you.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anonymous Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate unique links to receive honest, anonymous feedback from peers that helps you grow.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Streak Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay motivated with daily streaks, achievement badges, and detailed stats about your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Your Personal Growth Companion</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Reflectia combines self-reflection, peer feedback, and gamification to help you become the best version of
            yourself. Track your progress, celebrate milestones, and build lasting habits.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-[#4DD0C1] to-[#3DBDAE] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Private & Secure</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                48h
              </div>
              <div className="text-gray-600 font-medium">Feedback Links</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-600 font-medium">Growth Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4DD0C1] to-[#3DBDAE] text-white relative overflow-hidden"
      >
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-delayed" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Start Your Journey Today</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Download Reflectia and take the first step toward meaningful personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/apps/internaltest/4701730610342132068"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-[#4DD0C1] font-semibold rounded-full hover:bg-gray-100 transition shadow-2xl inline-flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">GET IT ON</div>
                <div className="font-bold">Google Play</div>
              </div>
            </a>

            <button
              onClick={() => setIsIosModalOpen(true)}
              className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition shadow-2xl inline-flex items-center justify-center gap-3 border-2 border-white transform hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                {/* <Image src="/favicon-white.png" alt="Reflectia Logo" width={40} height={40} className="w-10 h-10" /> */}
                <Image src="/logo-white.png" alt="Reflectia" width={120} height={40} className="h-12 w-auto" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your personal growth companion. Build character, track insights, and become your best self.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-white transition">
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Reflectia. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* iOS Modal */}
      <IosModal isOpen={isIosModalOpen} onClose={() => setIsIosModalOpen(false)} />
    </main>
  )
}
