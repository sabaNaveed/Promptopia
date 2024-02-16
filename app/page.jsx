import Feed from '@components/Feed' 
const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
	    	<h1 className="head_text text-center">
                discover & share
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">AI-Powered Prompts
                </span>

            </h1>
            <p className="desc text-center">
                It is an open source AI prompting tool for modern world that helps u discover, create and share creative AI-powered prompts.
            </p>
            <Feed />
		</section>
	)
}
export default Home
