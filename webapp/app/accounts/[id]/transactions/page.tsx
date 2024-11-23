'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AccountPage() {
  const [account, setAccount] = useState<any>(null)
  const [transactions, setTransactions] = useState([])
  const [newTransaction, setNewTransaction] = useState({ type: '', amount: '', description: '', category: '', date: '' })
  const params = useParams()
  const { toast } = useToast()

  useEffect(() => {
    fetchAccountDetails()
    fetchTransactions()
  }, [])

  const fetchAccountDetails = async () => {
    const res = await fetch(`/api/accounts/${params.id}`)
    const data = await res.json()
    setAccount(data)
  }

  const fetchTransactions = async () => {
    const res = await fetch(`/api/accounts/${params.id}/transactions`)
    const data = await res.json()
    setTransactions(data)
  }

  const handleCreateTransaction = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/accounts/${params.id}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTransaction),
      })
      if (res.ok) {
        toast({ title: "Transaction created successfully" })
        fetchTransactions()
        fetchAccountDetails()
        setNewTransaction({ type: '', amount: '', description: '', category: '', date: '' })
      } else {
        throw new Error('Failed to create transaction')
      }
    } catch (error) {
      toast({ title: "Error creating transaction", variant: "destructive" })
    }
  }

  if (!account) return <div>Loading...</div>

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">{account.name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">${account.balance.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">{account.type}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Add Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateTransaction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="type">Transaction Type</Label>
              <Select onValueChange={(value) => setNewTransaction({ ...newTransaction, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select transaction type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DEBIT">Debit</SelectItem>
                  <SelectItem value="CREDIT">Credit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={newTransaction.description}
                onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={newTransaction.category}
                onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newTransaction.date}
                onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Add Transaction</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
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
              {transactions.map((transaction: any) => (
                <TableRow key={transaction.id}>
                  <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell className={`text-right ${transaction.type === 'CREDIT' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'CREDIT' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

