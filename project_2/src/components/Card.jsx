import React from 'react'

function Card({userData}) {
  return (
    <div>
  <div className="px-4 sm:px-0">
    <h3 className="text-base/7 font-semibold text-gray-900">Applicant Information</h3>
    <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and application.</p>
  </div>
  <div className="mt-6 border-t border-gray-100">
    <dl className="divide-y divide-gray-100">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{userData.name}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">Age</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{userData.age}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">City</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{userData.city}</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">Salary expectation</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">About</dt>
        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
      </div>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm/6 font-medium text-gray-900">Attachments</dt>
        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
              <div className="flex w-0 flex-1 items-center">
                <svg className="size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
                </svg>
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                  <span className="shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div className="ml-4 shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
              <div className="flex w-0 flex-1 items-center">
                <svg className="size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z" clip-rule="evenodd" />
                </svg>
                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                  <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                  <span className="shrink-0 text-gray-400">4.5mb</span>
                </div>
              </div>
              <div className="ml-4 shrink-0">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>

  )
}

export default Card