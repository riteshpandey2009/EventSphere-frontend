import React from "react";
import { Link } from "react-router";
import { Compass, House } from "lucide-react";
import { Button } from "@/components/ui/button";
function NotFound() {
  return (
    <div className="min-h-[60vh] bg-white overflow-x-hidden w-full max-w-sm lg:max-w-xl md:max-w-lg sm:max-w-md my-30 mx-auto flex items-center justify-center flex-wrap text-center border-2 border-stone-200 rounded-4xl">
      <section className="">
        <p className="text-stone-300 text-8xl font-extrabold font-mono pb-3 ">
          404
        </p>
        <p className="text-2xl font-medium pb-3">Experience Not Found</p>
        <p className="pb-3 text-slate-600 max-w-sm font-serif tracking-widest">
          The page you're searching has concluded or moved to new route
        </p>
        <section className="flex justify-center gap-4 pt-4 selection:">
          <Button
            size="md"
            variant="secondary"
            className=""
          >
            <House className="" />
            <Link to={"/"}>Home</Link>
          </Button>

          <Button
            size="md"
            variant="primary"
            className=""
          >
            <Compass className="text-white" />
            <Link to={"/"}>Browse Gatherings</Link>
          </Button>
        </section>
      </section>
    </div>
  );
}

export default NotFound;
