"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Bell, MessageCircle, TrendingUp } from "lucide-react"

interface FeatureSectionProps {
  icon: React.ReactNode
  title: string
  description: string
  imageSide: "left" | "right"
  gradient: string
}

export function FeatureSection({ icon, title, description, imageSide, gradient }: FeatureSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`grid md:grid-cols-2 gap-12 items-center py-20 ${
        isVisible ? "animate-in fade-in slide-in-from-bottom-8 duration-1000" : "opacity-0"
      }`}
    >
      <div className={`${imageSide === "right" ? "md:order-1" : "md:order-2"}`}>
        <div className={`inline-block p-4 bg-gradient-to-br ${gradient} rounded-2xl mb-6`}>{icon}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className={`${imageSide === "right" ? "md:order-2" : "md:order-1"} perspective-1000`}>
        <div
          className={`relative transition-all duration-1000 ${
            isVisible
              ? "rotate-0 translate-x-0"
              : imageSide === "left"
                ? "-rotate-12 -translate-x-8"
                : "rotate-12 translate-x-8"
          }`}
        >
          <div className="relative">
            {/* Phone mockup frame */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone screen content */}
                <div className={`w-full h-full bg-gradient-to-br ${gradient} p-6 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      {icon}
                    </div>
                    <div className="text-sm font-medium">Feature Preview</div>
                  </div>
                </div>
              </div>
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl" />
            </div>

            {/* Floating decoration */}
            <div
              className={`absolute -z-10 inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-3xl rounded-full transform scale-75`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeaturesShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Powerful Features for Your Growth</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of personal development with AI-powered insights and smart reminders
          </p>
        </div>

        <FeatureSection
          icon={<Bell className="w-12 h-12 text-white" />}
          title="AI Nudges & Push Notifications"
          description="Stay on track with intelligent reminders that adapt to your schedule and habits. Our AI learns from your behavior to send perfectly timed nudges that keep you motivated without being intrusive."
          imageSide="left"
          gradient="from-purple-500 to-pink-500"
        />

        <FeatureSection
          icon={<MessageCircle className="w-12 h-12 text-white" />}
          title="Conversational AI Reflection"
          description="Engage in meaningful conversations with our AI companion. Ask questions, explore your thoughts, and receive personalized insights that help you understand yourself better and grow continuously."
          imageSide="right"
          gradient="from-cyan-500 to-blue-500"
        />

        <FeatureSection
          icon={<TrendingUp className="w-12 h-12 text-white" />}
          title="Track Your Progress"
          description="Visualize your growth journey with detailed analytics and streak tracking. Celebrate milestones, identify patterns, and stay motivated with gamification that makes personal development enjoyable."
          imageSide="left"
          gradient="from-green-500 to-teal-500"
        />
      </div>
    </section>
  )
}
