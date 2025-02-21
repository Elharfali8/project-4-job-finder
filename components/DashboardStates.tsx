

const DashboardStates = () => {
  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* TOTAL JOBS */}
          <div className="p-2 rounded-lg bg-blue-500 text-gray-50 shadow-lg">
          <h3 className="text-lg font-semibold pb-1">Total Jobs:</h3>
          <p className="text-2xl">500</p>
          </div>
          {/* FAVORITE JOBS */}
          <div className="p-2 rounded-lg bg-yellow-500 text-gray-50 shadow-lg">
          <h3 className="text-lg font-semibold pb-1">Favorite Jobs:</h3>
          <p className="text-2xl">30</p>
          </div>
          {/* APPLIED JOBS */}
          <div className="p-2 rounded-lg bg-green-500 text-gray-50 shadow-lg">
          <h3 className="text-lg font-semibold pb-1">Applied Jobs:</h3>
          <p className="text-2xl">5</p>
          </div>
    </div>
  )
}

export default DashboardStates