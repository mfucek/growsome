import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="overflow-x-hidden scroll-smooth">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
