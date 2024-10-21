import { twMerge } from "tailwind-merge";
import { AppleDisplayFont } from "../fonts/fonts";

function Button({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge("border border-[#0071e3] rounded-full px-[21px] py-[9px]", className)}
    >
      {children}
    </button>
  );
}

function PrimaryButton({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "border border-[#0071e3] rounded-full px-[21px] py-[9px] bg-[#0071e3] text-[#fff] hover:bg-[#0077ed]",
        className,
      )}
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, className }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "border rounded-full px-[21px] py-[9px]text-[#2997ff] border-[#2997ff] hover:text-[#fff] hover:bg-[#0077ed]",
        className,
      )}
    >
      {children}
    </button>
  );
}

function Text({ children, className }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`${AppleDisplayFont.className} ${className}`}>{children}</p>;
}

const ButtonContainer = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex gap-5 justify-center">{children}</div>;
};

function Section({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grid grid-rows-2 place-items-center grid-cols-1">
        <img
          src="hero_iphone.jpg"
          className="h-[580px] object-cover col-start-1 row-end-3 row-start-1"
          alt=""
        />
        <div className="row-start-1 col-start-1 h-full pt-12 text-white leading-[1.07143]">
          {children}
          {/* <Text className="font-semibold text-[56px] traking-[-.005em]">iPhone 16 Pro</Text>
          <Text className="text-[28px] text-center tracking-[.007em] mt-[6px]">
            Hello, Apple Intelligence.
          </Text> */}
        </div>
        <div className="row-start-2 gap-4 col-start-1 flex justify-end items-center flex-col w-full h-full pb-12">
          <ButtonContainer></ButtonContainer>
          <Text className="text-[#86868b] text-[21px] tracking-[.011em] leading-[1.19048]">
            Apple Intelligence coming this fall
            <sup className="text-[12px]">1</sup>
          </Text>
        </div>
      </div>
    </>
  );
}

Section.PrimaryButton = PrimaryButton;
Section.SecondaryButton = SecondaryButton;

export { Section };
