import {
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup,
} from 'cmdk'
import React from 'react'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* ✅ Accessible Title */}
      <CommandGroup heading="Command Menu">
        <CommandInput placeholder="Find a meeting or agent" />
        <CommandList>
          <CommandItem onSelect={() => setOpen(false)}>
            Item 1
          </CommandItem>
        </CommandList>
      </CommandGroup>
    </CommandDialog>
  )
}

export default DashboardCommand
