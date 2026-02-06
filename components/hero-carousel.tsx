"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Track Your Daily Reflections",
    description: "Build character and track your insights with AI-powered journaling",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Nudges & Reminders",
    description: "Smart push notifications that keep you on track with your growth goals",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Conversational AI Reflection",
    description: "Have meaningful conversations with AI to deepen your self-awareness",
    gradient: "from-green-500 to-teal-500",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className={`bg-gradient-to-r ${slide.gradient} p-12 rounded-2xl text-white`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
              <p className="text-lg md:text-xl opacity-90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-[#4DD0C1]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
