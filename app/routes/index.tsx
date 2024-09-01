import { createRoute } from "honox/factory";
import Footer from "../islands/footer";

export default createRoute(async (c) => {
  const currentViews = await c.env.KV.get("views:home");
  if (!currentViews) return c.text("cf kv broke! :(");
  const views = parseInt(currentViews) + 1;
  await c.env.KV.put("views:home", views.toString());

  return c.render(
    <div class="main-font pt-1 flex flex-col min-h-screen">
      <div class="flex-grow flex-1">
        <div class="flex flex-col lg:pt-28 p-4 lg:p-0">
          <h1 class="text-6xl font-bold pb-1">
            heya! i'm{" "}
            <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-500 text-transparent bg-clip-text">
              makors.
            </span>
          </h1>
          <h1 class="font-semibold text-3xl">
            a software developer that builds <i>things</i>.
          </h1>
          <div class="flex py-2 gap-x-3">
            <a href="mailto:makors@muko.io">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-8 hover:fill-indigo-500 icon icon-tabler icons-tabler-filled icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
              </svg>
            </a>
            <a href="https://github.com/makors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-8 hover:fill-indigo-500 icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
              </svg>
            </a>
            <a href="https://x.com/mak0rs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-8 hover:stroke-indigo-500 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
          <span class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-500 h-[2px]" />
        </div>

        <div class="lg:pt-3 px-4 lg:px-1">
          <h1 class="font-bold text-3xl">a little bit about me</h1>
          <h1 class="font-semibold text-xl">
            - ceo (chief emoji officer) @{" "}
            <a href="https://muko.io" class="text-indigo-500">
              muko
            </a>
            , which allows resellers to sell their products faster than ever.
            <br />
            - i do some things with reselling, reverse engineering, and mainly
            programming.
            <br />- although 99% of my work is private, i mainly know{" "}
            <span class="text-red-500">rust</span>,{" "}
            <span class="text-cyan-500">golang</span>,{" "}
            <span class="text-blue-500">typescript</span>, and{" "}
            <span class="text-yellow-500">python</span>.
          </h1>
        </div>

        <div class="lg:pt-3 p-4 lg:px-1">
          <h1 class="font-bold text-3xl">projects of note</h1>
          <h1 class="font-semibold text-xl">
            -{" "}
            <a href="https://github.com/UseMuko" class="text-indigo-500">
              muko
            </a>
            : an ai-powered platform that allows resellers to sell their items
            automatically, anytime, anywhere. coming late 2024.
            <br />-{" "}
            <a href="https://bandarsbounties.com" class="text-indigo-500">
              pem
            </a>
            : closed-source price error monitoring, allowing people just like
            you to make millions.
          </h1>
        </div>
      </div>

      <Footer views={views} />
    </div>,
    { title: "makors' personal site" }
  );
});
