import React from "react";

const TableComponent = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      {Object.keys(data.allTimeFrameRecords).map((timeFrame) => (
        <div
          key={timeFrame}
          className="overflow-hidden bg-white shadow sm:rounded-lg mb-8"
        >
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Time Frame: {timeFrame}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Retest
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Open
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Close
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    High
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Low
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.allTimeFrameRecords[timeFrame].map((record, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          record.retest === "RETEST_SUPPORT"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.retest === "RETEST_SUPPORT" ? "Support" : "Resistance"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.open}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.close}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.high}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.low}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
