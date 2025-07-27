
import { CommandResponsiveDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import React from 'react'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Find a meeting or agent..."
      />
      <CommandList> 
        <CommandItem>
          Item 1
        </CommandItem>
         <CommandItem>
          Item 2
        </CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  )
}

export default DashboardCommand
