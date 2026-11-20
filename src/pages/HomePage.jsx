import Skeleton from "@/components/common/Skeleton";
import EventCard from "@/components/events/EventCard";
import FeaturedCarousel from "@/components/events/FeaturedCarousel";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  Compass,
  Cpu,
  Flame,
  GraduationCap,
  MapPin,
  Music,
  Palette,
  Sparkles,
  Tag,
  Trophy,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function getCategoryIconComponent(category) {
  const icon = category?.icon || "";

  if (icon === "palette") {
    return Palette;
  }
  if (icon === "briefcase") {
    return Briefcase;
  }
  if (icon === "graduation-cap") {
    return GraduationCap;
  }
  if (icon === "music") {
    return Music;
  }
  if (icon === "trophy") {
    return Trophy;
  }
  if (icon === "trophy") {
    return Trophy;
  }
  if (icon === "cpu") {
    return Cpu;
  }
  return Tag;
}

function getCategoryColor(i) {
  const colors = [
    {
      icon: "bg-orange-50 text-[#E65100] border-orange-200 group-hover:bg-[#E65100] group-hover:text-white",
      text: "group-hover:text-[#E65100]",
    },
    {
      icon: "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
      text: "group-hover:text-blue-600",
    },
    {
      icon: "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
      text: "group-hover:text-emerald-600",
    },
    {
      icon: "bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
      text: "group-hover:text-purple-600",
    },
    {
      icon: "bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white",
      text: "group-hover:text-rose-600",
    },
    {
      icon: "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white",
      text: "group-hover:text-amber-600",
    },
  ];

  return colors[i % colors.length];
}

const HUB_CITIES = [
  {
    name: "Bengaluru",
    label: "Tech & Acoustic Nights",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mumbai",
    label: "Indie Festivals & Art",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Delhi NCR",
    label: "Conclaves & Founder Pitch",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Pune",
    label: "Heritage & Code Labs",
    img: "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=500&q=80",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [trendingEvents, settrendingEvents] = useState([]);

  useEffect(() => {
    async function loadHomePage() {
      setIsLoading(true);
      try {
        let data = await api.get("/api/events/featured");
        setFeaturedEvent(data);
      } catch (error) {}
      try {
        let data = await api.get("/api/categories");
        setCategories(data);
      } catch (error) {}
      try {
        let data = await api.get(
          "/api/events?limit=8&sort=startDate&order=asc",
        );
        settrendingEvents(data);
      } catch (error) {}

      setIsLoading(false);
    }
    loadHomePage();
  }, []);

  return (
    <div className="space-y-16 mt-10 pb-20">
      <section className="max-w-7xl mx-auto px-12 py-4 pt-12 sm:pt-20 sm:pb-16 border-b-2 border-[#EBE8DF]  flex flex-col">
        <div className="px-3.5 py-1.5 my-3 space-x-2 text-xs max-w-xs rounded-full font-medium tracking-wide inline-flex items-center gap-2 bg-orange-100/70 text-[#C2410C] border border-orange-200 ">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="uppercase">
            India's Curated Community Conclaves{" "}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-1 tracking-tight max-w-lg">
          Extraordinary gatherings for curious minds.
        </h1>

        <div className="flex justify-between">
          <p className="max-w-xl text-base font-normal sm:text-md leading-relaxed text-stone-500">
            Discover verified developer summits, acoustic indie evenings,
            founder pitch conclaves, and art retreats across Bengaluru, Mumbai,
            and Delhi NCR.
          </p>
          <div className="flex items-center gap-2">
            <Link to="/explore">
              <Button size="md" variant="primary" className="cursor-pointer">
                <Compass className="w-4 h-4" />
                <span>Explore 40+ Gatherings</span>
              </Button>
            </Link>
            <Link to="/create-event">
              <Button size="md" variant="secondary" className="cursor-pointer">
                <span>Host an Event</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-7 sm:px-6 lg:px-8">
        <div className="flex justify-between pb-4">
          <div className="flex gap-2 items-center ">
            <Flame className="w-5 h-5 text-[#E65100]" />
            <h2 className="text-xl font-semibold text-stone-900 tracking-tight">
              Curated Spotlight
            </h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-2 font-semibold text-xs text-[#E65100] hover:underline"
          >
            Browse All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {isLoading ? (
          <div className="aspect-21/9 rounded-3xl bg-[#EBE8DF] animate-pulse" />
        ) : (
          <FeaturedCarousel events={featuredEvent} />
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">
            Browse by Discipline
          </h2>
          <p className="text-xs text-stone-500">
            Curated tracks dynamically fetched from our active community
            listings
          </p>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-[#EBE8DF] animate-pulse space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-stone-100" />
                <div className="space-y-1.5">
                  <div className="h-3.5 bg-stone-100 rounded w-3/4" />
                  <div className="h-2.5 bg-stone-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {categories?.map((c, i) => {
              const { _id, name, eventCount } = c;
              const Icon = getCategoryIconComponent(c);
              const color = getCategoryColor(i);
              return (
                <Link
                  to="/explore"
                  key={_id}
                  className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 ${color?.icon}`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold text-stone-900 leading-snug ${color?.text} transition-colors`}
                    >
                      {name}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {eventCount} Events
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#EBE8DF]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Upcoming Gatherings
            </h2>
            <p className="text-xs text-stone-500">
              Verified community events happening in the coming days
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs rounded-lg font-medium border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222]"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingEvents.map((e) => {
              return <EventCard key={e.id} event={e} />;
            })}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div>
          <h2 className="text-xl font-bold text-stone-900 tracking-tight">
            Explore by Community Hub
          </h2>
          <p className="text-xs text-stone-500">
            Vibrant hubs where local conclaves thrive
          </p>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-[#EBE8DF] animate-pulse space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-stone-100" />
                <div className="space-y-1.5">
                  <div className="h-3.5 bg-stone-100 rounded w-3/4" />
                  <div className="h-2.5 bg-stone-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HUB_CITIES.map((c, i) => (
              <Link
                to="/explore"
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{c.name}</span>
                  </div>
                  <p className="text-xs text-stone-300 font-medium mt-0.5">
                    {c.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1B18] text-white rounded-3xl p-8 sm:p-12 border border-[#33312B] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
              Empowering Community Hosts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Host your next summit, workshop or indie showcase on EventSphere.
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Every registered user can organize events. Enjoy seamless
              ticketing, automatic calendar syncing, verified attendee reviews,
              and real-time dashboard analytics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/create-event"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#E65100] text-white hover:bg-[#D84315] w-full sm:w-auto shadow-lg"
            >
              Create Event Now
            </Link>
            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl w-full sm:w-auto bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              Organizer Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
