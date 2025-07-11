'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowRoaderWorks() {
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [centerRef, centerInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const centerControls = useAnimation();

  useEffect(() => {
    if (leftInView) leftControls.start({ opacity: 1, x: 0, y: 0 });
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (rightInView) rightControls.start({ opacity: 1, x: 0, y: 0 });
  }, [rightInView, rightControls]);

  useEffect(() => {
    if (centerInView) centerControls.start({ opacity: 1, scale: 1, rotate: 0 });
  }, [centerInView, centerControls]);

  return (
    <section
      id="about"
      className="py-20 font-dm bg-white text-center relative overflow-hidden px-4 sm:px-8 lg:px-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">How MBM Promotion Works</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12 sm:mb-16 text-sm sm:text-base leading-relaxed">
        We connect your brand to real audiences through Audio Ring Back Tone (Ad-RBT) campaigns — short, catchy, and heard every time someone makes a call.
      </p>

      <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-7xl mx-auto gap-12 lg:gap-24">
        {/* Left Side Steps */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={leftControls}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-right max-w-xs lg:max-w-[280px] self-start lg:self-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-sm flex flex-col items-end mb-8 cursor-pointer mx-auto lg:mx-0"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Create a Branded RBT</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              We help you craft a short, impactful audio message that represents your brand perfectly.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-sm flex flex-col items-end cursor-pointer mx-auto lg:mx-0"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Reward Subscribers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Users get free data or voice packages when they activate your RBT — boosting engagement.
            </p>
          </motion.div>
        </motion.div>

        {/* Center Phone Image */}
        <div className="relative mx-0 my-8 lg:my-0 flex items-center justify-center" ref={centerRef}>
          <motion.div
            className="absolute bottom-[-20px] rounded-full w-60 sm:w-72 h-60 sm:h-72 bg-green-100 mx-auto"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
            aria-hidden="true"
          />
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={centerControls}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/d.png"
              alt="App Screenshot"
              width={280}
              height={560}
              className="relative select-none max-w-[280px] w-full h-auto"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Right Side Steps */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={rightControls}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-left max-w-xs lg:max-w-[280px] self-start lg:self-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-sm flex flex-col items-start mb-8 cursor-pointer mx-auto lg:mx-0"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Sponsor the Campaign</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              You pay only per subscriber and per listen — fully trackable and cost-effective.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="max-w-sm flex flex-col items-start cursor-pointer mx-auto lg:mx-0"
          >
            <div className="w-10 h-10 bg-[#E5F3EA] text-[#0C9146] rounded-lg flex items-center justify-center font-bold mb-4 select-none">
              4
            </div>
            <h3 className="font-semibold text-lg mb-2">Reach Real Callers</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Every time someone calls a subscriber, they hear your message — no skipping, just impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
