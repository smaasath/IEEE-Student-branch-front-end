import DashboardLayout from "@/components/layouts/dashboardLayout/dashboardLayout"


export default function Page({ params }) {
  return (
   <DashboardLayout>

<div>Excom Seperate Page: {params.slug}</div>
   </DashboardLayout>
  )
  
  
  
}