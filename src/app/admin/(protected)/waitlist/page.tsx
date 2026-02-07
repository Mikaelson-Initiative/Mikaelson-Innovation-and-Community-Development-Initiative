"use client"

import React from "react"
import WaitlistDasboardStats from "@/features/admin/components/WaitlistDasboardStats"
import WaitlistNavbar from "@/features/admin/components/WaitlistNavbar"
import WaitlistTable from "@/features/admin/components/WaitlistTable"


type WaitlistEntry = {
  id: string
  name: string
  email: string
  interest: 'Habits' | 'Community' | 'Challenges' | 'Analytics' | 'All'
  referral?: string
  newsletter: boolean
  joined: string
  status: 'pending' | 'contacted' | 'invited'
}

const Page = () => {
  const [entries, setEntries] = React.useState<WaitlistEntry[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', interest: 'Habits', referral: 'Twitter', newsletter: true, joined: '2025-10-15', status: 'pending' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', interest: 'Community', referral: 'LinkedIn', newsletter: false, joined: '2025-10-13', status: 'contacted' },
    { id: '3', name: 'Alex Johnson', email: 'alex@example.com', interest: 'Challenges', referral: 'Friend', newsletter: true, joined: '2025-10-12', status: 'invited' },
    { id: '4', name: 'Maria Garcia', email: 'maria@example.com', interest: 'Analytics', referral: 'Blog', newsletter: false, joined: '2025-10-10', status: 'pending' },
    { id: '5', name: 'Chris Lee', email: 'chris@example.com', interest: 'All', referral: 'Website', newsletter: true, joined: '2025-10-09', status: 'contacted' },
    { id: '6', name: 'Emily Davis', email: 'emily@example.com', interest: 'Habits', referral: 'Instagram', newsletter: false, joined: '2025-10-08', status: 'pending' },
    { id: '7', name: 'Michael Brown', email: 'michael@example.com', interest:'Community' , referral:'Friend' , newsletter:true , joined:'2025-10-07' , status:'invited'},               
    { id: '8', name: 'Sarah Wilson', email: 'sarah@example.com', interest: 'Challenges', referral: 'Twitter', newsletter: false, joined: '2025-10-06', status: 'pending' },
    { id: '9', name: 'David Martinez', email: 'david@example.com', interest: 'Analytics', referral: 'LinkedIn', newsletter: true, joined: '2025-10-05', status: 'contacted' },
    { id: '10', name: 'Olivia Taylor', email: 'olivia@example.com', interest: 'All', referral: 'Website', newsletter: true, joined: '2025-10-04', status: 'pending' },
    { id: '11', name: 'Liam Anderson', email: 'liam@example.com', interest: 'Habits', referral: 'Blog', newsletter: false, joined: '2025-10-03', status: 'invited' },
    { id: '12', name: 'Sophia Thomas', email: 'sophia@example.com', interest: 'Community', referral: 'Friend', newsletter: true, joined: '2025-10-02', status: 'contacted' },
  ])

  return (
    <div>
      <WaitlistNavbar onExportAll={() => {
        const headers = ['id','name','email','interest','referral','newsletter','joined','status']
        const escape = (val: unknown) => {
          const s = String(val ?? '')
          const escaped = s.replace(/"/g, '""')
          return /[",\n]/.test(s) ? `"${escaped}"` : escaped
        }
        const rows = [headers.join(',')]
        for (const e of entries) {
          rows.push([
            escape(e.id),
            escape(e.name),
            escape(e.email),
            escape(e.interest),
            escape(e.referral ?? ''),
            escape(e.newsletter ? 'yes' : 'no'),
            escape(e.joined),
            escape(e.status),
          ].join(','))
        }
        const csv = rows.join('\n')
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `waitlist-all-${new Date().toISOString().slice(0,10)}.csv`
        a.click()
        URL.revokeObjectURL(url)
      }} />
      <main className="py-12 px-8 bg-brand-bg-gray dark:bg-black/20 dark:text-white">
        <WaitlistDasboardStats entries={entries} />
        <WaitlistTable entries={entries} setEntries={setEntries} />
      </main>
    </div>
  )
}

export default Page