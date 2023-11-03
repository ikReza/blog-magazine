const Subscribe = () => {
  return (
    <section className="py-4 md:py-8 lg:py-16 bg-black px-4">
      <div className="flex flex-col items-center md:w-2/3 lg:w-5/12 mx-auto text-center">
        
        <p className="text-xl md:text-2xl lg:text-3xl font-bold capitalize my-4 text-white">
          Interseting Stories | Updates | Guides
        </p>
        <p className="text-gray-400 capitalize">
          Subscribe to our newsletter to get the latest updates straight to your inbox.
        </p>
        <form className="my-4 relative w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-gray-800 px-2 py-3 md:py-4 placeholder:text-sm placeholder:md:text-base"
          />
          <button className="absolute right-2 top-1.5 md:top-1 bg-black hover:bg-slate-800 text-[tomato] text-sm md:text-base rounded-xl px-2 md:px-4 py-2 md:py-3">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
