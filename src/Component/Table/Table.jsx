import React from 'react'

const Table = () => {
  return (
    <>
      <div className="flex justify-between px-5 py-3 bg-white">
        <h1 className="text-xl">Data Tables</h1>
        <h3>
          Home/<span className="text-indigo-700 ">Table</span> /DataTables
        </h3>
      </div>
      <div className="flex-row justify-center">
        <div className=" m-5 bg-white" style={{ width: "97%" }}>
          <h1 className="text-indigo-700 mb-2 pl-4 pt-3">Data Tables</h1>
          <span className="mb-2 pl-4 pt-3">
            Show <input type="number" className="bg-[#f5f5f5] pl-2" style={{border:'1px solid black'}}/> entries{" "}
          </span>

          <table class="w-full mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#d8dbd6]  dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Position
                </th>
                <th scope="col" class="py-3 px-6">
                  Office
                </th>
                <th scope="col" class="py-3 px-6">
                  Age
                </th>
                <th scope="col" class="py-3 px-6">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Arjun
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">33</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Mayank
                </th>
                <td class="py-4 px-6">White</td>
                <td class="py-4 px-6">Laptop PC</td>
                <td class="py-4 px-6">29</td>
                <td class="py-4 px-6">$1999</td>
              </tr>

              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Kajal
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">33</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Swaroop
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">33</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Ajay
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">33</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-white border-b  dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                >
                  Raj
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">33</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="flex justify-between m-5 bg-white py-3 px-3 "
          style={{ width: "97%" }}
        >
          <h1>Showing Result 1 to 10 of 51 entires</h1>
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg hover:bg-gray-100"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Table