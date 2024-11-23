'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



export function AccountModal({ isOpen, onClose, account = null }) {
  interface account {
    accountID: number
    name: string
    balance: number
    type: string
  }

  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [accountType, setAccountType] = useState('')

  useEffect(() => {
    if (account) {
      setName(account.name)
      setBalance(account.balance.toString())
      setAccountType(account.type || '')
    } else {
      setName('')
      setBalance('')
      setAccountType('')
    }
  }, [account])

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    // Here you would typically make an API call to create or update the account
    console.log('Submitting account:', { name, balance: parseFloat(balance), type: accountType })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{account ? 'Edit Account' : 'Create New Account'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="balance" className="text-right">
                Balance
              </Label>
              <Input
                id="balance"
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accountType" className="text-right">
                Account Type
              </Label>
              <Select value={accountType} onValueChange={setAccountType}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Checking</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                  <SelectItem value="credit">Credit Card</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">{account ? 'Update' : 'Create'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

