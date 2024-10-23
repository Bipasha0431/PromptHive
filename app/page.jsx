import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    PromptHive is an open-source AI tool for discovering, creating, and sharing prompts in the modern world. Perfect for creative minds to thrive.
    </p>

    <Feed />
  </section>
);

export default Home;
