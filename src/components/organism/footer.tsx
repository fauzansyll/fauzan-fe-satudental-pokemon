import React, { useState } from "react";
import Template from "../atoms/template";
import Logo from "../atoms/logo";
import { InputText } from "../atoms/input";
import Button from "../atoms/button";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(true);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };
  return (
    <div className="border-t-4   text-black py-8">
      <Template>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Logo />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Connect with Us</h1>
            <p className="mt-2">Phone: +123 456 7890</p>
            <p>Email: support@pokemonworld.com</p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Explore</h1>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/pokedex" className="hover:text-neored-300">
                  Pokédex
                </Link>
              </li>
              <li>
                <Link href="/regions" className="hover:text-neored-300">
                  Regions
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-neored-300">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/battles" className="hover:text-neored-300">
                  Battles
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Stay Updated</h1>
            {subscribed ? (
              <div className="flex flex-col gap-2">
                <p className="mt-2">
                  Sign up for our newsletter to receive the latest updates and
                  Pokémon news!
                </p>
                <InputText text="Email" value={email} setSearch={setEmail} />
                <Button onClick={handleSubscribe} type="full">
                  Subscribe
                </Button>
              </div>
            ) : (
              <p>Thank you for subscribing!</p>
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Pokémon World. All rights reserved.</p>
        </div>
      </Template>
    </div>
  );
};

export default Footer;
