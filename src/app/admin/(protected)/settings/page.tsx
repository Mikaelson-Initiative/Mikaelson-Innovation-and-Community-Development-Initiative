import Hero from "@/features/admin/components/settings/Hero"
import Header from "@/features/admin/components/settings/Header"
import Analytics from "@/features/admin/components/settings/Analytics"
import SiteConfiguration from "@/features/admin/components/settings/SiteConfiguration"
import ENotifications from "@/features/admin/components/settings/ENotifications"
import Security from "@/features/admin/components/settings/Security"
import DataManagement from "@/features/admin/components/settings/DataManagement"
import Integration from "@/features/admin/components/settings/Integration"

const page = () => {
    return (
        <div>
            <Header />
            <div className="p-6 md:p-8 bg-gray-50 dark:bg-black/20 min-h-screen flex flex-col gap-6">
            <Hero />
            <div className="grid grid-cols-1 gap-6">
                <SiteConfiguration />
                <Security />
                <Analytics />
                <ENotifications />
                <DataManagement />
                <Integration />
            </div>
        </div>
        </div >
    )
}

export default page