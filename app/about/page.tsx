import Head from "next/head";
import SubPageNavBar from "../components/SubPageNavBar";

export default function About() {
  return (
    <>
      <SubPageNavBar />
      <div className="  flex items-center h-screen bg-[#242424] text-white p-4 font-serif tracking-tight">
        <Head>
          <title>About </title>
        </Head>

        <div className="lg:w-[680px] w-[818px] text-left flex flex-col gap-8 h-screen pt-16 sm:pt-32">
          <h1 className="text-[48px] sm:text-[70px] md:[80px] font-serif font-base mb-6">
            Everyone has a story to tell.
          </h1>
          <p className="text-lg font-sans mb-4">
            Medium is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; Medium is quiet yet full of insight.
            Its simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </p>
          <p className="text-lg font-sans mb-4">
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, were building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </p>
          <p className="text-xl font-sans mb-4 bg-[#505050]">
            Ultimately, our goal is to deepen our collective understanding of
            the world through the power of writing.
          </p>
          <p className="text-xl font-sans mb-4 ">
            Over 100 million people connect and share their wisdom on Medium
            every month. Many are professional writers, but just as many
            arent—theyre CEOs, computer scientists, U.S. presidents, amateur
            novelists, and anyone burning with a story they need to get out into
            the world. They write about what theyre working on, whats keeping
            them up at night, what theyve lived through, and what theyve learned
            that the rest of us might want to know too.
          </p>
          <p className="text-xl font-sans mb-4 ">
            Instead of selling ads or selling your data, were supported by a
            growing community of Medium members who align with our mission. If
            youre new here, start exploring. Dive deeper into whatever matters
            to you. Find a post that helps you learn something new, or
            reconsider something familiar—and then share your own story.
          </p>
          {/* ... more content ... */}
        </div>
      </div>
    </>
  );
}
