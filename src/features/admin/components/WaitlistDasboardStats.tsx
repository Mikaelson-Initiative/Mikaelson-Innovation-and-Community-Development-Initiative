import { Calendar, ChartLine, Mail, Users } from 'lucide-react'

type WaitlistEntry = {
  id: string
  name: string
  email: string
  interest: 'habits' | 'community' | 'challenges' | 'analytics' | 'all'
  referral?: string
  newsletter: boolean
  joined: string // ISO date string
  status: 'pending' | 'contacted' | 'invited'
}

type Props = {
  entries: WaitlistEntry[]
}

const WaitlistDasboardStats: React.FC<Props> = ({ entries }) => {
  const total = entries.length

  const today = new Date()
  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  const newToday = entries.filter((e) => {
    const d = new Date(e.joined)
    return isSameDay(d, today)
  }).length

  const weekAgo = new Date()
  weekAgo.setDate(today.getDate() - 7)
  const thisWeek = entries.filter((e) => {
    const d = new Date(e.joined)
    return d >= weekAgo && d <= today
  }).length

  const newsletterSubs = entries.filter((e) => e.newsletter).length

  return (
    <div className='text-black dark:text-white'>
      <h1 className='text-4xl font-semibold mb-2'>Waitlist Entries</h1>
      <p className='mb-4'>Manage and track all waitlist signups</p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
        <div className='bg-white dark:bg-black/60 border border-[1px solid #e9ecef] dark:border-neutral-800 rounded-xl p-6 flex gap-4'>
          <div className='w-14 aspect-square bg-teal-200/50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 flex justify-center items-center rounded-xl'><Users /></div>
          <div className='flex flex-1 items-center flex-col'>
            <div>Total Signups</div>
            <div className='text-2xl font-semibold'>{total}</div>
          </div>
        </div>
        <div className='bg-white dark:bg-black/60 border border-[1px solid #e9ecef] dark:border-neutral-800 rounded-xl p-6 flex gap-4'>
          <div className='w-14 aspect-square bg-blue-200/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex justify-center items-center rounded-xl'>
            <Calendar />
          </div>
          <div className='flex flex-1 items-center flex-col'>
            <div>New Today</div>
            <div className='text-2xl font-semibold'>{newToday}</div>
          </div>
        </div>
        <div className='bg-white dark:bg-black/60 border border-[1px solid #e9ecef] dark:border-neutral-800 rounded-xl p-6 flex gap-4'>
          <div className='w-14 aspect-square bg-purple-200/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 flex justify-center items-center rounded-xl'>
            <ChartLine />
          </div>
          <div className='flex flex-1 items-center flex-col'>
            <div>This Week</div>
            <div className='text-2xl font-semibold'>{thisWeek}</div>
          </div>
        </div>
        <div className='bg-white dark:bg-black/60 border border-[1px solid #e9ecef] dark:border-neutral-800 rounded-xl p-6 flex gap-4'>
          <div className='w-14 aspect-square bg-green-200/50 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex justify-center items-center rounded-xl'>
            <Mail />
          </div>
          <div className='flex flex-1 items-center flex-col'>
            <div>Newsletter Subs</div>
            <div className='text-2xl font-semibold'>{newsletterSubs}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitlistDasboardStats