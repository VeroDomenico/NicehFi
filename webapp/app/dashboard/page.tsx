'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PieChartIcon as ChartPieIcon, WalletIcon, ShieldCheckIcon } from 'lucide-react'

export default function DashboardPage() {



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Finance App Dashboard</h1>
          <Button variant="outline" >Logout</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <ShieldCheckIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">Secure Self-Hosted Platform</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Your data stays private and under your control</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="/wealth-management" passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ChartPieIcon className="h-6 w-6 mr-2" />
                    Wealth Management
                  </CardTitle>
                  <CardDescription>Manage your investments and long-term financial goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    <li>Portfolio tracking</li>
                    <li>Investment analysis</li>
                    <li>Retirement planning</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link href="/personal-finance" passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <WalletIcon className="h-6 w-6 mr-2" />
                    Personal Finance
                  </CardTitle>
                  <CardDescription>Track daily expenses and manage your budget</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                    <li>Expense tracking</li>
                    <li>Budget creation</li>
                    <li>Bill reminders</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Your secure, self-hosted finance management solution. All data is stored locally.
        </div>
      </footer>
    </div>
  )
}

