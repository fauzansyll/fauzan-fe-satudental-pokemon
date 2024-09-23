## Neobrutalism Pokemon Website by Fauzan Syahlan

The Website : https://pokemon-fauzan.vercel.app/

<img width="409" alt="Screenshot 2024-09-23 at 09 20 03" src="https://github.com/user-attachments/assets/d6230461-61a1-4c55-be08-a2e1ea190aeb">

## Introduction
This documentation provides an overview of the Pokemon website, which features a paginated list of Pokémon and a Pokedex functionality similar to a shopping cart.

## How to run locally

After work/clone please do
```bash
npm install 
#to install all deppendencies

#tyhen
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open http://localhost:3000 with your browser to see the result.

## Technology Stack
- [Next.js](https://nextjs.org)
- [Axios](https://axios-http.com/docs/intro)
- [CVA](https://cva.style/docs)
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- [Tailwind CSS](https://tailwindcss.com/)

# Unused Stack
this unused stack is installed on purpose due to potential usage in the future
- [SASS](https://sass-lang.com/)

## API 
Create env file and use https://pokeapi.co/api/v2 as primary, there's some functions to handle fetching along with the API

## Project Structure

<img width="195" alt="Screenshot 2024-09-23 at 09 43 06" src="https://github.com/user-attachments/assets/adf776aa-668c-4ead-bec2-adf2db55b87a">

Notes: All interfaces/types stored in one file

## Features

- Catalog: Display a list of Pokemon with pagination controls
- Pokedex: Add and remove Pokemon from a Pokedex, similar to a shopping cart
- Detail: Analize a pokemon with their additional stats (Background is vary due to their type)

## Styling

- Custom theme configuration
- Utility classes used

## Usage

- Navigating the Pokemon list
- Using pagination controls
- Adding Pokémon to the Pokédex
- Removing Pokémon from the Pokédex

## Future Development
With the given time, I've met the requirement that outlined/mentioned but there's some improvement could be make like more reusable components to avoid repeating, I've asked my several close friends that has no technology background to get user feedbacks as soon as possible to tackle user-friendly problem and yet they suggested some minor improvements like button to read more some other suggestions. I've adapted clean code but its not done yet but implemented, because I am focusing on web performance as well to tackle user-friendly problem, maybe with additonal times would be wise to meet perfectly desired website

<img width="1403" alt="Screenshot 2024-09-23 at 09 38 33" src="https://github.com/user-attachments/assets/4e3c9579-50be-4399-8d2b-11ebe31ef182">

<img width="1710" alt="Screenshot 2024-09-23 at 09 39 00" src="https://github.com/user-attachments/assets/b146bdeb-12c7-42ae-a6a4-6eac856be0b7">

<img width="1710" alt="Screenshot 2024-09-23 at 09 39 32" src="https://github.com/user-attachments/assets/e5110bd7-c5c3-4c1d-ba7c-f049127f4345">






