import Marquee from 'react-fast-marquee';

const logos = [
  'https://img.freepik.com/free-vector/gradient-quill-pen-logo-with-tagline-template_23-2149813051.jpg',
  'https://img.freepik.com/premium-vector/logo-illustration-snail-gradient-colorful-style_116762-947.jpg',
  'https://img.freepik.com/premium-photo/free-vector-colorful-bird-illustration-gradient-bird-colorful-logo-gradient-vector_971166-59253.jpg',
  'https://img.freepik.com/premium-vector/golden-bird-logo-design_1195-336.jpg',
  'https://img.freepik.com/free-vector/gradient-colored-cobra-logo-template_23-2149192539.jpg',
  'https://img.freepik.com/free-vector/gradient-gold-crown-logo-template_23-2150970162.jpg',
  'https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg',
];

const Carousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8 bg-radial-[at_50%_15%] from-sky-200 via-blue-400 to-indigo-300 to-90% shadow-xl rounded-3xl mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-black tracking-tight mb-6">
        Trusted by leading brands & global innovators
      </h2>
      <Marquee gradient={false} speed={70} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="p-4 mx-8 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 brightness-90 hover:brightness-110 contrast-90 hover:contrast-100 transition-all duration-300 ease-in-out rounded-xl shadow-md"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
