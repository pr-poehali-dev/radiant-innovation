export default function Featured() {
  const services = [
    "Строительство Энергоцентров",
    "Строительство инженерной инфраструктуры",
    "Проектирование объектов",
    "Пусконаладочные работы электрооборудования",
    "Испытания и измерения электрооборудования",
    "Сопровождение в Ростехнадзоре",
    "Транспортные услуги",
    "Горячее питание на месторождениях",
    "Клининговые услуги",
    "Обслуживание столовых и общежитий",
    "Ремонт двигателей АИ-20 (ПАЭС-2500)",
    "Выработка электроэнергии ДГУ и ГПУ",
  ];

  return (
    <div id="services" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Энергоцентр на месторождении"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наши услуги</h3>
        <p className="text-2xl lg:text-3xl mb-8 text-neutral-900 leading-tight font-semibold">
          Полный цикл — от проектирования до ввода в эксплуатацию
        </p>
        <ul className="space-y-2 mb-8">
          {services.map((service, i) => (
            <li key={i} className="flex items-start gap-2 text-neutral-700 text-sm lg:text-base">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
              {service}
            </li>
          ))}
        </ul>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Связаться с нами
        </button>
      </div>
    </div>
  );
}
