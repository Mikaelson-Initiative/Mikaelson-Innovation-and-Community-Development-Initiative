"use client"
import { Google } from "@/components/icons/google"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Analytics = () => {
    const [trakingID, setTrackingID] = useState("")
    return (
        <div className="bg-white p-4 rounded-2xl border">
            <div className="flex justify-between mb-8">
                <div className="bg-red-100 p-3 flex justify-center items-center rounded-lg">
                    <Google className="w-8" />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold mb-2">Google Analytics</h3>
                    <p>Configure Google Analytics tracking</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-center">Tracking ID</h2>
                <Input
                    placeholder="G-XXXXXXXXXX or UA-XXXXXXXXX-X"
                    value={trakingID}
                    onChange={(e) => setTrackingID(e.target.value)}
                />
                <p className="text-sm">Enter your Google Analytics 4 (GA4) measurement ID or Universal Analytics tracking ID </p>
            </div>
        </div>
    )
}

export default Analytics