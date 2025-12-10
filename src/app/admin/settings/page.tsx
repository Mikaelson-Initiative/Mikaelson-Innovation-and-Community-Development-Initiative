import Hero from "@/features/admin/components/settings/Hero"
import Header from "@/features/admin/components/settings/Header"
import Analytics from "@/features/admin/components/settings/Analytics"

const page = () => {
    return (
        <div>
            <Header />
            <main className="py-12 px-8 bg-brand-bg-gray dark:bg-black/20 dark:text-white">
                <Hero />
                <Analytics />
            </main>
        </div>
    )
}

export default page