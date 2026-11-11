import {
  Bookmark,
  Calendar,
  Compass,
  Menu,
  PlusCircle,
  Search,
  Sparkle,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);
  return (
    <div className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EBE8DF]">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between h-18 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex gap-8 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className=" w-10 h-10 rounded-2xl bg-linear-to-tr from-[#E65100] to-[#FF8A65] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200 ">
              <Sparkle className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-950 tracking-tight leading-tight">
                EventSphere
              </span>
              <span className="uppercase text-xs text-mauve-500 tracking-wide">
                Curated Conclaves
              </span>
            </div>
          </Link>

          <div className="mx-4 hidden md:flex items-center text-sm gap-2 text-stone-700">
            <Link
              to="/"
              className="transition-all flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 group hover:shadow-md"
            >
              <Compass className="w-4 h-4" />
              <span>Explore</span>
            </Link>

            <Link className="transition-all flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-md">
              <Calendar className="w-4 h-4" />
              <span>Schedule</span>
            </Link>

            <Link className="transition-all flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-md">
              <Bookmark className="w-4 h-4" />
              <span>Saved</span>
            </Link>

            <Link className="transition-all flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-md">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center mx-6 max-w-lg relative">
          <form action="" className="w-full ">
            <Search className="w-4 h-4 text-stone-400 absolute top-3 translate-x-2 pointer-events-none " />
            <input
              type="text"
              placeholder="Search categories, events, veneus...."
              className="outline-none focus:border-[#E65100] focus:ring-[#E65100]/20 rounded-xl w-full pl-6 pr-5 py-2 border border-[#DDD9CE] text-[#222] placeholder-stone-400 transition-all shadow-md"
            />
          </form>
        </div>

        <div className="hidden md:flex gap-2 ">
          <Button>
            <Link className="flex items-center gap-2">
              <PlusCircle />
              <span>Host Event</span>
            </Link>
          </Button>

          <Button variant="tertiary" className="border-dashed">
            <Link className="flex items-center gap-2">
              <span>Coming Soon</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden gap-2">
          <Link to="/explore">
            <button className="p-2 rounded-xl text-stone-700 hover:bg-black/5">
              <Search className="w-5 h-5" />
            </button>
          </Link>
          <Link to="/explore">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl text-stone-700 hover:bg-black/5"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h6" />
              ) : (
                <Menu className="w-6 h6" />
              )}
            </button>
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#EBE8DF] bg-[#FAF9F5] px-4 pt-3 pb-4 ">
          <form action="" className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute top-3 translate-x-1 pointer-events-none " />
            <input
              type="text"
              placeholder="Search categories, events, veneus...."
              className="outline-none focus:border-[#E65100] focus:ring-[#E65100]/20 rounded-xl w-full pl-6 pr-5 py-2 border border-[#DDD9CE] text-[#222] placeholder-stone-400 transition-all shadow-md"
            />
          </form>
          <Link
            to="/"
            className="mt-4  transition-all text-sm flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 group hover:shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Events</span>
          </Link>

          <Link className="transition-all text-sm flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-sm">
            <Calendar className="w-4 h-4" />
            <span>My Schedule</span>
          </Link>

          <Link className="transition-all text-sm flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-sm">
            <Bookmark className="w-4 h-4" />
            <span>Saved Events</span>
          </Link>

          <Link className="transition-all text-sm flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-sm">
            <User className="w-4 h-4" />
            <span>Member Profile</span>
          </Link>

          <Link className="transition-all text-sm flex items-center gap-2 px-3 py-2 rounded-4xl hover:text-black hover:bg-black/3 hover:shadow-sm">
            <PlusCircle />
            <span>Host Event</span>
          </Link>

          <Link className="mt-3 transition-all text-sm flex justify-center items-center gap-2 px-3 py-2 rounded-4xl hover:text-black bg-black/5 shadow-md">
            <span>Sign In & Sign Up - Coming Soon</span>
          </Link>

        </div>
      )}
    </div>
  );
}

export default Navbar;
