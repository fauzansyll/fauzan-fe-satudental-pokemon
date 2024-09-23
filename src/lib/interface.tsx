import React from "react";

export interface Fetch {
  url: string;
}

export interface ProfileProps {
  gambar: string;
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ToastProps {
  message: string;
}

export interface TemplateProps {
  children: React.ReactNode;
}

export interface CardProps {
  name: string;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  onClick: () => void;
  actions?: () => void;
  usage: string;
}

export interface ModalProps {
  children: React.ReactNode;
}
export interface InputTextProps {
  placeholder?: string;
  value: string;
  text: string;
  setSearch: (value: string) => void;
}

export interface ButtonProps {
  type: string;
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: string;
}

export interface PokemonDetail {
  name: string;
  types: Array<{ type: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  base_experience: number;
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

export interface AppContextType {
  pokedex: string[];
  setPokedex: React.Dispatch<React.SetStateAction<string[]>>;
  total: number | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  data?: PokemonDetail[];
}

export interface AppProviderProps {
  children: React.ReactNode;
}
