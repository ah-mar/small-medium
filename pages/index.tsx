import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import {sanityClient, urlFor} from "../sanity"
import { Post } from "../typings";

interface Props {
  posts: [Post]
}

export default function Home({posts}: Props) {
//const Home: NextPage = (props: Props) => {
  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Mockup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between  bg-yellow-400 border-y border-black py-10 lg:py-0 ">
        <div className="p-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              Medium{" "}
            </span>{" "}
            is a place to write, read and connect.
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="Medium-Logo"
        />
      </div>
      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap p-2 lg:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer border rounded-lg overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out "
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex items-center justify-between space-x-5 p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <div>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
  title,
  _id,
  slug,
  author -> {
  name,
  image
},
 description,
mainImage
}`;
  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts
    }
  }
}


