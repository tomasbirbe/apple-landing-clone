import localFont from "next/font/local";

export const AppleTextFont = localFont({
  src: [
    { path: "./sf-pro-text_bold.woff2", weight: "700" },
    { path: "./sf-pro-text_semibold.woff2", weight: "600" },
    { path: "./sf-pro-text_regular.woff2", weight: "400" },
  ],
});

export const AppleDisplayFont = localFont({
  src: [
    { path: "./sf-pro-display_bold.woff2", weight: "700" },
    { path: "./sf-pro-display_semibold.woff2", weight: "600" },
    { path: "./sf-pro-display_regular.woff2", weight: "400" },
  ],
});
