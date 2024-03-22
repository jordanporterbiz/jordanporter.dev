function Banner() {
	return (
		<div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
			<div>
				<h1 className="text-7xl"> Jordan&apos;s Blog</h1>

				<h2>
					A place for{" "}
					<span className="underline decoration-4 decoration-[#2dcf1b]">
						Traveller Tales
					</span>{" "}
				</h2>
			</div>

			<p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
				Adventures &amp; Travel Stories | Advice I&apos;ve Learned | Tips &amp;
				Tricks
			</p>
		</div>
	);
}

export default Banner;
