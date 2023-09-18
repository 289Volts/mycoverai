import '@/styles/globals.css';
import Layout from '../components/layout/Layout';
import { Space_Grotesk } from 'next/font/google';

export const space = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space'
});
export default function App({ Component, pageProps }) {
	return (
		<Layout font={space.variable}>
			<Component {...pageProps} />
		</Layout>
	);
}
