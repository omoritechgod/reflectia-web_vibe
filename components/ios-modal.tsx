"use client"
import { X } from "lucide-react"

interface IosModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IosModal({ isOpen, onClose }: IosModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <span className="text-4xl">🍎</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS Version Coming Soon</h3>

          <p className="text-gray-600 mb-6">
            The iOS version is not currently available. We're working hard to bring Reflectia to the App Store soon!
          </p>

          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-[#4DD0C1] to-[#3DBDAE] text-white font-semibold rounded-xl hover:shadow-lg transition transform hover:scale-105"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
