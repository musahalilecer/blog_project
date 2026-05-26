import React from "react";
import Image from "../atoms/Image";
import { blogs } from "../../data/blogs";
import { useParams } from "react-router-dom";
import comments from "../../data/comments";
// import { Link } from "react-router-dom"; // Uncomment if you want the back link

const Detail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center text-xl text-red-600">
        Blog bulunamadı.
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl flex flex-col lg:flex-row gap-10 lg:gap-16">
      {/* LEFT: Image & Meta */}
      <section className="lg:w-1/2 flex flex-col gap-6">
        <Image
          src={blog.imageUrl}
          alt={blog.name}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
        <header>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{blog.name}</h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>— {blog.authorName}</span>
            <span className="mx-1">·</span>
            <span>{blog.date}</span>
            <span className="mx-1">·</span>
            <span className="text-blue-600 font-semibold">{blog.commentCount} yorum</span>
          </div>
        </header>
      </section>

      {/* Divider for large screens */}
      <div className="hidden lg:block w-px bg-gray-200 mx-2"></div>

      {/* RIGHT: Content & Comments */}
      <section className="lg:w-1/2 flex flex-col gap-8">
        {/* Blog Content */}
        <article>
          <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
        </article>

        {/* Comments */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Yorumlar</h2>
          <ul className="space-y-4">
            {comments.length === 0 ? (
              <li className="text-gray-500 italic">Henüz yorum yok.</li>
            ) : (
              comments.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow transition-shadow"
                >
                  {/* Avatar/Initials */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {c.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{c.author}</p>
                    <p className="mt-1 text-gray-700">{c.text}</p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </section>

        {/* Back Link (optional) */}
        {/* <Link
          to="/"
          className="inline-block mt-6 text-blue-700 font-medium hover:underline transition"
        >
          ← Ana sayfaya dön
        </Link> */}
      </section>
    </main>
  );
};

export default Detail;
