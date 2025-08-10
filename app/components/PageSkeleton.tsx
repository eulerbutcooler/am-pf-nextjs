export default function PageSkeleton() {
  return (
    <div className="bg-bgdark min-h-screen w-full animate-pulse">
      {/* Quote skeleton */}
      <div className="flex w-full justify-center pt-4 pb-2">
        <div className="h-4 w-72 rounded bg-gray-700 sm:h-6 sm:w-96"></div>
      </div>

      <div className="flex flex-col">
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-0 sm:px-0">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-0">
            {/* Mugshot skeleton */}
            <div className="relative mx-auto h-64 w-48 rounded-2xl bg-gray-700 sm:ml-24 sm:h-80 sm:w-60"></div>

            {/* About skeleton */}
            <div className="flex flex-col gap-3 text-center sm:ml-8 sm:gap-5 sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <div className="h-5 w-32 rounded bg-gray-700 sm:h-8 sm:w-48"></div>
              </div>
              <div className="mx-auto h-4 w-40 rounded bg-gray-700 sm:mx-0 sm:h-6 sm:w-56"></div>
              <div className="mx-auto h-4 w-56 rounded bg-gray-700 sm:mx-0 sm:h-6 sm:w-56"></div>
              <div className="mx-auto h-10 w-48 rounded-full bg-gray-700 sm:mx-0 sm:h-8 sm:w-56"></div>

              {/* Social links skeleton */}
              <div className="flex justify-center sm:block">
                <div className="flex w-48 flex-row justify-between gap-6 sm:w-56 sm:gap-0">
                  <div className="h-9 w-9 rounded-full bg-gray-700 sm:h-10 sm:w-10"></div>
                  <div className="h-9 w-9 rounded-full bg-gray-700 sm:h-10 sm:w-10"></div>
                  <div className="h-9 w-9 rounded-full bg-gray-700 sm:h-10 sm:w-10"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:justify-around sm:gap-0">
            {/* Skills skeleton */}
            <div className="bg-bgdark relative flex w-full flex-col overflow-hidden text-center sm:mx-0 sm:h-80 sm:flex-row sm:items-start">
              <div className="flex justify-center text-center sm:justify-start sm:text-left">
                <div className="mb-1 h-4 w-32 rounded bg-gray-700 sm:mt-4 sm:mr-2 sm:ml-4 sm:h-5"></div>
              </div>
              {/* Mobile horizontal skills */}
              <div className="relative h-20 w-full overflow-hidden sm:hidden">
                <div className="flex h-full items-center gap-6 px-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-shrink-0 items-center gap-3"
                    >
                      <div className="h-5 w-5 rounded bg-gray-600"></div>
                      <div className="h-3 w-12 rounded bg-gray-600"></div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Desktop vertical skills */}
              <div className="hidden sm:block sm:w-full">
                <div className="flex flex-col gap-4 px-4 py-2 sm:gap-5 sm:px-6 sm:py-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 sm:gap-4">
                      <div className="h-5 w-5 rounded bg-gray-600 sm:h-6 sm:w-6"></div>
                      <div className="h-4 w-20 rounded bg-gray-600"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Read skeleton - Hidden on mobile */}
            <div className="hidden sm:block">
              <div className="mt-5 flex flex-row items-start">
                <div className="mr-4 h-32 w-4 rounded bg-gray-700"></div>
                <div className="mr-10 h-44 w-44 rounded bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects skeleton with title */}
        <div className="mt-10 w-full pb-8 sm:pb-0">
          {/* Projects Title skeleton */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <div className="h-5 w-24 rounded bg-gray-700 sm:h-8 sm:w-32"></div>
          </div>

          {/* Mobile carousel */}
          <div className="relative sm:hidden">
            <div className="flex w-full justify-center overflow-hidden">
              <div className="flex">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative mx-4 flex h-96 w-72 flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-600 bg-gray-800 p-0"
                  >
                    <div className="mx-auto h-40 w-full rounded-t-2xl bg-gray-700 px-2 pt-2"></div>
                    <div className="flex flex-1 flex-col justify-between p-4">
                      <div className="flex flex-row items-center justify-between">
                        <div className="h-5 w-16 rounded bg-gray-700"></div>
                        <div className="flex flex-row px-2">
                          <div className="h-5 w-5 rounded bg-gray-700 px-1"></div>
                          <div className="h-5 w-5 rounded bg-gray-700 px-1"></div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1">
                        <div className="h-3 w-full rounded bg-gray-700"></div>
                        <div className="h-3 w-full rounded bg-gray-700"></div>
                        <div className="h-3 w-3/4 rounded bg-gray-700"></div>
                      </div>
                      <div className="mt-4 flex flex-row flex-wrap gap-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <div
                            key={j}
                            className="h-4 w-4 rounded bg-gray-700"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator skeleton */}
            <div className="mt-4 flex justify-center gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === 0 ? "scale-125 bg-gray-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop centered layout */}
          <div className="hidden gap-8 sm:flex sm:justify-center sm:gap-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative mx-auto flex h-96 w-full max-w-80 flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800 p-0 sm:mx-10 sm:w-80"
              >
                <div className="h-40 w-full rounded-t-2xl bg-gray-700"></div>
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                  <div className="flex flex-row items-center justify-between">
                    <div className="h-5 w-24 rounded bg-gray-700 sm:h-6"></div>
                    <div className="flex flex-row gap-2">
                      <div className="h-5 w-5 rounded bg-gray-700 sm:h-6 sm:w-6"></div>
                      <div className="h-5 w-5 rounded bg-gray-700 sm:h-6 sm:w-6"></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-700 sm:h-4"></div>
                    <div className="h-3 w-full rounded bg-gray-700 sm:h-4"></div>
                    <div className="h-3 w-3/4 rounded bg-gray-700 sm:h-4"></div>
                  </div>
                  <div className="mt-4 flex flex-row flex-wrap gap-2 sm:gap-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div
                        key={j}
                        className="h-4 w-4 rounded bg-gray-700 sm:h-5 sm:w-5"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Current Read appears after Projects */}
        <div className="sm:hidden">
          <div className="flex flex-col items-center">
            <div className="mb-2 flex justify-center text-center">
              <div className="h-4 w-28 rounded bg-gray-700"></div>
            </div>
            <div className="h-48 w-36 rounded bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
