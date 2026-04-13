const photos = [
  {
    src: "https://cdn.poehali.dev/projects/1f90398c-e4c4-4a09-8fe5-1ddf527f70f8/files/3e8edab6-f244-4f7f-8236-162eef21ee63.jpg",
    alt: "Энергоцентр на месторождении ЯНАО",
    caption: "Дизельные генераторные установки в условиях Крайнего Севера",
  },
  {
    src: "https://cdn.poehali.dev/projects/1f90398c-e4c4-4a09-8fe5-1ddf527f70f8/files/0acad246-f341-41ec-8034-5fd9624c6bf7.jpg",
    alt: "Машинный зал энергоцентра",
    caption: "Газотурбинные установки суммарной мощностью до 25 МВт",
  },
  {
    src: "https://cdn.poehali.dev/projects/1f90398c-e4c4-4a09-8fe5-1ddf527f70f8/files/c11d5e45-55d2-4daf-99c6-8449139e9410.jpg",
    alt: "Строительство модульного энергоцентра",
    caption: "Монтаж модульных энергоцентров в арктических условиях",
  },
];

export default function Gallery() {
  return (
    <section className="bg-neutral-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Объекты</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-10">
          Наши энергоцентры
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="group overflow-hidden">
              <div className="overflow-hidden h-64 lg:h-80">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-600 leading-snug">{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
