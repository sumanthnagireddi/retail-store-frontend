import React from "react";

function Admin() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Admin</h2>
        <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="*:font-medium *:text-gray-900">
                <th className="px-3 py-2 whitespace-nowrap">Name</th>
                <th className="px-3 py-2 whitespace-nowrap">DoB</th>
                <th className="px-3 py-2 whitespace-nowrap">Role</th>
                <th className="px-3 py-2 whitespace-nowrap">Salary</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Nandor the Relentless
                </td>
                <td className="px-3 py-2 whitespace-nowrap">04/06/1262</td>
                <td className="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Laszlo Cravensworth
                </td>
                <td className="px-3 py-2 whitespace-nowrap">19/10/1678</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Vampire Gentleman
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">Nadja</td>
                <td className="px-3 py-2 whitespace-nowrap">15/03/1593</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Vampire Seductress
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
                <td className="px-3 py-2 whitespace-nowrap">01/09/1971</td>
                <td className="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
                <td className="px-3 py-2 whitespace-nowrap">$53,000</td>
              </tr>

              <tr className="*:text-gray-900 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">
                  Guillermo de la Cruz
                </td>
                <td className="px-3 py-2 whitespace-nowrap">18/11/1991</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Familiar/Vampire Hunter
                </td>
                <td className="px-3 py-2 whitespace-nowrap">$0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
