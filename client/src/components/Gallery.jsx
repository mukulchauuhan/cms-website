import React from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "src/assets/ContentStudio.png",
      caption: "Content Studio",
    },
    {
      id: 2,
      url: "src/assets/CreativeWorkstation.webp",
      caption: "Creative Workstation",
    },
    {
      id: 3,
      url: "src/assets/DevelopmentInAction.avif",
      caption: "Development in Action",
    },
    {
      id: 4,
      url: "src/assets/UiUxCrafting.avif",
      caption: "UI/UX Crafting",
    },
    {
      id: 5,
      url: "src/assets/TheCoreTeam.png",
      caption: "The Core Team",
    },
    {
      id: 6,
      url: "src/assets/StrategySession.avif",
      caption: "Strategy Session",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Gallery Highlights</h2>
        <p className="text-gray-500">
          A glimpse into our workspace, our people, and our process.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 bg-black/60 text-white text-sm font-medium p-2 w-full text-center">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
