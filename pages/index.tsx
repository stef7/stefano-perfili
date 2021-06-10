import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Stefano Perfili - senior front-end developer - Melbourne, Australia
				</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon/favicon-16x16.png"
				/>
			</Head>
			<main id="content" role="main">
				<div className="photo">
					<Image src="/assets/sp.jpg" alt="Stefano Perfili" layout="fill" />
				</div>

				<h1>Stefano Perfili</h1>

				<p>
					Senior front-end developer
					<br />
					Melbourne, Australia
				</p>

				<ul>
					<li>
						<a href="https://www.linkedin.com/in/stefanoperfili">LinkedIn</a>
					</li>
					<li>
						<a href="https://github.com/stef7">GitHub</a>
					</li>
				</ul>
			</main>
		</>
	);
}
