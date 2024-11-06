import Image from "next/image";
import Link from "next/link";
import Hamburger from "../components/hamburger/hamburger";
import Search from "../components/search/search";
import { getLinks } from "../constants/getNavigtionLinks";
import "./globals.css";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="bg-red-800 flex justify-between ml  text-neutral-500 text-lg items-center">
					<div className="items-center">
						<Image src={""} width={30} height={30} alt="icon-app" />
					</div>
					<div className=" text-neutral-500 text-lg flex">
						{getLinks.map((element) => (
							<Link
								className="hover:text-red-300 transition-all mr-12"
								key={element.text + "-key"}
								href={element.href}
							>
								{element.text}
							</Link>
						))}
						<div className="flex mr-20">
							<Search />
							<Hamburger />
						</div>
					</div>
				</div>
				{children}
			</body>
		</html>
	);
}
