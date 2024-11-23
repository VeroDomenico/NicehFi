import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TransactionsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <div className="flex justify-between items-center">
        <Input className="max-w-sm" placeholder="Search transactions..." />
        <Button>Add Transaction</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2023-06-01</TableCell>
            <TableCell>Grocery Store</TableCell>
            <TableCell>Food</TableCell>
            <TableCell className="text-right">-$85.32</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-06-02</TableCell>
            <TableCell>Salary Deposit</TableCell>
            <TableCell>Income</TableCell>
            <TableCell className="text-right text-green-600">+$3000.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023-06-03</TableCell>
            <TableCell>Electric Bill</TableCell>
            <TableCell>Utilities</TableCell>
            <TableCell className="text-right">-$120.50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

