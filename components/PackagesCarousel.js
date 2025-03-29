'use client'  
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import PackagesCard from './PackagesCard';

const PackagesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true });

  const packages = [
    {
      title: "Umrah pilgrimage - concludes in Madinah",
      price: "2200",      
      lastPrice: "3000",
      stars: "4.95",
      popular: false,
      image: "https://media.istockphoto.com/id/891971560/fr/photo/mecque-kaaba.webp?a=1&b=1&s=612x612&w=0&k=20&c=k8ONieosds6PFIrkBhOkTgL9fHmKxAL774NBX4J-GzA="
    },
    {
      title: "Makkah & Madinah - Luxury",
      price: "1200",
      lastPrice: "2000",
      stars: "4.95",
      popular: true,
      image: "https://media.istockphoto.com/id/1310024715/fr/photo/quba-mosque-medina-arabie-saoudite-madinah.webp?a=1&b=1&s=612x612&w=0&k=20&c=2v7WZjPtsStZEHAJ6a4eArfeSPkW93EbQmgStLyg8bg="
    },
    {
      title: "Umrah Package",
      price: "1200",
      lastPrice: "2000",
      stars: "4.5",
      popular: false,
      image: "https://media.istockphoto.com/id/2200532927/fr/photo/kaaba-maison-de-dieu-dans-le-hajj.webp?a=1&b=1&s=612x612&w=0&k=20&c=koyPIQEgug4TLqQxkPJ7wNY4az7d-pfU1bswQcmK_LM="
    },
    {
      title: "Exclusive - Umrah with Address Hotel",
      price: "1200",
      lastPrice: "2000",
      stars: "4.9",
      popular: true,
      image: "https://images.unsplash.com/photo-1639574326077-6cc1d8749395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVtcmFofGVufDB8fDB8fHww"
    },
  ]

  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto select-none pb-10 embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container pl-6 lg:pl-8 cursor-grab">
        {packages.map((p, index) => (
          <PackagesCard
            key={index}
            title={p?.title || "Untitled"}
            imageSrc={p?.image}
            stars={p?.stars}
            lastPrice={"2000"}
            popular={p?.popular || false}
            price={p?.price || "0"}
          />
        ))}
      </div>
    </div>
  );
}

export default PackagesCarousel