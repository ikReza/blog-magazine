import Image from "next/image";

const About = () => {
  return (
    <section className="h-[75vh] pt-20 pb-20 lg:pb-12 border-2 border-green-700">
      <div className="grid grid-cols-12 gap-[30px] px-12 items-center">
        {/* <div className="col-span-6 w-full px-4"> */}
        <div className="col-span-6 w-full h-full border-r-2 border-black flex justify-center">
          <Image
            width={500}
            height={0}
            className="w-2/3 h-full object-contain object-center"
            src="/images/character.png"
            alt=""
          />
        </div>
        {/* </div> */}
        <div className="col-span-6">
          <div className="flex flex-col text-left items-start justify-center px-16 pt-8 lg:pt-0 w-full tracking-wider leading-loose">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold capitalize">
              Make your
              <span className="text-blue-600">&nbsp;life easier&nbsp;</span>
              for marketing sales and customer support
            </h2>
            <p className="text-cyan-700 leading-loose mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
            <a
              className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
