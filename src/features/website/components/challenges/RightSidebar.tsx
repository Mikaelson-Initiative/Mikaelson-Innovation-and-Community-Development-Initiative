import { GetContributors, GetStats } from "./GetPostsTags"

const RightSidebar = () => {
    return (
        <aside className="hidden md:flex md:flex-col md:col-span-2">
            <div className="bg-white dark:bg-slate-800 shadow p-6 mb-6 border dark:border-slate-700 flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2 dark:text-slate-200">Community Stats</h3>
                <GetStats />
            </div>
            <div className="bg-white dark:bg-slate-800 shadow p-6 mb-6 border dark:border-slate-700 flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2 dark:text-slate-200">Top Contributors</h3>
                <GetContributors />
            </div>

        </aside>
    )
}

export default RightSidebar