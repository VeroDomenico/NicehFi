'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { AccountModal } from './AccountModal'

export function CreateAccountButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="mb-4">Create New Account</Button>
      <AccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

