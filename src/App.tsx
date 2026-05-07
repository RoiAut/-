/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Instagram, CheckCircle2, ChevronRight, Star, Quote, ArrowUp } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: "Елена С.",
    date: "12 октября 2025",
    text: "Отмечали свадьбу в банкетном зале «История». Все прошло на высшем уровне! Очень стильный интерьер, высокие потолки создают ощущение простора. Отдельное спасибо за вкусное меню и внимание к каждой детали.",
    rating: 5,
  },
  {
    id: 2,
    author: "Михаил В.",
    date: "4 сентября 2025",
    text: "Прекрасное место! Праздновали юбилей, гости остались в восторге. Очень удобно, что есть просторная парковка и уютная детская комната. Сервис на 5 звезд.",
    rating: 5,
  },
  {
    id: 3,
    author: "Анна Д.",
    date: "20 августа 2025",
    text: "Спасибо команде зала «История» за наш идеальный праздник. Зал очень красивый, даже не требовалось дополнительного декора. Еда превосходная, подача блюд ресторанного уровня.",
    rating: 5,
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const heroImages = ['/bank1.jpg', '/bank2.jpg', '/bank3.jpg'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [heroImages.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans text-sand-900 selection:bg-accent selection:text-white flex flex-col">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* If user uploaded the logo to standard path, we try to use it here. Otherwise fallback to text */}
            <img src="/logoo.jpg" alt="История" className="h-10 w-auto object-contain rounded" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <span className="font-serif text-2xl font-semibold tracking-wide text-sand-900">История</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-sand-700 hover:text-accent transition-colors">Преимущества</a>
            <a href="#reviews" className="text-sm font-medium text-sand-700 hover:text-accent transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium text-sand-700 hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-sand-100">
        <div className="absolute inset-0 z-0 overflow-hidden bg-sand-100">
           <AnimatePresence mode="wait">
             <motion.img
               key={`hero-${currentImageIdx}`}
               src={heroImages[currentImageIdx]}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="absolute inset-0 w-full h-full object-cover"
             />
           </AnimatePresence>
           {/* Center Mask Overlay so text is readable */}
           <div 
             className="absolute inset-0 hidden sm:block"
             style={{
               background: 'linear-gradient(to right, transparent 0%, var(--color-sand-100) 15%, var(--color-sand-100) 85%, transparent 100%)'
             }}
           ></div>
           
           <div 
             className="absolute inset-0 sm:hidden"
             style={{
               background: 'linear-gradient(to top, transparent 0%, var(--color-sand-100) 25%, var(--color-sand-100) 80%, transparent 100%)'
             }}
           ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold tracking-wider uppercase text-accent">Магнитогорск</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium text-sand-900 mb-6 max-w-4xl tracking-tight leading-tight"
          >
            Зал торжеств <br/><span className="text-accent italic">«История»</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-sand-700 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Абсолютно новое и стильное пространство, созданное с любовью для Ваших уникальных событий!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="tel:+79048020590" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20">
              Забронировать дату
            </a>
            <a href="https://vk.com/istoriya_zal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-sand-900 bg-white border border-sand-200 rounded-full hover:border-accent hover:text-accent transition-all active:scale-95">
              Мы ВКонтакте
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-sand-900 mb-6">
                Всё для Вашего комфорта
              </h2>
              <p className="text-sand-700 mb-8 leading-relaxed text-lg">
                Наше меню разнообразно и подойдет на любой вкус. Мы работаем индивидуально с каждым гостем и учтем все Ваши пожелания. Ждем Вас для создания незабываемых историй 🤎
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Вместимость до 140 персон",
                  "Просторная гардеробная",
                  "Уютный холл",
                  "Детская комната",
                  "Гримерка для ведущих",
                  "Высокие потолки",
                  "Большая зона парковки",
                  "Индивидуальное меню"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sand-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-square bg-white rounded-2xl overflow-hidden relative border border-sand-200 p-8 flex flex-col items-center justify-between shadow-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand-300/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
                
                <div className="relative z-10 w-full flex-grow flex items-center justify-center p-4">
                  <img src="/logoo.jpg" alt="История Лого" className="w-full max-w-[280px] object-contain opacity-95 mix-blend-multiply drop-shadow-sm" />
                </div>
                
                <div className="relative z-10 w-full mt-6 text-center">
                  <Quote className="w-6 h-6 text-accent/30 mx-auto mb-3" />
                  <p className="text-xl font-serif text-sand-900 leading-snug mb-5">
                    "Место, где рождаются лучшие воспоминания."
                  </p>
                  <a href="https://yandex.ru/maps/org/istoriya/211532867610/?ll=58.978542%2C53.350369&z=17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-accent hover:text-sand-900 transition-colors">
                    Посмотреть на карте <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-sand-900 mb-4">
              Отзывы наших гостей
            </h2>
            <p className="text-sand-700">
              Каждое мероприятие — это новая история. Мы гордимся тем, что вы доверяете нам свои самые важные дни.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-sand-100 flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sand-800 mb-6 flex-grow leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-sand-900">{review.author}</span>
                  <span className="text-sand-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://yandex.ru/maps/org/istoriya/211532867610/reviews/?ll=58.978542%2C53.350369&z=17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-sand-900 bg-transparent border border-sand-300 rounded-full hover:border-sand-900 transition-all">
              Читать все отзывы на Яндекс Картах
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="bg-sand-900 text-sand-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 border-b border-sand-800 pb-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-2xl font-semibold tracking-wide text-white">История</span>
              </div>
              <p className="text-sand-400 mb-6 max-w-sm">
                Банкетный зал созданный для вашего комфорта. Вместимость до 140 персон.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium text-lg mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <a href="https://yandex.ru/maps/org/istoriya/211532867610/?ll=58.978542%2C53.350369&z=17" target="_blank" rel="noopener noreferrer" className="text-sand-300 hover:text-white transition-colors">
                    г. Магнитогорск,<br/> ул. Карла Маркса 232/1
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href="tel:+79048020590" className="text-sand-300 hover:text-white transition-colors">+7 (904) 802-05-90</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-medium text-lg mb-6">Мы в соцсетях</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/istoriya.zal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sand-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M15.071 2.942C16.812 2.942 16.924 2.942 17.514 2.969C18.239 3.003 18.665 3.136 18.956 3.25C19.349 3.402 19.638 3.593 19.932 3.887C20.226 4.181 20.417 4.47 20.57 4.864C20.684 5.155 20.817 5.581 20.851 6.306C20.878 6.896 20.878 7.008 20.878 8.749V15.251C20.878 16.992 20.878 17.104 20.851 17.694C20.817 18.419 20.684 18.845 20.57 19.136C20.417 19.529 20.226 19.818 19.932 20.112C19.638 20.406 19.349 20.597 18.956 20.75C18.665 20.864 18.239 20.997 17.514 21.031C16.924 21.058 16.812 21.058 15.071 21.058H8.929C7.188 21.058 7.076 21.058 6.486 21.031C5.761 20.997 5.335 20.864 5.044 20.75C4.651 20.597 4.362 20.406 4.068 20.112C3.774 19.818 3.583 19.529 3.43 19.136C3.316 18.845 3.183 18.419 3.149 17.694C3.122 17.104 3.122 16.992 3.122 15.251V8.749C3.122 7.008 3.122 6.896 3.149 6.306C3.183 5.581 3.316 5.155 3.43 4.864C3.583 4.47 3.774 4.181 4.068 3.887C4.362 3.593 4.651 3.402 5.044 3.25C5.335 3.136 5.761 3.003 6.486 2.969C7.076 2.942 7.188 2.942 8.929 2.942H15.071ZM15.071 1.001H8.929C7.165 1.001 6.945 1.008 6.326 1.037C5.542 1.072 5.006 1.231 4.542 1.411C4.062 1.597 3.652 1.848 3.239 2.261C2.826 2.674 2.575 3.084 2.389 3.564C2.209 4.028 2.05 4.564 2.015 5.348C1.986 5.967 1.979 6.187 1.979 7.951V16.049C1.979 17.813 1.986 18.033 2.015 18.652C2.05 19.436 2.209 19.972 2.389 20.436C2.575 20.916 2.826 21.326 3.239 21.739C3.652 22.152 4.062 22.403 4.542 22.589C5.006 22.769 5.542 22.928 6.326 22.963C6.945 22.992 7.165 22.999 8.929 22.999H15.071C16.835 22.999 17.055 22.992 17.674 22.963C18.458 22.928 18.994 22.769 19.458 22.589C19.938 22.403 20.348 22.152 20.761 21.739C21.174 21.326 21.425 20.916 21.611 20.436C21.791 19.972 21.95 19.436 21.985 18.652C22.014 18.033 22.021 17.813 22.021 16.049V7.951C22.021 6.187 22.014 5.967 21.985 5.348C21.95 4.564 21.791 4.028 21.611 3.564C21.425 3.084 21.174 2.674 20.761 2.261C20.348 1.848 19.938 1.597 19.458 1.411C18.994 1.231 18.458 1.072 17.674 1.037C17.055 1.008 16.835 1.001 15.071 1.001Z"/><path d="M12 6.342V6.341C8.875 6.341 6.341 8.875 6.341 12C6.341 15.125 8.875 17.659 12 17.659C15.125 17.659 17.659 15.125 17.659 12C17.659 8.875 15.125 6.342 12 6.342ZM12 15.719C9.946 15.719 8.281 14.054 8.281 12C8.281 9.946 9.946 8.281 12 8.281C14.054 8.281 15.719 9.946 15.719 12C15.719 14.054 14.054 15.719 12 15.719Z"/><path d="M18.406 6.903C18.406 7.618 17.826 8.198 17.11 8.198C16.395 8.198 15.815 7.618 15.815 6.903C15.815 6.188 16.395 5.608 17.11 5.608C17.826 5.608 18.406 6.188 18.406 6.903Z"/></svg>
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="https://vk.com/istoriya_zal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sand-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-sand-800 flex items-center justify-center">
                    <span className="font-bold font-serif text-sm">VK</span>
                  </div>
                  <span>ВКонтакте</span>
                </a>
              </div>
            </div>
            
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sand-500">
            <p>&copy; {new Date().getFullYear()} Банкетный зал «История».</p>
            <p className="mt-2 md:mt-0">Магнитогорск, Россия</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-accent text-white rounded-full shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all focus:outline-none active:scale-95 cursor-pointer"
            aria-label="Наверх"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
