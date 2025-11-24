import Image from "next/image";

export function Features() {
    const features = [
      {
        icon: '/secure.svg',
        title: 'Secure & Trusted',
        description: 'Bank-level security with 256-bit SSL encryption to protect your data.',
      },
      {
        icon: '/quick-approval.svg',
        title: 'Quick Approval',
        description: 'Get approved in minutes with our streamlined application process.',
      },
      {
        icon: '/best-rates.svg',
        title: 'Best Rates',
        description: 'Competitive interest rates and flexible repayment terms.',
      },
      {
        icon: '/support.svg',
        title: '24/7 Support',
        description: 'Round-the-clock customer support to assist you anytime.',
      },
    ];
  
    return (
      <section className="bg-(--color-white) w-full">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-[80px]">
          <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="font-title text-[32px] font-extrabold text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px]">
              Why Choose Us
            </h2>
            <p className="font-body text-[16px] font-light text-(--color-black-grey) sm:text-[17px] md:text-[18px] lg:text-[20px]">
              Reliable. Transparent. Expertise You Can Trust.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8 items-center justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-4 text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="text-(--color-dark-blue)" />
                <h3 className="font-title text-[20px] font-bold text-(--color-dark-blue) sm:text-[22px] md:text-[24px]">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] font-normal leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

