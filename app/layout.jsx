import '@styles/globals.css';
import nav from '@components/nav';
import Provider from '@components/Provider';
export const metadata = {
	title:"Promptopia",
	description:"discover & share AI prompts"
}
const RootLayout = ({children}) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient"/>
</div>

<main className="app">
		<nav/>
		{children }
</main>
</Provider>
			</body>
</html>
	)
}
export default RootLayout
