import { useState } from 'react';
import { cn } from '@/lib/utils';

const reviews = [
  {
    id: 1,
    name: 'Марина Соколова',
    business: 'Владелец кофейни',
    text: 'Анастасия разработала полный пакет полиграфии для нашей кофейни: меню, визитки, упаковку. Всё выполнено в едином стиле, клиенты постоянно спрашивают, кто делал дизайн. Работали быстро, без правок — с первого раза попала в наше видение.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Дмитрий Харченко',
    business: 'Директор по маркетингу',
    text: 'Заказывали серию баннеров для рекламной кампании в соцсетях. Результат превзошёл ожидания — CTR вырос на 40% по сравнению с предыдущими креативами. Анастасия понимает не только дизайн, но и маркетинговую задачу.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Елена Власова',
    business: 'Основатель бренда одежды',
    text: 'Разрабатывали фирменный стиль с нуля. Анастасия предложила несколько концепций, помогла выбрать лучшую и довела до финального макета. Отдельный плюс — помогла с печатью через свои типографии, сэкономили и время, и деньги.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Антон Рябов',
    business: 'Ресторан «Алхимик»',
    text: 'Делали меню для ресторана. Нужен был особый стиль — мрачный, с характером. Анастасия поняла задачу сразу, предложила концепцию с hand-drawn иллюстрациями. Гости отмечают меню как часть атмосферы заведения.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ольга Медведева',
    business: 'Организатор мероприятий',
    text: 'Сотрудничаем уже год — регулярно заказываем афиши, программки, баннеры для мероприятий. Всегда в срок, всегда на высоком уровне. Теперь это наш постоянный дизайнер.',
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Отзывы</p>
          <h2 className="text-3xl font-light text-white md:text-4xl">Что говорят клиенты</h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-3">
          {/* Список */}
          <div className="bg-black">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActive(i)}
                className={cn(
                  'w-full text-left px-6 py-5 border-b border-white/10 transition-colors',
                  active === i ? 'bg-white/5' : 'hover:bg-white/[0.03]'
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'h-1.5 w-1.5 shrink-0 transition-colors',
                    active === i ? 'bg-white' : 'bg-white/20'
                  )} />
                  <div>
                    <p className={cn(
                      'text-sm font-light transition-colors',
                      active === i ? 'text-white' : 'text-white/50'
                    )}>{r.name}</p>
                    <p className="text-xs text-white/30 mt-0.5">{r.business}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Текст отзыва */}
          <div className="col-span-2 bg-black p-10 flex flex-col justify-between min-h-64">
            <div>
              <div className="flex gap-1 mb-8">
                {Array.from({ length: reviews[active].rating }).map((_, i) => (
                  <span key={i} className="text-white text-lg">★</span>
                ))}
              </div>
              <p className="text-lg font-light text-white/80 leading-relaxed">
                «{reviews[active].text}»
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white font-light">{reviews[active].name}</p>
              <p className="text-sm text-white/40 mt-1">{reviews[active].business}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
