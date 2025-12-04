import React from 'react'

export const FaqHeader = () => {
  return (
    <div className='w-full max-w-5xl mx-auto text-center space-y-4'>
      <h1 className="font-extrabold text-3xl md:text-5xl dark:text-brand-text-dark-heading">
        Frequently Asked Questions
      </h1>
      <p className='w-full dark:text-brand-text-dark max-w-xl mx-auto text-pretty text-sm sm:text-xl'>
        Find answers to common questions about the Mikaelson Initiative, our
        community, and programs.
      </p>
    </div>
  );
}
