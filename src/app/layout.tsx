"use client";

import Link from "next/link";
import styles from "../assets/layout.module.css";
import Hamburger from "../components/hamburger/hamburger";
import Search from "../components/search/search";
import { getLinks } from "../constants/getNavigtionLinks";
import kinomix from "../public/icons/KINOMIX.svg";

import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const path = usePathname();

	return (
		<html lang="en">
			<body>
				{path === "/auth" ? (
					children
				) : (
					<div>
						<div className={styles.wrapper}>
							<div className={styles.wrapper_right_side}>
								<Image src={kinomix} width={140} height={55} alt="" />
							</div>
							<div className={styles.wrapper_left_side}>
								<div>
									{getLinks.map((element) => (
										<Link
											className={styles.link}
											key={element.text + "-key"}
											href={element.href}
										>
											{element.text}
										</Link>
									))}
								</div>
								<div>
									<Search />
									<Hamburger />
								</div>
							</div>
						</div>
						{children}
					</div>
				)}
			</body>
		</html>
	);
}
