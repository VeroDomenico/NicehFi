import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <main className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Welcome to Your Self-Hosted Finance App
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          Take control of your finances with our secure, privacy-focused platform.
          Track expenses, manage investments, and plan for your future - all while keeping your data under your control.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Expense Tracking
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Investment Management
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Budget Planning
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Secure Self-Hosting
            </li>
          </ul>
        </div>
      </main>
      <footer className="mt-8 text-center text-gray-500 dark:text-gray-400">
        © 2023 Your Finance App. All rights reserved.
      </footer>
    </div>
  )
}

