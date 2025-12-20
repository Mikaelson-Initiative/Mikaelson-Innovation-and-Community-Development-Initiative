"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Database } from 'lucide-react';
import { useState } from 'react';

const DataManagement = () => {
  const [retentionDays, setRetentionDays] = useState("365");
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
          <Database className="w-6 h-6" />
        </div>

        <div className="flex-1 ml-4">
          <h2 className="font-bold text-lg dark:text-slate-100">Data Management</h2>
          <p className="text-sm text-gray-500 dark:text-slate-400">Backup and retention</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-slate-300">Data Retention (days)</label>
          <Input
            type="number"
            placeholder="365"
            value={retentionDays}
            onChange={(e) => setRetentionDays(e.target.value)}
            className="dark:bg-slate-950 dark:border-slate-800"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-slate-300">Default Export Format</label>
          <select className='w-full p-2 border rounded-md dark:bg-slate-950 dark:border-slate-800 dark:text-slate-200 text-sm'>
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
            <option value="excel">Excel</option>
            <option value="PDF">PDF</option>
          </select>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t dark:border-slate-800">
        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-xl border border-red-100 dark:border-red-900/50">
          <h4 className="text-red-600 dark:text-red-400 font-semibold mb-1 text-sm">Danger Zone</h4>
          <p className="text-xs text-red-500/80 dark:text-red-400/70 mb-3">Irreversible and destructive actions</p>
          <Button variant="destructive" className='w-full bg-white dark:bg-transparent border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/40 hover:text-red-700 shadow-sm'>Clear Cache</Button>
        </div>
      </div>
    </div>
  )
}

export default DataManagement