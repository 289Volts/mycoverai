import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, font }) {
	return (
		<>
			<Header font={`${font} font-space`} />
			<main className={`${font} font-space`}>{children}</main>
			<Footer font={`${font} font-space`} />
		</>
	);
}
