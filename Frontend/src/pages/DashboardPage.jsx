const DashboardPage = () => {

    return (

        <div>

            <h1 className="text-3xl font-bold text-gray-800">

                Dashboard

            </h1>

            <p className="mt-2 text-gray-500">

                Welcome back! Here's a quick overview of your workspace.

            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h3 className="text-sm text-gray-500">

                        Total Projects

                    </h3>

                    <p className="mt-3 text-4xl font-bold text-red-600">

                        0

                    </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h3 className="text-sm text-gray-500">

                        Total Tasks

                    </h3>

                    <p className="mt-3 text-4xl font-bold text-red-600">

                        0

                    </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h3 className="text-sm text-gray-500">

                        Pending

                    </h3>

                    <p className="mt-3 text-4xl font-bold text-red-600">

                        0

                    </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

                    <h3 className="text-sm text-gray-500">

                        Completed

                    </h3>

                    <p className="mt-3 text-4xl font-bold text-red-600">

                        0

                    </p>

                </div>

            </div>

        </div>

    );

};

export default DashboardPage;