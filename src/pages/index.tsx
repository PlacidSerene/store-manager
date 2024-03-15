import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const { data, isLoading } = api.post.getLatest.useQuery();
  if (isLoading) return <div>...Loading</div>;
  if (!data) return <div>Something went wrong</div>;
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world!</h1>
        <p className="text-2xl text-black">{data.name}</p>
      </main>
    </>
  );
}
