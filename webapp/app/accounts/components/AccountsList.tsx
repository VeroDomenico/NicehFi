import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditAccountButton } from './EditAccountButton'
import { DeleteAccountButton } from './DeleteAccountButton'

// This is a mock function. Replace it with your actual data fetching logic.
async function getAccounts() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 1, name: 'Checking Account', balance: 5000 },
    { id: 2, name: 'Savings Account', balance: 10000 },
    { id: 3, name: 'Credit Card', balance: -1500 },
  ]
}

export async function AccountsList() {
  const accounts = await getAccounts()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account Name</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts.map((account) => (
          <TableRow key={account.id}>
            <TableCell>
              <Link href={`/accounts/${account.id}/transactions`} className="hover:underline">
                {account.name}
              </Link>
            </TableCell>
            <TableCell>${account.balance.toFixed(2)}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <EditAccountButton account={account} />
                <DeleteAccountButton accountId={account.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

