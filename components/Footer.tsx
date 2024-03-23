import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
	return (
		<div>
			<footer className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
				<div className="flex items-center space-x-2">
					<Link href="/">
						<Image
							src="/me.jpeg"
							width={50}
							height={50}
							alt="Logo"
							className="rounded-full"
						/>
					</Link>
					{/* JordanPorter.me - Personal, Travel, Hiking, Photography, Videography */}
					{/* JordanPorter.info - Links Page / Socials / Sites / GitHub / Etc. */}
					<h1>{`<--- This Guy`} </h1>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
