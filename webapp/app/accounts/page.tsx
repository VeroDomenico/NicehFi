import { Suspense } from 'react'
import { AccountsList } from './components/AccountsList'
import { CreateAccountButton } from './components/CreateAccountButton'

export default function AccountsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Accounts</h1>
      <CreateAccountButton />
      <Suspense fallback={<div>Loading accounts...</div>}>
        <AccountsList />
      </Suspense>
    </div>
  )
}

