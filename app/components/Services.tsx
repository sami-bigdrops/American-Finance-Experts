'use client';

import Image from "next/image";
import { useState } from "react";

export function Services() {
    const [activeCategory, setActiveCategory] = useState('loans');

    const categories = [
        { id: 'loans', label: 'Loans & Banking' },
        { id: 'insurance', label: 'Insurance' },
        { id: 'investment', label: 'Investment & Wealth' },
        { id: 'consulting', label: 'Consulting' },
    ];

    const services = {
        loans: [
            {
                icon: '/personal-loan.svg',
                title: 'Personal Loan',
                description: 'Quick personal loans for any need with competitive rates.',
            },
            {
                icon: '/home-loan.svg',
                title: 'Home/Mortgage Loan',
                description: 'Make your dream home a reality with our mortgage solutions.',
            },
            {
                icon: '/auto.svg',
                title: 'Auto Loan',
                description: 'Drive your dream car with flexible auto financing options.',
            },
            {
                icon: '/education.svg',
                title: 'Education Loan',
                description: 'Invest in education with our student-friendly loan options.',
            },
            {
                icon: '/gold.svg',
                title: 'Gold Loan',
                description: 'Unlock the value of your gold with instant gold loans.',
            },
            {
                icon: '/card.svg',
                title: 'Credit Cards',
                description: 'Premium credit cards and master cards with exclusive benefits.',
            },
        ],
        insurance: [
            {
                icon: '/health.svg',
                title: 'Health Insurance',
                description: 'Comprehensive health coverage for you and your family.',
            },
            {
                icon: '/home-loan.svg',
                title: 'Home Insurance',
                description: 'Protect your home and mortgage with reliable coverage.',
            },
            {
                icon: '/auto.svg',
                title: 'Auto Insurance',
                description: 'Complete auto insurance protection at competitive rates.',
            },
            {
                icon: '/life.svg',
                title: 'Life Insurance',
                description: 'Secure your family\'s future with our life insurance plans.',
            },
            {
                icon: '/travel.svg',
                title: 'Travel Insurance',
                description: 'Travel with confidence with comprehensive travel coverage.',
            },
            {
                icon: '/burial.svg',
                title: 'Burial Insurance',
                description: 'Peace of mind with dignified burial insurance coverage.',
            },
        ],
        investment: [
            {
                icon: '/wealth.svg',
                title: 'Wealth Management',
                description: 'Professional wealth management for high-net-worth individuals.',
            },
            {
                icon: '/investment.svg',
                title: 'Investment Consulting',
                description: 'Expert investment advice tailored to your goals.',
            },
            {
                icon: '/gold.svg',
                title: 'Gold Investment',
                description: 'Diversify your portfolio with precious metals investment.',
            },
            {
                icon: '/mutual-fund.svg',
                title: 'Mutual Fund Investment',
                description: 'Professional managed mutual funds for steady growth.',
            },
            {
                icon: '/retirement.svg',
                title: 'Retirement Planning',
                description: 'Secure your retirement with strategic planning services.',
            },
            {
                icon: '/estate.svg',
                title: 'Estate Planning',
                description: 'Comprehensive estate planning and wealth transfer strategies.',
            },
        ],
        consulting: [
            {
                icon: '/credit-score.svg',
                title: 'Credit Score Boost',
                description: 'Improve your credit score with our proven strategies.',
            },
            {
                icon: '/tax.svg',
                title: 'Tax Planning',
                description: 'Strategic tax planning to minimize your tax liability.',
            },
            {
                icon: '/debt.svg',
                title: 'Debt Management',
                description: 'Professional debt consolidation and management services.',
            },
            {
                icon: '/cash-flow.svg',
                title: 'Cash Flow Management',
                description: 'Optimize your cash flow for better financial stability.',
            },
            {
                icon: '/budget.svg',
                title: 'Budget Planning',
                description: 'Create and maintain effective budgets for financial success.',
            },
            {
                icon: '/business.svg',
                title: 'Business Consulting',
                description: 'Strategic business financial consulting for growth.',
            },
        ],
    };

    const currentServices = services[activeCategory as keyof typeof services];

    return (
        <section id="services" className="bg-(--color-grey) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-8 md:mb-10 lg:mb-12">
                    <h2 className="font-title text-[28px] font-extrabold text-(--color-dark-blue) sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px]">
                        Our Financial Services
                    </h2>
                    <p className="font-body text-[15px] font-light text-(--color-black-grey) sm:text-[16px] md:text-[17px] lg:text-[18px]">
                        Comprehensive Solutions for Every Financial Goal
                    </p>
                </div>
                
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-4 xl:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`rounded-full px-4 py-2.5 font-body text-[13px] font-medium transition-all sm:px-5 sm:py-3 sm:text-[14px] md:px-6 md:py-3 md:text-[15px] lg:px-7 lg:py-3.5 lg:text-[16px] ${
                                    activeCategory === category.id
                                        ? 'bg-(--color-blue) text-(--color-white)'
                                        : 'border border-(--color-blue) bg-(--color-white) text-(--color-blue) hover:bg-(--color-light-blue)'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
                    {currentServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 rounded-lg bg-(--color-white) p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
                        >
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={56}
                                height={56}
                                className="h-14 w-14"
                            />
                            <h3 className="font-title text-[18px] font-bold text-(--color-dark-blue) sm:text-[20px] md:text-[22px]">
                                {service.title}
                            </h3>
                            <p className="font-body text-[13px] font-normal leading-[20px] text-(--color-black-grey) sm:text-[14px] sm:leading-[22px] md:text-[15px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
