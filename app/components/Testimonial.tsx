'use client';

import { useState, useEffect } from "react";

export function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    const testimonials = [
        {
            quote: "A seamless and stress-free process.",
            text: "American Finance Experts helped me secure my home loan faster than I expected. The team was transparent, patient, and incredibly supportive.",
            name: "Sarah Johnson",
            rating: 5,
        },
        {
            quote: "Truly reliable financial guidance.",
            text: "From credit improvement to loan approval, they guided me at every step. Highly recommend them to anyone seeking financial clarity.",
            name: "Emma Rodriguez",
            rating: 5,
        },
        {
            quote: "Exceeded all my expectations.",
            text: "The investment consulting services helped me build a diversified portfolio. Their expertise and personalized approach made all the difference.",
            name: "Michael Chen",
            rating: 5,
        },
        {
            quote: "Professional and trustworthy team.",
            text: "I got the best rates for my auto loan and the process was incredibly smooth. They truly care about their clients' financial well-being.",
            name: "David Thompson",
            rating: 5,
        },
        {
            quote: "Life-changing financial support.",
            text: "Their retirement planning services gave me confidence in my future. The team's knowledge and dedication are unmatched.",
            name: "Lisa Anderson",
            rating: 5,
        },
        {
            quote: "Outstanding customer service.",
            text: "The 24/7 support and quick approval process made getting my personal loan effortless. I couldn't be happier with the service.",
            name: "James Wilson",
            rating: 5,
        },
    ];

    useEffect(() => {
        const updateItemsPerView = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

    const StarIcon = () => (
        <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" style={{ fill: 'var(--color-yellow)' }} viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    );

    return (
        <section id="testimonials" className="bg-(--color-white) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                            What Our Clients Say
                        </h2>
                        <p className="font-body text-[14px] font-light text-(--color-black-grey) sm:text-[15px] md:text-[16px] lg:text-[17px]">
                            Real Stories. Real Results. Trusted by Thousands Across the USA.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={goToPrevious}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-opacity hover:opacity-90 sm:h-10 sm:w-10 md:h-11 md:w-11"
                            aria-label="Previous testimonial"
                        >
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-opacity hover:opacity-90 sm:h-10 sm:w-10 md:h-11 md:w-11"
                            aria-label="Next testimonial"
                        >
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-6 xl:gap-8">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={currentIndex + index}
                            className="flex flex-col gap-3 rounded-lg border border-(--color-grey) bg-(--color-white) p-5 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-6"
                        >
                            <p className="font-title text-[20px] italic leading-[1.3] text-(--color-dark-blue) sm:text-[22px] md:text-[24px] lg:text-[26px]">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <p className="font-body text-[13px] leading-[20px] text-(--color-black-grey) sm:text-[14px] sm:leading-[22px] md:text-[15px] md:leading-[24px]">
                                {testimonial.text}
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-2">
                                <p className="font-body text-[14px] font-bold text-(--color-black-grey) sm:text-[15px] md:text-[16px]">
                                    {testimonial.name}
                                </p>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
