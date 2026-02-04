"use client"

import { Input } from "@/components/ui/input"
import { InfoIcon, Shield } from "lucide-react"
import { useState } from "react"

const Security = () => {
    const [timeoutMinutes, setTimeoutMinutes] = useState("60")
    return (
        <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
                    <Shield className="w-6 h-6" />
                </div>
                <div className="flex-1 ml-4">
                    <h2 className="font-bold text-lg dark:text-slate-100">Security</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Authentication and security settings</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-slate-300">Session Timeout (minutes)</label>
                    <Input
                        type="number"
                        placeholder="60"
                        value={timeoutMinutes}
                        onChange={(e) => setTimeoutMinutes(e.target.value)}
                        className="dark:bg-slate-950 dark:border-slate-800"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-500">Auto-logout after this many minutes of inactivity</p>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 items-center">
                        <input
                            type="checkbox"
                            id="twoFactor"
                            name="Two factor"
                            className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950"
                        />
                        <label htmlFor="twoFactor" className="cursor-pointer text-sm font-medium dark:text-slate-300">Require two-factor authentication</label>
                    </div>
                    <p className="flex items-center ml-7 text-xs text-amber-600 dark:text-amber-500 mt-2">
                        <InfoIcon className="w-3 h-3 mr-1" />
                        Coming soon - this feature is not yet implemented
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Security