'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { AccountModal } from './AccountModal'
import { Pencil } from 'lucide-react'

export function EditAccountButton({ account }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="icon" onClick={() => setIsModalOpen(true)}>
        <Pencil className="h-4 w-4" />
      </Button>
      <AccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} account={account} />
    </>
  )
}

