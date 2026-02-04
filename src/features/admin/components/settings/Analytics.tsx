"use client"
import { Google } from "@/components/icons/google"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Analytics = () => {
    const [trackingID, setTrackingID] = useState("")
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
                    <Google className="w-6 h-6" />
                </div>
                <div className="flex-1 ml-4">
                    <h2 className="font-bold text-lg dark:text-slate-100">Google Analytics</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Configure tracking settings</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-slate-300">Tracking ID</label>
                    <Input
                        placeholder="G-XXXXXXXXXX or UA-XXXXXXXXX-X"
                        value={trackingID}
                        onChange={(e) => setTrackingID(e.target.value)}
                        className="dark:bg-slate-950 dark:border-slate-800"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-500">Enter your Google Analytics 4 (GA4) or UA ID</p>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="Enable Tracking" id="enableTracking" className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950" />
                        <label htmlFor="enableTracking" className="text-sm font-medium dark:text-slate-300 cursor-pointer">Enable Google Analytics tracking</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="Anonymize IP" id="anonymizeIP" className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950" />
                        <label htmlFor="anonymizeIP" className="text-sm font-medium dark:text-slate-300 cursor-pointer">Anonymize IP addresses (GDPR)</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics