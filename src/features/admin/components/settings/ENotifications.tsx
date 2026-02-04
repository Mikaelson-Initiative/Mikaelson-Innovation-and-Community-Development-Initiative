"use client"
import { Google } from "@/components/icons/google"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

const ENotifications = () => {
    const [notificationEmail, setNotificationEmail] = useState("")
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 ml-4">
                    <h2 className="font-bold text-lg dark:text-slate-100">Email Notifications</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Manage alerts and reports</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="Weekly Reports" id="weeklyReports" className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950" />
                        <label htmlFor="weeklyReports" className="text-sm font-medium dark:text-slate-300 cursor-pointer">Receive weekly digest reports</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="New User Alerts" id="newUserAlerts" className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950" />
                        <label htmlFor="newUserAlerts" className="text-sm font-medium dark:text-slate-300 cursor-pointer">Alert on new user registration</label>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-slate-300">Notification Email</label>
                    <Input
                        type="email"
                        placeholder="admin@example.com"
                        value={notificationEmail}
                        onChange={(e) => setNotificationEmail(e.target.value)}
                        className="dark:bg-slate-950 dark:border-slate-800"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-500">Destination for system alerts</p>
                </div>
            </div>
        </div>
    )
}

export default ENotifications