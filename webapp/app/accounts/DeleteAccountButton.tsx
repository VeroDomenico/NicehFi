'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { DeleteConfirmationModal } from './DeleteConfirmationModal'
import { Trash2 } from 'lucide-react'

export function DeleteAccountButton({ accountId }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="icon" onClick={() => setIsModalOpen(true)}>
        <Trash2 className="h-4 w-4" />
      </Button>
      <DeleteConfirmationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        accountId={accountId} 
      />
    </>
  )
}

