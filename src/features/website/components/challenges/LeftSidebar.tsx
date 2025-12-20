import { GetPostsTags } from "./GetPostsTags"

const LeftSidebar = () => {
    const user = { LoggedIn: false }
    const challenges = [
        {
            id: 1,
            title: "30-Day Morning Routine",
            description: "Build a consistent morning routine for 30 days",
            duration: 30,
            category: "Productivity",
            status: "active",
            participants: 245,
            createdAt: new Date('2024-12-01'),
            difficulty: "Beginner"
        },
        {
            id: 2,
            title: "Read 5 Books in 2 Months",
            description: "Challenge yourself to read 5 books in 2 months",
            duration: 60,
            category: "Learning",
            status: "active",
            participants: 189,
            createdAt: new Date('2024-12-05'),
            difficulty: "Intermediate"
        },
        {
            id: 3,
            title: "Daily Exercise Challenge",
            description: "Exercise for at least 30 minutes every day for 21 days",
            duration: 21,
            category: "Health",
            status: "active",
            participants: 432,
            createdAt: new Date('2024-12-10'),
            difficulty: "Beginner"
        },
        {
            id: 4,
            title: "Learn a New Skill",
            description: "Dedicate 1 hour daily to learning a new skill for 45 days",
            duration: 45,
            category: "Learning",
            status: "active",
            participants: 156,
            createdAt: new Date('2024-12-15'),
            difficulty: "Advanced"
        }
    ]



    return (
        <aside className="hidden md:flex md:flex-col md:col-span-2">
            <div className="bg-white dark:bg-slate-800 dark:text-slate-200 shadow p-6 mb-6 border dark:border-slate-700 flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2 dark:text-slate-200">Quick Actions</h3>
                {user.LoggedIn ? (
                    <button className="bg-teal-400 text-white p-4 rounded-lg cursor-pointer w-full">Share Progress</button>
                ) : (
                    <button className="bg-teal-400 text-white p-4 rounded-lg cursor-pointer w-full">Login</button>
                )}
            </div>
            <div className="bg-white dark:bg-slate-800 dark:text-slate-200 shadow p-6 mb-6 border dark:border-slate-700 flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2 dark:text-slate-200">Active Challenges</h3>
                <div className="flex flex-col gap-2">
                    {challenges.map((challenge) => (
                        <button key={challenge.id} className="flex text-sm justify-between bg-white dark:bg-slate-900 border border-[#e5e7eb] dark:border-slate-700 items-center rounded-xl p-2 w-full cursor-pointer hover:bg-green-100 hover:border-green-500 dark:hover:bg-slate-800 dark:hover:border-slate-600">
                            <span className="text-left dark:text-slate-200">{challenge.title}</span>
                            <span className="bg-gray-100 dark:bg-slate-800 dark:text-slate-200 p-2 rounded-full">{challenge.participants}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 shadow p-6 mb-6 border dark:border-slate-700 flex flex-col justify-center items-center">
                <h3 className="font-semibold mb-2 dark:text-slate-200">Trending</h3>
                <GetPostsTags />
            </div>
        </aside>
    )
}

export default LeftSidebar