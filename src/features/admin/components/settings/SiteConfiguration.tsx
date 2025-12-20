"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Settings } from "lucide-react";
import { useState } from "react";

const SiteConfiguration = () => {
  const [siteName, setSiteName] = useState("Mikaelson Initiative");
  const [siteDescription, setSiteDescription] = useState("");
  const [supportEmail, setSupportEmail] = useState("");

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 p-3 rounded-xl">
          <Settings className="w-6 h-6" />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="font-bold text-lg dark:text-slate-100">Site Configuration</h2>
          <p className="text-sm text-gray-500 dark:text-slate-400">Basic site settings</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-slate-300">Site Name</label>
          <Input
            type="text"
            placeholder="Mikaelson Initiative"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="dark:bg-slate-950 dark:border-slate-800"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-slate-300">Site Description</label>
          <Textarea
            placeholder="A brief description of your platform"
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            className="dark:bg-slate-950 dark:border-slate-800 min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-slate-300">Support Email</label>
          <Input
            type="email"
            placeholder="support@example.com"
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            className="dark:bg-slate-950 dark:border-slate-800"
          />
        </div>
      </div>
    </div>
  );
};

export default SiteConfiguration;