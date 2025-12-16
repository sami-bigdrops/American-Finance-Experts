'use client';

import { useModal } from "../contexts/ModalContext";

export default function TermsConditions() {
  const { openModal } = useModal();

  return (
    <section className="bg-(--color-white) w-full">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12">
          <h1 className="font-title text-[32px] font-extrabold leading-tight text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px]">
            Terms & Conditions
          </h1>
          <p className="font-body text-[14px] font-normal text-(--color-black-grey) opacity-70 sm:text-[15px] md:text-[16px]">
            Last Updated: January 1, 2025
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              1. Acceptance of Terms
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              By accessing and using American Finance Experts&apos; website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              2. Description of Service
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              American Finance Experts provides financial services including but not limited to:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Loan applications and approvals</li>
              <li className="list-disc">Insurance services and quotes</li>
              <li className="list-disc">Investment and wealth management consulting</li>
              <li className="list-disc">Financial planning and advisory services</li>
              <li className="list-disc">Credit score improvement services</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              3. User Responsibilities
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              As a user of our services, you agree to:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Provide accurate and complete information</li>
              <li className="list-disc">Maintain the confidentiality of your account credentials</li>
              <li className="list-disc">Use our services only for lawful purposes</li>
              <li className="list-disc">Comply with all applicable laws and regulations</li>
              <li className="list-disc">Notify us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              4. Financial Services Terms
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              For loan and financial services:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">All loan applications are subject to credit approval</li>
              <li className="list-disc">Interest rates and terms are determined based on creditworthiness</li>
              <li className="list-disc">We reserve the right to modify or deny any application</li>
              <li className="list-disc">Early repayment terms may apply as per loan agreement</li>
              <li className="list-disc">Default on payments may result in additional fees and credit impact</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              5. Investment and Advisory Services
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              For investment services:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">All investments carry risk and past performance does not guarantee future results</li>
              <li className="list-disc">Investment advice is based on information provided by the client</li>
              <li className="list-disc">We are not liable for investment losses due to market conditions</li>
              <li className="list-disc">Clients should diversify investments and consult multiple sources</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              6. Privacy and Data Protection
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using our services, you consent to such collection and use.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              7. Intellectual Property
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              The service and its original content, features, and functionality are and will remain the exclusive property of American Finance Experts and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              8. Prohibited Uses
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              You may not use our service:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">For any unlawful purpose or to solicit others to unlawful acts</li>
              <li className="list-disc">To violate any international, federal, provincial, or state regulations or laws</li>
              <li className="list-disc">To transmit or procure the sending of any advertising or promotional material</li>
              <li className="list-disc">To impersonate or attempt to impersonate the company or other users</li>
              <li className="list-disc">To engage in any fraudulent activity</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              9. Disclaimers and Limitation of Liability
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              American Finance Experts provides services &quot;as is&quot; without any warranty. We do not guarantee:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Loan approval for any application</li>
              <li className="list-disc">Specific investment returns or outcomes</li>
              <li className="list-disc">Uninterrupted or error-free service</li>
              <li className="list-disc">Security of data transmission over the internet</li>
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              Our liability is limited to the maximum extent permitted by law.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              10. Indemnification
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              You agree to defend, indemnify, and hold harmless American Finance Experts and its employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney&apos;s fees).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              11. Termination
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including breach of the Terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              12. Governing Law
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              These Terms shall be governed by and construed in accordance with the laws of the State of United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              13. Changes to Terms
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              14. Contact Information
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              If you have any questions about these Terms and Conditions, please <button onClick={() => openModal('contact')} className="text-(--color-blue) underline">Contact Us</button>
            </p>
          </div>

          <div className="mt-8 border-t border-(--color-grey) pt-6 sm:mt-10 sm:pt-8">
            <p className="font-body text-[14px] leading-[24px] text-(--color-black-grey) sm:text-[15px] sm:leading-[26px]">
              By using our service, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
            </p>
          </div>
        </div>
    </div>
    </section>
  );
}
