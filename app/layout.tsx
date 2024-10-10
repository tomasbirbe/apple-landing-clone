import type { Metadata } from "next";
import { AppleTextFont } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple clone",
  description: "Apple clone for learning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AppleTextFont.className} antialiased`}>
        <div className="w-full h-[44px] bg-[#1d1d1f]"></div>
        <header className="fixed top-0 w-full">
          <nav className="h-[44px] w-full grid place-items-center bg-[rgba(22,22,23,0.8)] backdrop-blur-[20px] backdrop-saturate-[180%]">
            <ul className="flex w-full justify-center gap-[19px] mx-[-8px]">
              <li className="px-[8px] w-[30px]">
                <svg
                  height="44"
                  viewBox="0 0 14 44"
                  width="14"
                  fill="#ffffffcc"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 30 44"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m26.5679 20.4629c1.002 0 1.67.738 1.693 1.857h-3.48c.076-1.119.779-1.857 1.787-1.857zm2.754 2.672v-.387c0-1.963-1.037-3.176-2.742-3.176-1.735 0-2.848 1.289-2.848 3.276 0 1.998 1.096 3.263 2.848 3.263 1.383 0 2.367-.668 2.66-1.746h-1.008c-.264.557-.814.856-1.629.856-1.072 0-1.769-.791-1.822-2.039v-.047zm-9.547-3.451h.96v.937h.094c.188-.615.914-1.049 1.752-1.049.164 0 .375.012.504.03v1.007c-.082-.023-.445-.058-.644-.058-.961 0-1.659 1.098-1.659 1.535v3.914h-1.007zm-4.27 5.519c-1.195 0-1.869-.867-1.869-2.361 0-1.5.674-2.361 1.869-2.361 1.196 0 1.87.861 1.87 2.361 0 1.494-.674 2.361-1.87 2.361zm0-5.631c-1.798 0-2.912 1.237-2.912 3.27 0 2.027 1.114 3.269 2.912 3.269 1.799 0 2.913-1.242 2.913-3.269 0-2.033-1.114-3.27-2.913-3.27zm-5.478-1.475v1.635h1.407v.843h-1.407v3.575c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.849c-.199.035-.393.059-.592.059-1.301 0-1.822-.481-1.822-1.688v-3.832h-1.02v-.843h1.02v-1.635zm-8.103 5.694c.129.885.973 1.447 2.174 1.447 1.137 0 1.975-.615 1.975-1.453 0-.72-.527-1.177-1.693-1.47l-1.084-.282c-1.53-.386-2.192-1.078-2.192-2.279 0-1.436 1.201-2.408 2.988-2.408 1.635 0 2.854.972 2.942 2.338h-1.061c-.146-.867-.861-1.383-1.916-1.383-1.125 0-1.869.562-1.869 1.418 0 .662.463 1.043 1.629 1.342l.885.234c1.752.439 2.455 1.119 2.455 2.361 0 1.553-1.225 2.543-3.158 2.543-1.793 0-3.03-.949-3.141-2.408z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 23 44"
                  width="23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8.1558 25.9987v-6.457h-.0703l-2.666 6.457h-.8907l-2.666-6.457h-.0703v6.457h-.9844v-8.4551h1.2246l2.8945 7.0547h.0938l2.8945-7.0547h1.2246v8.4551zm2.5166-1.7696c0-1.1309.832-1.7812 2.3027-1.8691l1.8223-.1113v-.5742c0-.7793-.4863-1.207-1.4297-1.207-.7559 0-1.2832.2871-1.4238.7852h-1.0195c.1348-1.0137 1.1309-1.6816 2.4785-1.6816 1.541 0 2.4023.791 2.4023 2.1035v4.3242h-.9609v-.9318h-.0938c-.4102.6738-1.1016 1.043-1.9453 1.043-1.2246 0-2.1328-.7266-2.1328-1.8809zm4.125-.5859v-.5801l-1.6992.1113c-.9609.0645-1.3828.3984-1.3828 1.0312 0 .6445.5449 1.0195 1.2773 1.0195 1.0371.0001 1.8047-.6796 1.8047-1.5819zm6.958-2.0273c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 24 44"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m14.9575 23.7002c0 .902-.768 1.582-1.805 1.582-.732 0-1.277-.375-1.277-1.02 0-.632.422-.966 1.383-1.031l1.699-.111zm-1.395-4.072c-1.347 0-2.343.668-2.478 1.681h1.019c.141-.498.668-.785 1.424-.785.944 0 1.43.428 1.43 1.207v.574l-1.822.112c-1.471.088-2.303.738-2.303 1.869 0 1.154.908 1.881 2.133 1.881.844 0 1.535-.369 1.945-1.043h.094v.931h.961v-4.324c0-1.312-.862-2.103-2.403-2.103zm6.769 5.575c-1.155 0-1.846-.885-1.846-2.361 0-1.471.697-2.362 1.846-2.362 1.142 0 1.857.914 1.857 2.362 0 1.459-.709 2.361-1.857 2.361zm1.834-8.027v3.503h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.27 0 1.986 1.037 3.269 2.654 3.269.873 0 1.623-.416 2.022-1.119h.093v1.008h.961v-8.824zm-15.394 4.869h-1.863v-3.563h1.863c1.225 0 1.899.639 1.899 1.799 0 1.119-.697 1.764-1.899 1.764zm.276-4.5h-3.194v8.455h1.055v-3.018h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.611-1.108-2.736-2.707-2.736zm-6.064 8.454h1.008v-6.316h-1.008zm-.199-8.237c0-.387.316-.704.703-.704s.703.317.703.704c0 .386-.316.703-.703.703s-.703-.317-.703-.703z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 38 44"
                  width="38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m32.7129 22.3203h3.48c-.023-1.119-.691-1.857-1.693-1.857-1.008 0-1.711.738-1.787 1.857zm4.459 2.045c-.293 1.078-1.277 1.746-2.66 1.746-1.752 0-2.848-1.266-2.848-3.264 0-1.986 1.113-3.275 2.848-3.275 1.705 0 2.742 1.213 2.742 3.176v.386h-4.541v.047c.053 1.248.75 2.039 1.822 2.039.815 0 1.366-.298 1.629-.855zm-12.282-4.682h.961v.996h.094c.316-.697.932-1.107 1.898-1.107 1.418 0 2.209.838 2.209 2.338v4.09h-1.007v-3.844c0-1.137-.481-1.676-1.489-1.676s-1.658.674-1.658 1.781v3.739h-1.008zm-2.499 3.158c0-1.5-.674-2.361-1.869-2.361-1.196 0-1.87.861-1.87 2.361 0 1.495.674 2.362 1.87 2.362 1.195 0 1.869-.867 1.869-2.362zm-4.782 0c0-2.033 1.114-3.269 2.913-3.269 1.798 0 2.912 1.236 2.912 3.269 0 2.028-1.114 3.27-2.912 3.27-1.799 0-2.913-1.242-2.913-3.27zm-6.636-5.666h1.008v3.504h.093c.317-.697.979-1.107 1.946-1.107 1.336 0 2.179.855 2.179 2.338v4.09h-1.007v-3.844c0-1.119-.504-1.676-1.459-1.676-1.131 0-1.752.715-1.752 1.781v3.739h-1.008zm-6.015 4.87h1.863c1.202 0 1.899-.645 1.899-1.764 0-1.16-.674-1.799-1.899-1.799h-1.863zm2.139-4.5c1.599 0 2.707 1.125 2.707 2.736 0 1.582-1.131 2.701-2.719 2.701h-2.127v3.018h-1.055v-8.455zm-6.114 8.454h1.008v-6.316h-1.008zm-.2-8.238c0-.386.317-.703.703-.703.387 0 .704.317.704.703 0 .387-.317.704-.704.704-.386 0-.703-.317-.703-.704z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 35 44"
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m28.9819 17.1758h1.008v3.504h.094c.316-.697.978-1.108 1.945-1.108 1.336 0 2.18.856 2.18 2.338v4.09h-1.008v-3.844c0-1.119-.504-1.675-1.459-1.675-1.131 0-1.752.715-1.752 1.781v3.738h-1.008zm-2.42 4.441c-.164-.627-.721-1.136-1.629-1.136-1.137 0-1.852.908-1.852 2.338 0 1.459.727 2.384 1.852 2.384.849 0 1.441-.392 1.629-1.107h1.019c-.182 1.16-1.125 2.016-2.642 2.016-1.77 0-2.901-1.284-2.901-3.293 0-1.969 1.125-3.247 2.895-3.247 1.535 0 2.472.92 2.648 2.045zm-6.533-3.568v1.635h1.407v.844h-1.407v3.574c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.85c-.2.035-.393.058-.592.058-1.301 0-1.822-.48-1.822-1.687v-3.832h-1.02v-.844h1.02v-1.635zm-4.2 5.596v-.58l-1.699.111c-.961.064-1.383.398-1.383 1.031 0 .645.545 1.02 1.277 1.02 1.038 0 1.805-.68 1.805-1.582zm-4.125.586c0-1.131.832-1.782 2.303-1.869l1.822-.112v-.574c0-.779-.486-1.207-1.43-1.207-.755 0-1.283.287-1.423.785h-1.02c.135-1.014 1.131-1.682 2.479-1.682 1.541 0 2.402.792 2.402 2.104v4.324h-.961v-.931h-.094c-.41.673-1.101 1.043-1.945 1.043-1.225 0-2.133-.727-2.133-1.881zm-7.684 1.769h-.996l-2.303-8.455h1.101l1.682 6.873h.07l1.893-6.873h1.066l1.893 6.873h.07l1.682-6.873h1.101l-2.302 8.455h-.996l-1.946-6.674h-.07z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="44"
                  viewBox="0 0 34 44"
                >
                  <g id="en-US_globalnav_links_vision_image_large">
                    <rect id="box_" width="34" height="44" fill="none"></rect>
                    <path
                      id="art_"
                      d="m.4043,17.5449h1.1074l2.4844,7.0898h.0938l2.4844-7.0898h1.1074l-3.1172,8.4551h-1.043L.4043,17.5449Zm8.3467.2168c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031Zm.1875,1.9219h1.0195v6.3164h-1.0195v-6.3164Zm2.499,4.7051h1.043c.1699.5273.6738.873,1.4824.873.8496,0,1.4531-.4043,1.4531-.9785v-.0117c0-.4277-.3223-.7266-1.1016-.9141l-.9785-.2344c-1.1836-.2812-1.7168-.7969-1.7168-1.7051v-.0059c0-1.0488,1.0078-1.8398,2.3496-1.8398,1.3242,0,2.2441.6621,2.3848,1.6934h-1.002c-.1348-.498-.627-.8438-1.3887-.8438-.75,0-1.3008.3867-1.3008.9434v.0117c0,.4277.3164.6973,1.0605.8789l.9727.2344c1.1895.2871,1.7637.8027,1.7637,1.7051v.0117c0,1.125-1.0957,1.9043-2.5312,1.9043-1.4062,0-2.373-.6797-2.4902-1.7227Zm6.3203-6.627c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031Zm.1875,1.9219h1.0195v6.3164h-1.0195v-6.3164Zm2.5049,3.1641v-.0117c0-2.0273,1.1133-3.2637,2.9121-3.2637s2.9121,1.2363,2.9121,3.2637v.0117c0,2.0215-1.1133,3.2637-2.9121,3.2637s-2.9121-1.2422-2.9121-3.2637Zm4.7812,0v-.0117c0-1.4941-.6738-2.3613-1.8691-2.3613s-1.8691.8672-1.8691,2.3613v.0117c0,1.4883.6738,2.3613,1.8691,2.3613s1.8691-.873,1.8691-2.3613Zm2.5049-3.1641h1.0195v.9492h.0938c.3164-.668.9082-1.0605,1.8398-1.0605,1.418,0,2.209.8379,2.209,2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465,1.7871v3.7383h-1.0195v-6.3164Z"
                    ></path>
                  </g>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 43 44"
                  width="43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m11.7153 19.6836h.961v.937h.094c.187-.615.914-1.048 1.752-1.048.164 0 .375.011.504.029v1.008c-.082-.024-.446-.059-.645-.059-.961 0-1.658.645-1.658 1.535v3.914h-1.008zm28.135-.111c1.324 0 2.244.656 2.379 1.693h-.996c-.135-.504-.627-.838-1.389-.838-.75 0-1.336.381-1.336.943 0 .434.352.704 1.096.885l.973.235c1.189.287 1.763.802 1.763 1.711 0 1.13-1.095 1.91-2.531 1.91-1.406 0-2.373-.674-2.484-1.723h1.037c.17.533.674.873 1.482.873.85 0 1.459-.404 1.459-.984 0-.434-.328-.727-1.002-.891l-1.084-.264c-1.183-.287-1.722-.796-1.722-1.71 0-1.049 1.013-1.84 2.355-1.84zm-6.665 5.631c-1.155 0-1.846-.885-1.846-2.362 0-1.471.697-2.361 1.846-2.361 1.142 0 1.857.914 1.857 2.361 0 1.459-.709 2.362-1.857 2.362zm1.834-8.028v3.504h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.269 0 1.987 1.037 3.27 2.654 3.27.873 0 1.623-.416 2.022-1.119h.094v1.007h.961v-8.824zm-9.001 8.028c-1.195 0-1.869-.868-1.869-2.362 0-1.5.674-2.361 1.869-2.361 1.196 0 1.869.861 1.869 2.361 0 1.494-.673 2.362-1.869 2.362zm0-5.631c-1.799 0-2.912 1.236-2.912 3.269 0 2.028 1.113 3.27 2.912 3.27s2.912-1.242 2.912-3.27c0-2.033-1.113-3.269-2.912-3.269zm-17.071 6.427h1.008v-6.316h-1.008zm-.199-8.238c0-.387.317-.703.703-.703.387 0 .703.316.703.703s-.316.703-.703.703c-.386 0-.703-.316-.703-.703zm-6.137 4.922 1.324-3.773h.093l1.325 3.773zm1.892-5.139h-1.043l-3.117 8.455h1.107l.85-2.42h3.363l.85 2.42h1.107zm14.868 4.5h-1.864v-3.562h1.864c1.224 0 1.898.639 1.898 1.799 0 1.119-.697 1.763-1.898 1.763zm.275-4.5h-3.193v8.455h1.054v-3.017h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.612-1.107-2.737-2.707-2.737z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 65 44"
                  width="65"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m4.3755 26v-7.5059h-2.7246v-.9492h6.5039v.9492h-2.7246v7.5059zm7.7314 0-3.1172-8.4551h1.1074l2.4844 7.0898h.0938l2.4844-7.0898h1.1074l-3.1172 8.4551zm13.981-.8438c-.7207.6328-1.7109 1.002-2.7363 1.002-1.6816 0-2.8594-.9961-2.8594-2.4141 0-1.002.5449-1.7637 1.6758-2.3613.0762-.0352.2344-.1172.3281-.1641-.7793-.8203-1.0605-1.3652-1.0605-1.9805 0-1.084.9199-1.8926 2.1562-1.8926 1.248 0 2.1562.7969 2.1562 1.9043 0 .8672-.5215 1.5-1.8281 2.1855l2.1152 2.2734c.2637-.5273.3984-1.2188.3984-2.2734v-.1465h.9844v.1523c0 1.3125-.2344 2.2676-.6973 2.9824l1.4708 1.5764h-1.3242zm-4.541-1.4824c0 .9492.7676 1.5938 1.8984 1.5938.7676 0 1.5586-.3047 2.0215-.791l-2.3906-2.6133c-.0645.0234-.2168.0996-.2988.1406-.8145.4219-1.2305 1.0078-1.2305 1.6699zm3.2109-4.3886c0-.6562-.4746-1.1016-1.1602-1.1016-.6738 0-1.1543.457-1.1543 1.1133 0 .4688.2402.8789.9082 1.541 1.0313-.5274 1.4063-.9492 1.4063-1.5527zm13.5176 6.7148v-3.8496h-4.6406v3.8496h-1.0547v-8.4551h1.0547v3.6562h4.6406v-3.6562h1.0547v8.4551zm2.6455-3.1582c0-2.0332 1.1133-3.2695 2.9121-3.2695s2.9121 1.2363 2.9121 3.2695c0 2.0273-1.1133 3.2695-2.9121 3.2695s-2.9121-1.2422-2.9121-3.2695zm4.7812 0c0-1.5-.6738-2.3613-1.8691-2.3613s-1.8691.8613-1.8691 2.3613c0 1.4941.6738 2.3613 1.8691 2.3613s1.8691-.8672 1.8691-2.3613zm2.5054-3.1582h.9609v.9961h.0938c.2871-.7031.9199-1.1074 1.7637-1.1074.8555 0 1.4531.4512 1.7461 1.1074h.0938c.3398-.668 1.0605-1.1074 1.9336-1.1074 1.2891 0 2.0098.7383 2.0098 2.0625v4.3652h-1.0078v-4.1309c0-.9316-.4395-1.3887-1.3301-1.3887-.8789 0-1.4648.6562-1.4648 1.459v4.0606h-1.0078v-4.2891c0-.75-.5215-1.2305-1.3184-1.2305-.8262 0-1.4648.7148-1.4648 1.6055v3.9141h-1.0078v-6.3164zm15.5127 4.6816c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 77 44"
                  width="77"
                  height="44"
                >
                  <path d="m0 17.4863h5.2383v.9492h-4.1836v2.7129h3.9668v.9375h-3.9668v2.9062h4.1836v.9492h-5.2383zm6.8994 2.1387h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm7.2803 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3009-.0001-1.8458-.4806-1.8458-1.6876zm3.4365-1.4942v-.0059c0-1.9512 1.1133-3.2871 2.8301-3.2871s2.7598 1.2773 2.7598 3.1641v.3984h-4.5469c.0293 1.3066.75 2.0684 1.875 2.0684.8555 0 1.3828-.4043 1.5527-.7852l.0234-.0527h1.0195l-.0117.0469c-.2168.8555-1.1191 1.6992-2.6074 1.6992-1.8046 0-2.8945-1.2656-2.8945-3.2461zm1.0606-.5449h3.4922c-.1055-1.248-.7969-1.8398-1.7285-1.8398-.9376 0-1.6524.6386-1.7637 1.8398zm5.9912-2.6367h1.0195v.9375h.0938c.2402-.6621.832-1.0488 1.6875-1.0488.1934 0 .4102.0234.5098.041v.9902c-.2109-.0352-.4043-.0586-.627-.0586-.9727 0-1.6641.6152-1.6641 1.541v3.9141h-1.0195zm4.9658 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3009-.0001-1.8458-.4806-1.8458-1.6876zm3.4658-.1231v-.0117c0-1.125.832-1.7754 2.3027-1.8633l1.8105-.1113v-.5742c0-.7793-.4746-1.2012-1.418-1.2012-.7559 0-1.2539.2812-1.418.7734l-.0059.0176h-1.0195l.0059-.0352c.1641-.9902 1.125-1.6582 2.4727-1.6582 1.541 0 2.4023.791 2.4023 2.1035v4.3242h-1.0195v-.9316h-.0938c-.3984.6738-1.0605 1.043-1.9102 1.043-1.201 0-2.1092-.7265-2.1092-1.875zm2.3203.9903c1.0371 0 1.793-.6797 1.793-1.582v-.5742l-1.6875.1055c-.9609.0586-1.3828.3984-1.3828 1.0254v.0117c0 .6386.5449 1.0136 1.2773 1.0136zm4.3926-7.4649c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031zm.1875 1.9219h1.0195v6.3164h-1.0195zm2.8213 0h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm6.8818 0h1.0195v.9609h.0938c.2812-.6797.8789-1.0723 1.7051-1.0723.8555 0 1.4531.4512 1.7461 1.1074h.0938c.3398-.668 1.0605-1.1074 1.9336-1.1074 1.2891 0 2.0098.7383 2.0098 2.0625v4.3652h-1.0195v-4.1309c0-.9316-.4277-1.3945-1.3184-1.3945-.8789 0-1.459.6621-1.459 1.4648v4.0605h-1.0195v-4.2891c0-.75-.5156-1.2363-1.3125-1.2363-.8262 0-1.4531.7207-1.4531 1.6113v3.9141h-1.0195v-6.3162zm10.0049 3.1816v-.0059c0-1.9512 1.1133-3.2871 2.8301-3.2871s2.7598 1.2773 2.7598 3.1641v.3984h-4.5469c.0293 1.3066.75 2.0684 1.875 2.0684.8555 0 1.3828-.4043 1.5527-.7852l.0234-.0527h1.0195l-.0116.0469c-.2168.8555-1.1191 1.6992-2.6074 1.6992-1.8047 0-2.8946-1.2656-2.8946-3.2461zm1.0606-.5449h3.4922c-.1055-1.248-.7969-1.8398-1.7285-1.8398-.9376 0-1.6524.6386-1.7637 1.8398zm5.9912-2.6367h1.0195v.9492h.0938c.3164-.668.9082-1.0605 1.8398-1.0605 1.418 0 2.209.8379 2.209 2.3379v4.0898h-1.0195v-3.8438c0-1.1367-.4688-1.6816-1.4766-1.6816s-1.6465.6797-1.6465 1.7871v3.7383h-1.0195zm7.2802 4.6758v-3.832h-.9961v-.8438h.9961v-1.6348h1.0547v1.6348h1.3828v.8438h-1.3828v3.5742c0 .7441.2578 1.043.9141 1.043.1816 0 .2812-.0059.4688-.0234v.8672c-.1992.0352-.3926.0586-.5918.0586-1.3008-.0001-1.8458-.4806-1.8458-1.6876z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 67 44"
                  width="67"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m5.6603 23.5715h-3.3633l-.8496 2.4199h-1.1074l3.1172-8.4551h1.043l3.1172 8.4551h-1.1075zm-3.0527-.8965h2.7422l-1.3242-3.7734h-.0938zm10.0986-1.0664c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449zm6.5947 0c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449zm7.5796 2.748c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574zm8.212-2.748c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399zm6.0439 0c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399zm3.6357 3.2695c0-2.0332 1.1133-3.2695 2.9121-3.2695s2.9121 1.2363 2.9121 3.2695c0 2.0273-1.1133 3.2695-2.9121 3.2695s-2.9121-1.2422-2.9121-3.2695zm4.7813 0c0-1.5-.6738-2.3613-1.8691-2.3613s-1.8691.8613-1.8691 2.3613c0 1.4941.6738 2.3613 1.8691 2.3613s1.8691-.8672 1.8691-2.3613zm2.5054-3.1582h.9609v.9375h.0938c.1875-.6152.9141-1.0488 1.752-1.0488.1641 0 .375.0117.5039.0293v1.0078c-.082-.0234-.4453-.0586-.6445-.0586-.9609 0-1.6582.6445-1.6582 1.5352v3.9141h-1.0078v-6.3165zm4.2744-1.9219c0-.3867.3164-.7031.7031-.7031s.7031.3164.7031.7031-.3164.7031-.7031.7031-.7031-.3164-.7031-.7031zm.1992 1.9219h1.0078v6.3164h-1.0078zm8.001 4.6816c-.293 1.0781-1.2773 1.7461-2.6602 1.7461-1.752 0-2.8477-1.2656-2.8477-3.2637 0-1.9863 1.1133-3.2754 2.8477-3.2754 1.7051 0 2.7422 1.2129 2.7422 3.1758v.3867h-4.541v.0469c.0527 1.248.75 2.0391 1.8223 2.0391.8145 0 1.3652-.2988 1.6289-.8555zm-4.459-2.0449h3.4805c-.0234-1.1191-.6914-1.8574-1.6934-1.8574-1.0078 0-1.7109.7383-1.7871 1.8574zm8.2119-2.748c1.3242 0 2.2441.6562 2.3789 1.6934h-.9961c-.1348-.5039-.627-.8379-1.3887-.8379-.75 0-1.3359.3809-1.3359.9434 0 .4336.3516.7031 1.0957.8848l.9727.2344c1.1895.2871 1.7637.8027 1.7637 1.7109 0 1.1309-1.0957 1.9102-2.5312 1.9102-1.4062 0-2.373-.6738-2.4844-1.7227h1.0371c.1699.5332.6738.873 1.4824.873.8496 0 1.459-.4043 1.459-.9844 0-.4336-.3281-.7266-1.002-.8906l-1.084-.2637c-1.1836-.2871-1.7227-.7969-1.7227-1.7109 0-1.0489 1.0137-1.8399 2.3555-1.8399z"></path>
                </svg>
              </li>
              <li className="px-[8px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 44 44"
                  width="44"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m42.1206 18.0337v1.635h1.406v.844h-1.406v3.574c0 .744.281 1.06.937 1.06.182 0 .282-.006.469-.023v.849c-.199.036-.392.059-.592.059-1.3 0-1.822-.48-1.822-1.687v-3.832h-1.019v-.844h1.019v-1.635zm-6.131 1.635h.961v.937h.093c.188-.615.914-1.049 1.752-1.049.164 0 .375.012.504.03v1.008c-.082-.024-.445-.059-.644-.059-.961 0-1.659.644-1.659 1.535v3.914h-1.007zm-2.463 3.158c0-1.5-.674-2.361-1.869-2.361s-1.869.861-1.869 2.361c0 1.494.674 2.361 1.869 2.361s1.869-.867 1.869-2.361zm-4.781 0c0-2.033 1.113-3.27 2.912-3.27s2.912 1.237 2.912 3.27c0 2.027-1.113 3.27-2.912 3.27s-2.912-1.243-2.912-3.27zm-2.108 0c0-1.477-.692-2.361-1.846-2.361-1.143 0-1.863.908-1.863 2.361 0 1.447.72 2.361 1.857 2.361 1.16 0 1.852-.884 1.852-2.361zm1.043 0c0 1.975-1.049 3.27-2.655 3.27-.902 0-1.629-.393-1.974-1.061h-.094v3.059h-1.008v-8.426h.961v1.054h.094c.404-.726 1.16-1.166 2.021-1.166 1.612 0 2.655 1.284 2.655 3.27zm-8.048 0c0-1.477-.691-2.361-1.845-2.361-1.143 0-1.864.908-1.864 2.361 0 1.447.721 2.361 1.858 2.361 1.16 0 1.851-.884 1.851-2.361zm1.043 0c0 1.975-1.049 3.27-2.654 3.27-.902 0-1.629-.393-1.975-1.061h-.093v3.059h-1.008v-8.426h.961v1.054h.093c.405-.726 1.161-1.166 2.022-1.166 1.611 0 2.654 1.284 2.654 3.27zm-7.645 3.158h-.961v-.99h-.094c-.316.703-.99 1.102-1.957 1.102-1.418 0-2.156-.844-2.156-2.338v-4.09h1.008v3.844c0 1.136.422 1.664 1.43 1.664 1.113 0 1.722-.663 1.722-1.77v-3.738h1.008zm-11.69-2.209c.129.885.972 1.447 2.174 1.447 1.136 0 1.974-.615 1.974-1.453 0-.72-.527-1.177-1.693-1.47l-1.084-.282c-1.529-.386-2.192-1.078-2.192-2.279 0-1.435 1.202-2.408 2.989-2.408 1.634 0 2.853.973 2.941 2.338h-1.06c-.147-.867-.862-1.383-1.916-1.383-1.125 0-1.87.562-1.87 1.418 0 .662.463 1.043 1.629 1.342l.885.234c1.752.44 2.455 1.119 2.455 2.361 0 1.553-1.224 2.543-3.158 2.543-1.793 0-3.029-.949-3.141-2.408z"></path>
                </svg>
              </li>
              <li className="px-[8px] w-[31px]">
                <svg
                  fill="#ffffffcc"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="44px"
                  viewBox="0 0 15 44"
                >
                  <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
                </svg>
              </li>
              <li className="px-[8px] w-[30px]">
                <svg
                  fill="#ffffffcc"
                  height="44"
                  viewBox="0 0 14 44"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
                </svg>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
