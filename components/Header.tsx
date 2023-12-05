import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Header = () => {
  return (
    <><nav className="bg-black sticky top-0 left-0 w-10 hover:w-64 h-screen border-r-2 border-gray-600 ">
          <div className=" grid grid-flex-col gap-2 overflow-hidden">
              <h1 className="text-2xl font-bold p-2 text-white ">Veezy</h1>
              <div className="h-10 col-span-2 rounded-xl bg-gray-600 flex place-items-center py-2 space-x-4 my-4 mr-2 ">
                  <svg className=" ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                  </svg>
                  <Link href="/idea-generator">
                  <h2  className=" ">
                      AI Idea Generator
                  </h2>
                  </Link>
              </div>
              <div className="h-10 col-span-2 rounded-xl bg-gray-600 flex place-items-center py-2 space-x-4 my-4 mr-2">
                  <svg className=" ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                  </svg>
                  <Link href="/scheduler">
                  <h2 className="align-middle">
                      Scheduler
                  </h2>
                  </Link>
              </div>
              <div className="h-10 col-span-2 rounded-xl bg-gray-600 flex place-items-center py-2 space-x-4 my-4 mr-2">
                  <svg className=" ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                  </svg>
                  <Link href="/workflow">
                  <h2 className="align-middle">
                      Workflow
                  </h2>
                  </Link>

              </div>
              <div className="h-10 col-span-2 rounded-xl bg-gray-600 flex place-items-center py-2 space-x-4 my-4 mr-2">
                  <svg className=" ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                  </svg>
                  <Link href="discover">
                  <h2 className="align-middle">
                      Discover
                  </h2>
                  </Link>
              </div>
              <div className="h-10 col-span-2 rounded-xl bg-gray-600 flex place-items-center py-2 space-x-4 my-4 mr-2">
                  <svg className=" ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                  </svg>
                  <Link href="download">
                  <h2 className="align-middle">
                      Download
                  </h2>
                  </Link>
              </div>
          </div>


      </nav>
      </>

  )
}

export default Header
