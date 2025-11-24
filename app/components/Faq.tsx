'use client';

import { useState } from "react";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How quickly can I get loan approval?",
            answer: "Our streamlined application process typically provides loan approval within 24-48 hours for most personal and auto loans. For mortgage loans, approval usually takes 3-5 business days after we receive all required documents. We use advanced technology and efficient processes to ensure quick turnaround times while maintaining thorough evaluation of your application.",
        },
        {
            question: "What documents do I need for a loan application?",
            answer: "The required documents vary by loan type, but generally include: proof of identity (driver's license or passport), proof of income (pay stubs, tax returns, or bank statements), proof of employment, credit history information, and for secured loans, documentation of the collateral. Our team will provide you with a complete checklist tailored to your specific loan type during the initial consultation.",
        },
        {
            question: "Do you offer investment advisory services?",
            answer: "Yes, we offer comprehensive investment advisory services including wealth management, portfolio diversification, retirement planning, and estate planning. Our certified financial advisors work with you to create personalized investment strategies based on your financial goals, risk tolerance, and timeline. We provide ongoing monitoring and adjustments to help you achieve your long-term financial objectives.",
        },
        {
            question: "Are your services available nationwide?",
            answer: "Yes, our services are available nationwide across all 50 states. We offer remote consultations and online application processes, making it convenient for clients regardless of their location. Our team of financial experts is licensed to provide services throughout the United States, ensuring you receive the same high-quality service whether you're in New York, California, or anywhere in between.",
        },
        {
            question: "What makes your interest rates competitive?",
            answer: "Our competitive interest rates are the result of our strong relationships with multiple lenders and financial institutions, allowing us to negotiate better terms on your behalf. We also leverage our 15+ years of industry experience and high approval rates to secure preferential rates. Additionally, we regularly review market conditions and adjust our offerings to ensure you get the best rates available based on your credit profile and financial situation.",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#EFF7FF] w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 md:mb-10 lg:mb-12 sm:gap-3">
                    <h2 className="font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-[14px] font-light text-(--color-black-grey) sm:text-[15px] md:text-[16px] lg:text-[17px]">
                        Everything You Need to Know Before Getting Started
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4 sm:space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-(--color-grey) bg-(--color-white) shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <p className="flex-1 font-body text-[15px] font-medium text-(--color-black-grey) sm:text-[16px] md:text-[17px]">
                                    {faq.question}
                                </p>
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-transform sm:h-9 sm:w-9">
                                    <svg
                                        className={`h-4 w-4 transition-transform sm:h-5 sm:w-5 ${
                                            openIndex === index ? 'rotate-45' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="border-t border-(--color-grey) p-5 sm:p-6">
                                    <p className="font-body text-[14px] leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
