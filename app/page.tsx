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
      <Section>
        <Text className="font-semibold text-[56px] traking-[-.005em]">iPhone 16 Pro</Text>
        <Text className="text-[28px] text-center tracking-[.007em] mt-[6px]">
          Hello, Apple Intelligence.asdfsd
        </Text>
      </Section>

      <div className="grid grid-rows-2 place-items-center grid-cols-1">
        <img
          src="hero_iphone.jpg"
          className="h-[580px] object-cover col-start-1 row-end-3 row-start-1"
          alt=""
        />
        <div className="row-start-1 col-start-1 h-full pt-12 text-white leading-[1.07143]">
          <Text className="font-semibold text-[56px] traking-[-.005em]">iPhone 16 Pro</Text>
          <Text className="text-[28px] text-center tracking-[.007em] mt-[6px]">
            Hello, Apple Intelligence.
          </Text>
        </div>
        <div className="row-start-2 gap-4 col-start-1 flex justify-end items-center flex-col w-full h-full pb-12">
          <div className="flex gap-5 justify-center">
            <Button className=" bg-[#0071e3] text-[#fff] hover:bg-[#0077ed]">Learn more</Button>
            <Button className=" text-[#2997ff] border-[#2997ff] hover:text-[#fff] hover:bg-[#0077ed]">
              Buy
            </Button>
          </div>
          <Text className="text-[#86868b] text-[21px] tracking-[.011em] leading-[1.19048]">
            Apple Intelligence coming this fall
            <sup className="text-[12px]">1</sup>
          </Text>
        </div>
      </div>
      <div className="grid grid-rows-2 place-items-center grid-cols-1">
        <img
          src="hero_iphone2.jpg"
          className="h-[580px] object-cover col-start-1 row-end-3 row-start-1"
          alt=""
        />
        <div className="row-start-1 col-start-1 h-full pt-12 text-white leading-[1.07143]">
          <Text className="font-semibold text-[56px] text-center traking-[-.005em]">iPhone 16</Text>
          <Text className="text-[28px] text-center tracking-[.007em] mt-[6px]">
            Hello, Apple Intelligence.
          </Text>
        </div>
        <div className="row-start-2 gap-4 col-start-1 flex justify-end items-center flex-col w-full h-full pb-12">
          <div className="flex gap-5 justify-center">
            <Button className="bg-[#0071e3] text-[#fff] hover:bg-[#0077ed]">Learn more</Button>
            <Button className="text-[#2997ff] border-[#2997ff] hover:text-[#fff] hover:bg-[#0077ed]">
              Buy
            </Button>
          </div>
          <Text className="text-[#1d1d1f] text-[21px] tracking-[.011em] leading-[1.19048]">
            Apple Intelligence coming this fall
            <sup className="text-[12px]">2</sup>
          </Text>
        </div>
      </div>
      <div className="grid grid-rows-2 place-items-center grid-cols-1">
        <img
          src="hero_iphone3.jpg"
          className="h-[580px] object-cover col-start-1 row-end-3 row-start-1"
          alt=""
        />
        <div className="row-start-1 col-start-1 flex flex-col gap-5 h-full pt-12 text-white leading-[1.07143]">
          <div className="flex flex-col gap-2 justify-center">
            <img src="hero_logo.png" className="ml-[6px]" alt="" width={210} />
            <Text className="text-[28px] text-[#1d1d1f] text-center tracking-[.007em] mt-[6px]">
              Thinstant classic.
            </Text>
          </div>
          <div className={`flex gap-5 justify-center ${AppleTextFont.className}`}>
            <Button className="py-[12px] bg-[#0071e3] text-[#fff] hover:bg-[#0077ed]">
              Learn more
            </Button>
            <Button className="py-[12px] text-[#2997ff] border-[#2997ff] hover:text-[#fff] hover:bg-[#0077ed]">
              Buy
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
