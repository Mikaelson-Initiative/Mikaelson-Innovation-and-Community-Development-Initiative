"use client"
import { Input } from '@/components/ui/input';
import { Plug } from 'lucide-react'
import React, { useState } from 'react'

const Integration = () => {
    const [slackHook, setSlackHook] = useState("");
    const [discordHook, setDiscordHook] = useState("");
    return (
        <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
                    <Plug className="w-6 h-6" />
                </div>

                <div className="flex-1 ml-4">
                    <h2 className="font-bold text-lg dark:text-slate-100">Integrations</h2>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Third-party connections</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <h3 className='text-sm font-medium dark:text-slate-300'>Slack Webhook URL</h3>
                    <Input
                        type='url'
                        placeholder='https://hooks.slack.com/services/...'
                        value={slackHook}
                        onChange={(e) => setSlackHook(e.target.value)}
                        className="dark:bg-slate-950 dark:border-slate-800"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-500">Receive notifications in Slack</p>
                </div>
                <div className="space-y-2">
                    <h3 className='text-sm font-medium dark:text-slate-300'>Discord Webhook URL</h3>
                    <Input
                        type='url'
                        placeholder='https://discord.com/api/webhooks/...'
                        value={discordHook}
                        onChange={(e) => setDiscordHook(e.target.value)}
                        className="dark:bg-slate-950 dark:border-slate-800"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-500">Receive notifications in Discord</p>
                </div>
            </div>
        </section>
    )
}

export default Integration