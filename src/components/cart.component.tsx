const Cart = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Cart
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://picsum.photos/640/640?r=8006"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lenovo Thinkpad x280
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Rp 3.950.000
                </p>
                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-1">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    -
                  </button>
                  <span className="mr-2">1</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
                Rp 3.950.000
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://picsum.photos/640/640?r=8006"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lenovo Thinkpad x280
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Rp 3.950.000
                </p>
                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-1">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    -
                  </button>
                  <span className="mr-2">1</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
                Rp 3.950.000
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://picsum.photos/640/640?r=8006"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lenovo Thinkpad x280
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Rp 3.950.000
                </p>
                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-1">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    -
                  </button>
                  <span className="mr-2">1</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
                Rp 3.950.000
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://picsum.photos/640/640?r=8006"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lenovo Thinkpad x280
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Rp 3.950.000
                </p>
                <div className="text-sm text-gray-500 truncate dark:text-gray-400 mt-1">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    -
                  </button>
                  <span className="mr-2">1</span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-5 h-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center text-base font-semibold text-gray-900 dark:text-white">
                Rp 3.950.000
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 m-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Remove
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between my-5">
        <p className="text-md font-bold leading-none text-gray-900 dark:text-white">
          Total
        </p>
        <p className="text-md font-bold leading-none text-gray-900 dark:text-white">
          Rp 4.000.000
        </p>
      </div>
      <button className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
