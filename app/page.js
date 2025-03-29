import { FaArrowRightLong } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import PackagesCarousel from "@/components/PackagesCarousel";
import DownloadOurApp from "@/components/DownloadOurApp";
import CategoriesCarousel from "@/components/CategoriesCarousel";
import Link from "next/link";

export default function Home() {
  const offers = [
    {
      label: "Hajj offer",
      image:
        "https://media.istockphoto.com/id/2144109393/fr/photo/the-place-where-muslims-visit-for-pilgrimage-and-umrah-kaaba-mecaa-muslims-performing.webp?a=1&b=1&s=612x612&w=0&k=20&c=FwQAepyAQwUBk28Q5G58IMOr8iwNitKI8MgTl4pBrcc=",
    },
    {
      label: "Umrah offer",
      image:
        "https://media.istockphoto.com/id/490586878/fr/photo/pasajul-macca-kabe.webp?a=1&b=1&s=612x612&w=0&k=20&c=GrIxdSwwJw0ddQKCkUO7qbwpMPmmyt3l4F5kedWzXns=",
    },
    {
      label: "Hotel booking",
      image:
        "https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww",
    },
    {
      label: "Flight booking",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fHww",
    },
  ];

  const umrahPackages = [
    {
      title: "Budget Umrah Packages",
      description:
        "These packages focus on offering a comfortable and affordable Umrah experience. They typically include basic accommodation, transportation, and visa processing assistance.",
      price: "£600",
      active: false,
    },
    {
      title: "Standard Umrah Packages",
      description:
        "These packages offer a good balance between affordability and comfort. They may include mid-range hotels closer to the Haram, additional meals, and more comprehensive guidance.",
      price: "£800",
      active: true,
    },
    {
      title: "Luxury Umrah Packages",
      description:
        "These packages cater to those seeking a luxurious and pampered experience. They may include premium hotels near the Haram, VIP services, and exclusive access to certain amenities.",
      price: "£1000",
      active: false,
    },
  ];

  const renderOffers = (data) => (
    <>
      {data?.map((offer, index) => (
        <div
          key={index}
          className="rounded-3xl relative bg-black/60 dark:bg-black/70 aspect-square h-[230px] w-full overflow-hidden group"
        >
          {/* Image with enhanced hover effect */}
          <img
            className="rounded-3xl absolute inset-0 object-cover object-left-top h-full w-full transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            src={offer?.image}
            alt={`${offer?.label} promotional photo`}
            loading="lazy"
          />

          {/* Dual-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100" />

          {/* Text with refined animation */}
          <div className="flex h-full items-center justify-center">
            <div className="relative z-10 text-center p-4">
              <p className="first-letter:uppercase text-4xl font-semibold text-white transform transition-all duration-700 group-hover:scale-105 group-hover:translate-y-[-5%]">
                {offer?.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  const renderPackages = (data) => (
    <>
      {data?.map((p, index) => (
        <div
          key={index}
          className={`
            group relative overflow-hidden
            border ${p.active ? "border-gray-200 dark:border-gray-600" : "border-transparent"}
            hover:border-gray-200 dark:hover:border-gray-600
            duration-400 mb-4 p-6 rounded-2xl
            transition-all transform hover:scale-[1.03]
            bg-white/90 dark:bg-gray-800/90
            hover:shadow-md dark:hover:shadow-lg
            hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50
          `}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0 dark:via-gray-700/30"></div>
  
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-medium mb-2 text-gray-900 dark:text-white">
              {p?.title} - <span className="text-green-600 dark:text-green-400">{p?.price}</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {p?.description}
            </p>
          </div>
  
          {/* Active indicator */}
          {p.active && (
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="">
      <main className="bg-white dark:bg-gray-900">
        {/* hero section start */}
        <section className="bg-gradient-to-b from-[#7FD893]/60 dark:from-[#1a472a]/80 relative -top-30">
          {/* Main gradient background (light/dark variants) */}
          <div className="bg-gradient-to-b from-[#7FD893] to-white dark:from-[#1a472a] dark:to-gray-900 rounded-b-full blur-3xl -z-10 h-[60%] absolute inset-x-1/2 top-0"></div>

          {/* Content with proper dark mode text contrast */}
          <div className="flex items-center justify-center pt-[200px] 2xl:max-w-7xl 2xl:mx-auto">
            <h2 className="text-[55px] font-bold md:text-[70px] text-gray-800 dark:text-white/90 text-center px-4 mx-auto">
              Affordable Hajj & Umrah Packages
            </h2>
          </div>
        </section>
        {/* hero section end */}

        <CategoriesCarousel />

        <div className="relative -top-16">
          <PackagesCarousel />
        </div>

        {/* Exclusive offers start */}
        <section>
          <div className="2xl:max-w-7xl 2xl:mx-auto relative flex items-center justify-between px-8">
            <h1 className="text-xl md:text-2xl font-bold ml-4 lg:ml-6 text-gray-900 dark:text-white">
              Exclusive offers
            </h1>

            <button
              className="hover:cursor-pointer duration-400 capitalize font-medium py-1.5 md:py-2.5 px-4 flex items-center rounded-full  bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-white transition-all"
              aria-label="View all offers"
            >
              <p className="text-lg font-semibold">View All</p>
              <FaArrowRightLong className="ml-2" />
            </button>
          </div>
          <div className="mt-2">
            <PackagesCarousel />
          </div>
        </section>

        {/* Exclusive offers end */}

        {/* what do we offer section start */}
        <section className="mt-32 2xl:max-w-7xl 2xl:mx-auto select-none px-8">
          <div className="px-4 md:px-6 lg:px-8">
            <h1 className="first-letter:uppercase text-4xl md:text-5xl lg:text-6xl font-medium text-center text-gray-900 dark:text-white/90 tracking-tight leading-tight">
              What Do We Offer
            </h1>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderOffers(offers)}
          </div>
        </section>
        {/* what do we offer section end */}

        {/* Our packages & offers section start */}
        <section className="mt-32 2xl:max-w-7xl 2xl:mx-auto select-none px-4 sm:px-6 lg:px-8">
          {/* Heading with dark mode support */}
          <h1 className="first-letter:uppercase text-4xl sm:text-5xl lg:text-6xl font-medium text-left ml-4 sm:ml-8 text-gray-900 dark:text-white/90">
            Our Packages & Offers
          </h1>

          {/* Content container */}
          <div className="flex flex-col-reverse md:flex-row items-start gap-8 px-4 sm:px-8 mt-12">
            {/* Packages column */}
            <div className="w-full md:w-1/2">
              {renderPackages(umrahPackages)}

              {/* CTA buttons with dark mode */}
              <div className="space-x-4 md:space-x-0 md:w-sm flex md:justify-between items-center">
                <button className="cursor-pointer capitalize text-sm hover:bg-green-400 bg-green-500 text-white px-6 py-3 rounded-full">
                  Check package availability
                </button>
                <span className="uppercase text-gray-400 text-sm">OR</span>
                <Link
                  href={"#"}
                  className="underline text-sm text-gray-800 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                >
                  Contact us
                </Link>
              </div>
            </div>

            {/* Image column */}
            <div className="w-full md:w-1/2 group relative overflow-hidden rounded-3xl lg:rounded-[2.5rem]">
              <img
                className="rounded-3xl lg:rounded-[2.5rem] object-cover object-center w-full aspect-square transform transition-all duration-700 group-hover:scale-105"
                src="https://images.unsplash.com/photo-1624171156512-077b7a150e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW1yYWh8ZW58MHx8MHx8fDA%3D"
                alt="Beautiful view of the Kaaba during Umrah"
                loading="lazy"
              />

              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated text overlay */}
              <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-lg md:text-xl font-semibold text-center transform transition-all duration-500 group-hover:scale-105">
                  Explore Our Umrah Packages
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Our packages & offers section end */}

        {/* Our packages & offers section start */}
        <section className="mt-32 2xl:max-w-7xl 2xl:mx-auto select-none">
          <div className="flex flex-col md:flex-row gap-8 px-8 mt-12">
            <div className="relative w-full md:w-1/2 group overflow-hidden rounded-4xl">
              <img
                className="rounded-4xl object-cover object-center w-full aspect-square transform transition-all duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1633546707050-88e2b545831c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFra2FofGVufDB8fDB8fHww"
                alt="packages list photo"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 dark:from-black/70"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-white text-lg font-semibold text-center dark:text-gray-100">
                  Explore Our Umrah Packages
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between md:w-1/2">
              <div className="">
                <h2 className="text-lg font-normal uppercase dark:text-gray-300">
                  WHO WE ARE
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed">
                  Welcome to Dream UK, your trusted partner in spiritual
                  journeys. Located in the heart of London.
                </p>
                <br></br>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Our mission is to make your pilgrimage to the holy cities of
                  Mecca and Medina a truly enriching and stress-free experience.
                  With our office situated in one of the most vibrant and
                  diverse cities in the world, we cater to the unique needs of
                  the Muslim community across the United Kingdom and beyond.
                  <br />
                  <br />
                  Our dedicated team is always ready to assist you with any
                  queries or concerns.
                </p>
              </div>
              <div className="grid gap-4 grid-cols-2 2xl:grid-cols-3 mt-12 space-x-4 space-y-4 lg:space-x-6 max-w-full">
                <div className="flex items-start space-x-4">
                  <div className="border border-gray-200 dark:border-gray-600 rounded-full p-2">
                    <IoLocationSharp className="text-green-500 dark:text-green-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="capitalize text-gray-500 dark:text-gray-400 text-sm">
                      Adress
                    </p>
                    <p className="capitalize text-gray-900 dark:text-gray-200 text-xs mt-1">
                      Rabat, Morocco
                    </p>
                  </div>
                </div>

                <div className="w-max flex items-start space-x-4">
                  <div className="border border-gray-200 dark:border-gray-600 rounded-full p-2">
                    <RiWhatsappFill className="text-green-500 dark:text-green-400 w-6 h-6" />
                  </div>
                  <div>
                    <Link
                      target="_blank"
                      href={"https://web.whatsapp.com/send?phone=212642899597"}
                      className="dark:text-gray-200"
                    >
                      <p className="capitalize text-gray-500 dark:text-gray-400 text-sm">
                        Whatsapp Number
                      </p>
                      <p className="capitalize text-gray-900 dark:text-gray-200 text-xs mt-1">
                        +212642899597
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="w-max">
                  <Link
                    className="flex items-start space-x-4 dark:text-gray-200"
                    href={"mailto:+saadazzouzi4@gmail.com"}
                  >
                    <div className="border border-gray-200 dark:border-gray-600 rounded-full p-2 w-max">
                      <MdMarkEmailUnread className="text-green-500 dark:text-green-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="capitalize text-gray-500 dark:text-gray-400 text-sm">
                        Mail
                      </p>
                      <p className="lowercase text-gray-900 dark:text-gray-200 text-xs mt-1">
                        saadazzouzi4@gmail.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our packages & offers section end */}

        {/* our app presentation start */}
        <DownloadOurApp />
        {/* our app presentation end */}
      </main>
    </div>
  );
}
