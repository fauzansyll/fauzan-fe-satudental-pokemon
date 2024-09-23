import React from "react";
import Template from "../atoms/template";
import Profile from "../molecules/profile";
import { Box } from "../atoms/box";
import Button from "../atoms/button";

import Link from "next/link";
import Activity from "./activity";

const Hero = ({ ...props }) => {
  return (
    <div id="home" className="bg-neored-200 " {...props}>
      <Template>
        <div className="flex md:flex-row gap-5 mt-5 md:gap-12 flex-col-reverse mb-24 items-center">
          <div className=" w-full md:w-2/3 flex flex-col">
            <Box>
              Discover Your Favorite Pokémon! whether you&apos;re a seasoned
              Trainer or just starting your journey, our tool helps you find the
              Pokémon that best matches your style and personality. Let us guide
              you to your perfect companion!
              <div className="flex justify-between mt-5">
                <Link href="#pokedex">
                  <Button type="medium" color="neocyan">
                    Find your pokemon !
                  </Button>
                </Link>
              </div>
            </Box>
          </div>
          <Profile
            gambar="/pokemonlogo.png"
            className=" w-full flex justify-center md:w-1/3"
          />
        </div>
        <Activity />
      </Template>
    </div>
  );
};

export default Hero;
