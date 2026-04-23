import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/ce43a834-38ed-4654-b637-7aa45fe701c0.jpg',
  'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/5bdc1cd3-e6b7-49ba-b14d-35a6a1716233.jpg',
  'https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/files/1ee7b0d5-1c87-4065-9beb-78d3cd71b3fd.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/2ce4a918-96ba-45a4-9c76-319fab94ae5c/bucket/4daab502-1117-4bc1-9744-ddb4a5fed6a2.jpg"
                  alt="Графический дизайнер"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white text-black text-xs font-semibold px-3 py-1 tracking-widest uppercase shadow">
                5+ лет
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Графический дизайнер
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Логотипы · Полиграфия · Digital-реклама
                </p>
                <p className="text-base font-light text-white/60 md:text-lg max-w-lg pt-2">
                  5+ лет опыта. Создаю визуальные решения, которые привлекают внимание и работают на бизнес-цели
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium tracking-widest uppercase hover:bg-white/90 transition-colors"
                  >
                    Портфолио
                  </a>
                  <a
                    href="https://t.me/Anastarsea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/50 text-white px-6 py-3 text-sm font-medium tracking-widest uppercase hover:border-white hover:bg-white/10 transition-colors"
                  >
                    Связаться
                  </a>
                </div>
                <div className="flex gap-6 pt-2">
                  <a
                    href="https://t.me/Anastarsea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Telegram"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:kolomiets0055@gmail.com"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label="Email"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}