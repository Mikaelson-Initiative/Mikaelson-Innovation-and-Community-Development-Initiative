import { motion } from "motion/react";

export default function IntroVideo() {
  return (
    <>
      <div
        className="flex flex-col  md:flex-row max-w-full md:gap-5  py-30 flex-1 items-center gap-10 md:px-10"
        data-aos="fade-left"
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="flex aspect-video w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
        >
          <iframe
            className="h-full w-full rounded-md"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/x8nYGAWlLnQ?autoplay=1&mute=0&loop=1&playlist=x8nYGAWlLnQ"
            title="Mikaelson Initiative Video"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <div className="flex flex-col md:max-w-[50%] w-full space-y-5">
          <div className="spave-y-3">
            <h2 className="text-[2.3rem] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
              Meet Mikaelson!
            </h2>
          </div>

          <div className="flex flex-col space-y-4">

          <p className="text-lg md:text-[1.1rem] dark:text-white  text-[#111111]">
            Behind every impactful movement is a clear vision. Meet the mind and
            mission driving The Mikaelson Initiative, a youth-focused leadership
            platform committed to equipping African students with a structured
            growth system.
          </p>
          <p className="text-lg md:text-[1.1rem] dark:text-white text-[#111111]">
            This short video highlights our problem statement, the story, the conviction, and the long-term
            vision behind our youth leadership and personal development programs
            across Nigeria and Africa.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
