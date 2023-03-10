
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
        <h1 className="text-7xl"> Jordan&apos;s Blog</h1>

        <h2>Welcome to {' '}
            <span className="underline decoration-4 decoration-[#4285f4]">
                Every Dev&apos;s  
            </span>{' '}
            Dream Blog
        </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | the latest in technology | The weekly debugging nightmares | and more!
        </p>
    </div>
  )
}

export default Banner