const BlogPostCard = ({ post, list }) => {
  return (
            /*container*/

    <article
      className={`
        group relative rounded-2xl border border-n-6/60 bg-n-8/80 p-5
        transition-all duration-200 hover:-translate-y-1 hover:border-color-1/80 hover:bg-n-8
        ${list ? "flex flex-col gap-3" : "flex flex-col"}
      `}>



      {/*top part*/}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-n-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-n-6/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-n-3">
            {post.tag}
          </span>
          <span>{post.prettyDate}</span>
        </div>
        <span>{post.readTime}</span>
      </div>
      {/*top part*/}



      {/*title*/}
  
      <h2 className="text-base font-semibold text-n-1 lg:text-lg">
        {post.title}
      </h2>

      {/*title*/}



      {/*summary*/}
      <p className="text-sm text-n-4 leading-relaxed">
        {post.summary}
      </p>
      {/*summary*/}




      {/*down part*/}
      <div className="mt-2 flex items-center justify-between text-xs">
        <button className="font-semibold uppercase tracking-[0.16em] text-color-1/90 transition-colors group-hover:text-color-1">
          ادامه مطلب
        </button>
        <span className="text-n-4 group-hover:text-n-3">
          پست #{post.id.toString().padStart(2, "0")}
        </span>
      </div>
      {/*down part*/}




      {/*lighting when hover*/}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-3xl transition-opacity duration-200 group-hover:opacity-60 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
        {/*lighting when hover*/}

  

    </article>
             /*container*/

);

};


export default BlogPostCard;
