import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

import { db } from "~/utils/db.server";
import type { Joke } from "@prisma/client";
import { Link, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  return json({ randomJoke });
};

type LoaderData = {
  randomJoke: Joke;
};

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's the hilarious joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to=".">{data.randomJoke.name} Permalink</Link>
    </div>
  );
}
