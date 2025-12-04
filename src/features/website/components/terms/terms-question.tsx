import React from 'react'

export const TermsQuestion = () => {
  return (
    <div className="mx-auto mt-16 max-w-6xl px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-brand-text-dark-heading">Questions?</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-brand-text-dark">
        Need clarification on any of these terms?
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <a
            href="/contact"
            className="mt-4 inline-block text-cyan-600 hover:underline"
          >
            Get in Touch →
          </a>
        </div>
        <div className="rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">
            Privacy Policy
          </h3>
          <p className="mt-2 text-gray-600">
            Learn how we protect and use your data.
          </p>
          <a
            href="/privacy"
            className="mt-4 inline-block rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
          >
            Read Policy
          </a>
        </div>
        <div className="rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">
            Community Guidelines
          </h3>
          <p className="mt-2 text-gray-600">
            Understand our community standards.
          </p>
          <a
            href="/code-of-conduct"
            className="mt-4 inline-block rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
          >
            View Guidelines
          </a>
        </div>
      </div>
    </div>
  );
}
