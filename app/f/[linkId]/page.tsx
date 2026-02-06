import FeedbackForm from '@/components/FeedbackForm';
import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Share Anonymous Feedback - Reflectia',
  description: 'Share your honest, anonymous feedback',
}

export default function FeedbackPage({ params }: { params: { linkId: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5F3] via-[#F0F9F7] to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">
                🧘
              </div>
              <span className="text-2xl font-bold text-gray-900">Reflectia</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Anonymous Feedback
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your feedback will be delivered anonymously. The recipient won&apos;t know it&apos;s from you.
            </p>
          </div>

          {/* Feedback Form */}
          <FeedbackForm linkId={params.linkId} />
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Powered by <span className="font-semibold text-primary">Reflectia</span> - Your personal growth companion</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-primary transition">Learn more about Reflectia</Link>
          </p>
        </div>
      </div>
    </main>
  )
}
