import FeaturedCarousel from "@/components/FeaturedCarousel";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ChevronRight, Compass, Flame, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const [featuredEvent, setFeaturedEvent] = useState([]);

  useEffect(() => {
    async function getFeaturedEvents() {
      setIsLoading(true);
      try {
        let {
          data: { data },
        } = await axios.get(
          "https://eventsphere-server-mfdb.onrender.com/api/events/featured",
        );
        setFeaturedEvent(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getFeaturedEvents();
  }, []);

  return (
    <div className="w-full">
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

      <section className="max-w-7xl mx-auto px-4 pt-7 sm:px-6 lg:px-8">
        <h2></h2>
      </section>
    </div>
  );
}

