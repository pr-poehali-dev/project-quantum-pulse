const advantages = [
  'Точная подготовка файлов под технические требования',
  'Оптимизация затрат на печать',
  'Контроль качества на этапе производства',
  'Сжатые сроки реализации проектов',
];

const tools = ['Adobe CC', 'CorelDRAW', 'ChatGPT', 'MidJourney', 'Nano Banana'];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Левая колонка */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/30 mb-4">О себе</p>
            <h2 className="text-3xl font-light text-black md:text-4xl mb-8">
              Графический дизайнер<br />в Краснодаре
            </h2>
            <p className="text-base text-black/60 leading-relaxed mb-6">
              Помогаю бизнесу заявить о себе через сильный визуальный образ.
            </p>
            <p className="text-base text-black/60 leading-relaxed mb-10">
              Создаю дизайн «под ключ»: от концепции до макета, готового к печати. Владею полным набором инструментов — от Adobe CC и Corel до нейросетей.
            </p>

            {/* Инструменты */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-black/20 text-black/60 text-xs tracking-widest uppercase px-4 py-2"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Правая колонка */}
          <div>
            <div className="border-l-2 border-black pl-8 mb-10">
              <p className="text-lg font-light text-black mb-2">Ключевое преимущество</p>
              <p className="text-base text-black/60 leading-relaxed">
                Сотрудничаю с несколькими типографиями Краснодара — это означает прямой контроль на каждом этапе.
              </p>
            </div>

            <ul className="space-y-4 mb-12">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black" />
                  <span className="text-base text-black/70">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/Anastarsea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-black/80 transition-colors"
            >
              Обсудить проект
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
