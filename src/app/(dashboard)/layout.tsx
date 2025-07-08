import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar"


interface Props {
  children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex h-screen flex-col">
        {children}
     </main>
    </SidebarProvider>
  )
}

export default layout