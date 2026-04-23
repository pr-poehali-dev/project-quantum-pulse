import { useState } from 'react';
import { cn } from '@/lib/utils';

const works = [
  {
    id: 'w1',
    title: 'Брендинг кафе YUMMY',
    category: 'Дизайн упаковки',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/bucket/386e2241-aa96-4420-b272-57e9cf101f62.jpg',
  },
  {
    id: 'w2',
    title: 'Меню ресторана «Алхимик»',
    category: 'Полиграфия',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/bucket/d8ddd8ec-0c7d-4cb1-8c15-2235e3a630e3.jpg',
  },
  {
    id: 'w3',
    title: 'Визитки «Трифель»',
    category: 'Полиграфия',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/bucket/5ba7cc95-5110-4c2f-8b1a-950d626853d5.jpg',
  },
];

const categories = [
  {
    id: 'logos',
    title: 'Логотипы',
    description: 'Фирменный стиль и айдентика для бизнеса любого масштаба',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/d17a35bb-09f0-4738-8918-fad9e5771448.jpg',
    count: '20+ работ',
  },
  {
    id: 'print',
    title: 'Полиграфия',
    description: 'Брошюры, каталоги, листовки и визитки',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/4567789f-cb3a-4cb6-851a-3947b9bf14fd.jpg',
    count: '35+ работ',
  },
  {
    id: 'infographics',
    title: 'Инфографика',
    description: 'Визуализация данных и сложных идей',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/c5c09275-2543-47ed-82fc-cfa60092101f.jpg',
    count: '15+ работ',
  },
  {
    id: 'presentations',
    title: 'Презентации',
    description: 'Деловые и продающие презентации под ключ',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/9357f17e-4f85-427a-a7fc-0e7f439b62cb.jpg',
    count: '25+ работ',
  },
  {
    id: 'digital',
    title: 'Digital-баннеры',
    description: 'Реклама для соцсетей и интернет-площадок',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/2cc5d10b-6ad6-4cae-aa40-675403272813.jpg',
    count: '40+ работ',
  },
  {
    id: 'packaging',
    title: 'Дизайн упаковки',
    description: 'Упаковка для косметики, еды, товаров — от идеи до макета',
    image: 'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/838a4160-44f6-46cd-a723-6339960cd008.jpg',
    count: '10+ работ',
  },
];

export default function PortfolioSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [workHovered, setWorkHovered] = useState<string | null>(null);

  return (
    <section id="portfolio" className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">

        {/* Галерея работ */}
        <div className="mb-24">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Избранные работы</p>
            <h2 className="text-3xl font-light text-white md:text-4xl">Из портфолио</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {works.map((work) => (
              <div
                key={work.id}
                className="relative overflow-hidden bg-black cursor-pointer"
                onMouseEnter={() => setWorkHovered(work.id)}
                onMouseLeave={() => setWorkHovered(null)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className={cn(
                      'h-full w-full object-cover transition-transform duration-700',
                      workHovered === work.id ? 'scale-105' : 'scale-100'
                    )}
                  />
                </div>
                <div className={cn(
                  'absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300',
                  workHovered === work.id ? 'opacity-100' : 'opacity-0'
                )}>
                  <p className="text-xs tracking-widest uppercase text-white/50 mb-1">{work.category}</p>
                  <p className="text-lg font-light text-white">{work.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Категории */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Портфолио</p>
          <h2 className="text-3xl font-light text-white md:text-4xl">Категории работ</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative overflow-hidden bg-black cursor-pointer group"
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-700',
                    hovered === cat.id ? 'scale-110' : 'scale-100'
                  )}
                />
              </div>

              <div className={cn(
                'absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300',
                hovered === cat.id ? 'opacity-90' : 'opacity-70'
              )} />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-white/50 mb-1">{cat.count}</p>
                    <h3 className="text-xl font-light text-white">{cat.title}</h3>
                    <p className={cn(
                      'text-sm text-white/60 mt-1 max-w-xs transition-all duration-300 overflow-hidden',
                      hovered === cat.id ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      {cat.description}
                    </p>
                  </div>
                  <a
                    href={`https://t.me/Anastarsea`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'shrink-0 ml-4 border border-white/40 text-white text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 hover:bg-white hover:text-black',
                      hovered === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    )}
                  >
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}