    /*what is happening at blog page*/

import SchedulePageHeader from "../components/SchedulePageHeader";
import Footer from "../components/Footer";
import Section from "../components/Section";
import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../constants/blogPosts";

const BlogPage = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    {/*Header*/}
      
        {/*this page has same header as schedulepage*/}
        <SchedulePageHeader />

        <Section id="blog" customPadding="py-12 lg:py-16">
  
    {/*Making Page RTL*/}
          <div className="container" dir="rtl">
      {/*Making Page RTL*/}


    {/*Header For Body*/}
            <div className="mb-10 lg:mb-12 text-right">
             
              <h1 className="mb-3 text-2xl font-semibold text-n-1 lg:text-3xl">
برنامه نویس شو              </h1>

            </div>
    {/*Header For Body*/}


    {/*search bar*/}
            <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">



    {/*some changes to search bar*/}
              <div className="w-full md:max-w-md">
                <div className="flex items-center gap-2 rounded-xl border border-n-6/60 bg-n-8/80 px-4 py-2">
                  <input
                    type="text"
                    placeholder="جستجو در بین پست‌ها..."
                    className="w-full bg-transparent text-sm text-n-1 outline-none placeholder:text-n-4"
                    dir="rtl"
                  />
                  <span className="text-[10px] text-n-4 uppercase tracking-[0.16em]">
search
                  </span>
                </div>
              </div>
    {/*some changing to search bar*/}

          </div>
    {/*search bar*/}


    {/*list text*/}
            <div className="flex flex-col gap-5">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} list />
              ))}
            </div>
          </div>
     {/*list text*/}

        </Section>
        <Footer/>
      </div>
    </>
  );
};

export default BlogPage;
