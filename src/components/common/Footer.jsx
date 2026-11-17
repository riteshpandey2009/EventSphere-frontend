import { CircleLetterC, ShieldCheckIcon, Sparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto my-5 mb-15 px-4 pt-7 sm:px-6 lg:px-8 flex justify-between">
        <section className="flex-col items-center max-w-md">
          <section className="flex items-center pb-3 gap-3">
            <Sparkles className=" w-8 h-8 px-2 text-white bg-linear-to-tr from-[#E65100] to-[#FF8A65] rounded-xl" />
            <Link
              to="/explore"
              className="text-white font-semibold traking-tight leading-tight"
            >
              EventSphere
            </Link>
          </section>
          <span className="text-white/50">
            A curated platform for India's tech summits, acoustic showcases,
            founder salons, and cultural retreats. Crafted for authentic
            real-world connections.
          </span>
          <section className="flex my-3 items-center text-white/50 text-sm gap-2">
            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
            <span>Admin-verified events for quality & community safety</span>
          </section>
        </section>

        <section className="flex gap-10">
          <div>
            <p className="text-white font-semibold traking-tight leading-tight uppercase text-sm">
              Hubs
            </p>
            <ul className="text-sm">
              <li className="pt-1">
                <Link
                  to="/explore?city=Bengaluru"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Bengaluru (Silicon Plateau)
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/explore?city="
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Mumbai (Arts & Live Indie)
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/explore?city=Delhi NCR"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Delhi NCR (Founders & Conclaves)
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/explore?city=Pune"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Pune (Heritage & Engineering)
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/explore?city=Hyderabad"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Hyderabad (Fintech & Sports)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold traking-tight leading-tight uppercase text-sm">
              Platforms
            </p>
            <ul className="text-sm">
              <li className="pt-1">
                <Link
                  to="/explore"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Browse All Events
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/create-event"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Host an Event
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/schedule"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Personal Schedule Planner
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/favorites"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Saved Collections
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/profile"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  User Profile Dossier
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/dashbord"
                  className="transition-colors text-white/50 hover:text-white/70"
                >
                  Organizer Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="max-w-7xl mx-auto  my-5 px-4 pt-7 sm:px-6 lg:px-8 flex justify-between border-t border-[#2B2A27]">
        <p className="flex text-white/50 text-sm items-center gap-2 pb-5">
          <CircleLetterC className="w-3 h-3" />
          {new Date().getFullYear()} EventSphere. Crafted with intention for
          communities.
        </p>
      </div>
    </div>
  );
}

export default Footer;
