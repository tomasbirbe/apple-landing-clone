import { twMerge } from "tailwind-merge";
import { AppleDisplayFont, AppleTextFont } from "./fonts/fonts";
import { Section } from "./components/Section";

function Button({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge("border border-[#0071e3] rounded-full px-[21px] py-[9px]", className)}
    >
      {children}
    </button>
  );
}

function Text({ children, className }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`${AppleDisplayFont.className} ${className}`}>{children}</p>;
}

export default function Home() {
  return (
    <main className="gap-[12px] flex flex-col">
      <Section height={580}>
        <Section.BackgroundImage>
          <img src="hero_iphone.jpg" className={"h-full w-full object-cover"} alt="" />;
        </Section.BackgroundImage>
        <Section.Header className="leading-[1.07143]">
          <Section.Title>iPhone 16 Pro</Section.Title>
          <Section.Subtitle>Hello, Apple Intelligence.</Section.Subtitle>
        </Section.Header>
        <Section.Footer>
          <Section.ButtonContainer>
            <Section.PrimaryButton>Learn more</Section.PrimaryButton>
            <Section.SecondaryButton>Buy</Section.SecondaryButton>
          </Section.ButtonContainer>
          <p className="text-[#86868b] text-[14px] tracking-[-.016em] leading-[1.19048]">
            Apple Intelligence coming this fall
            <sup className="text-[8px]">1</sup>
          </p>
        </Section.Footer>
      </Section>

      <Section height={580}>
        <Section.BackgroundImage>
          <img src="hero_iphone2.jpg" className={"h-full w-full object-cover"} alt="" />;
        </Section.BackgroundImage>
        <Section.Header className="leading-[1.07143]">
          <Section.Title>iPhone 16</Section.Title>
          <Section.Subtitle>Hello, Apple Intelligence.</Section.Subtitle>
        </Section.Header>
        <Section.Footer>
          <Section.ButtonContainer>
            <Section.PrimaryButton>Learn more</Section.PrimaryButton>
            <Section.SecondaryButton>Buy</Section.SecondaryButton>
          </Section.ButtonContainer>
          <p className="text-[#86868b] text-[14px] tracking-[-.016em] leading-[1.19048]">
            Apple Intelligence coming this fall
            <sup className="text-[8px]">1</sup>
          </p>
        </Section.Footer>
      </Section>

      <Section height={580}>
        <Section.BackgroundImage>
          <img src="hero_iphone3.jpg" className={"h-full w-full object-cover"} alt="" />;
        </Section.BackgroundImage>
        <Section.Header className="gap-3 flex flex-col">
          <div className="flex flex-col gap-1">
            <img src="hero_logo.png" className="mx-auto" alt="" width={210} />
            <Section.Subtitle className="text-[#1d1d1f]">Thinstant classic.</Section.Subtitle>
          </div>
          <Section.ButtonContainer>
            <Section.PrimaryButton>Learn more</Section.PrimaryButton>
            <Section.SecondaryButton>Buy</Section.SecondaryButton>
          </Section.ButtonContainer>
        </Section.Header>
      </Section>
    </main>
  );
}
