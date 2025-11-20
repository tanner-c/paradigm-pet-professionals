const placeholderAvatarSvg = (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="5" stroke="#CCCCCC" strokeWidth="2" />
    <path d="M4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21" stroke="#CCCCCC" strokeWidth="2" />
  </svg>
);

export default function BlogPost(
  {
    author,
    title,
    date,
    image,
    children
  }: {
    author: string,
    title: string,
    date: string,
    image: string,
    children: React.ReactNode
  }
) {
  return (
    <div className="prose lg:prose-xl mx-auto my-8">
      <div
        className={`
          relative
          w-full 
          bg-center 
          bg-cover
          h-64 
          md:h-96 
          mb-6 
          rounded-lg 
          overflow-hidden
        `}
        style={{ backgroundImage: `url(${image})` }}>
        <h1 className="
            absolute
            bottom-0
            left-0
            w-full
            text-3xl
            md:text-5xl
            font-extrabold
            text-white
            leading-tight
            p-6
            bg-black/50
            rounded-b-lg
          ">
          {title}
        </h1>
      </div>

      <div className="lg:w-8/12 mx-auto">
        {children}

        <hr className="my-8" />
        <div className="text-md mt-8 text-gray-600 flex items-center gap-4">
          <div className="shadow-md bg-gray-100 rounded-full p-1 w-12 h-12 flex items-center justify-center">
            {placeholderAvatarSvg}
          </div>
          <p>By {author} - Published on {new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}