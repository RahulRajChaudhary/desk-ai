
import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import React from 'react'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Find a meeting or agent..."
      />
      <CommandList> 
        <CommandItem>
          Item 1
        </CommandItem>
      </CommandList>
    </CommandDialog>
  )
}

export default DashboardCommand
