function Banner() {
	return (
		<div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
			<div>
				<h1 className="text-7xl letter-spacing-1"> jordanporter.dev</h1>

				<h2 className="mt-2">
					Latest writings & happenings from a career in tech.
					{/* <span className="underline decoration-4 decoration-[#2dcf1b]"> */}
					{/* </span>{" "} */}
				</h2>
			</div>

			<p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
				Welcome to my personal blog. I write about software engineering, career
				development, and other things in the industry I find interesting. I hope
				you enjoy your stay here!
			</p>
		</div>
	);
}

export default Banner;
