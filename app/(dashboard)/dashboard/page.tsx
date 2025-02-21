import DashboardStates from "@/components/DashboardStates"
import JobStatesChart from "@/components/JobStatesChart"
import PageTitle from "@/components/PageTitle"
import RecentActivity from "@/components/RecentActivity";
import { fakeJobs } from "@/utils/fakeData";
import Link from "next/link";

const fakeData = [
  { status: "Pending", count: 10 },
  { status: "Interview", count: 5 },
  { status: "Rejected", count: 7 },
  { status: "Hired", count: 3 },
];


const DashboardPage = () => {
  return (
    <main className="px-4 lg:px-14 py-5 lg:py-8">
      <PageTitle text="dashboard" />
      <DashboardStates />
      <div className=" grid md:grid-cols-2 mt-6 gap-8 ">
        {/* ----- */}
        <div className="bg-muted  shadow-lg rounded-lg ">
          <h2 className="mt-2 text-lg font-semibold text-center mb-2">Job Application Status</h2>
        <JobStatesChart data={fakeData} />
        </div>
        {/* ----- */}
        <div className="bg-muted  shadow-lg rounded-lg">
          <h2 className="mt-2 text-lg font-semibold text-center mb-2">Recent Activity</h2>
          <RecentActivity data={fakeJobs} />
          <div className="grid place-items-center">
          <Link href={`/jobs`} className=" mt-4 mb-5 border-b lg:text-lg hover:scale-105 text-primary border-primary" >
            see more jobs
          </Link>
          </div>
        </div>
        {/* ----- */}
      </div>
    </main>
  )
}

export default DashboardPage