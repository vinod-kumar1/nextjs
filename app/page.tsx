import Image from "next/image";

export default function Home() {
  let hrMargin = {
    margin : "1.5rem 0"
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <div>
        <h4 style={hrMargin}>Excercises</h4>

       <span> <h3>1.</h3> <h5> My 5 Most favourite support tasks</h5> </span>
        <p>Work with engineering teams during incidents and provide updates to internal and external stakeholders
</p>
        <p>Respond to 25+ support requests via email every day
</p>
<p>Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub
</p>
<p>Dig through logs to troubleshoot a customer's broken project
</p>
<p>Create video tutorials to help teach users a specific feature or use case
</p>
&
      <h5 style={{margin : "1rem 0"}}>My 5 least favourite tasks</h5>
      <p>Respond to 25+ support requests via email every day</p>
      <p>
      Analyze hundreds of support tickets to spot trends the product team can use
      </p>
      <p>Manage a support team
</p>
<p>Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites
</p>
<p>Write and maintain support articles and docs pages
</p>

<hr style={hrMargin} />

<span><h3>2. </h3><p>I would like to spend time on analyzing the issues in code or in the Product features</p></span>
  <h3>3. Challenges I faced on a specific situation for finding the solution</h3>
  <p>While working in a support role for Contentstack, a headless CMS, I encountered an issue where a client was experiencing significant delays and failures when trying to publish large entries with extensive embedded content and references. The client needed a solution to ensure reliable and timely publishing of their content, as these delays were impacting their content delivery schedule. <br />
And upon checking the logs from our side with the help of Mission Control team we were able to see that the specific CDN POP near the customer region is affected & our CDN provider Fastly was able to resolve it within few hours.
Customer was happy about our quick response & working with Fastly to resolve the issue.😀
</p>   

<hr style={hrMargin} />
  <h3>4. </h3> 
  <p>Edge Functions run at the edge of the network, close to the user, and are executed by Vercel's edge network. <br />
  Serverless Functions are executed on-demand in a serverless environment and are well-suited for dynamic backend logic. <br />
  Edge Middleware allows you to intercept and modify requests and responses at the edge, similar to Edge Functions, but with a more structured and reusable approach. 
  </p> 

<hr style={hrMargin} />

<h3>5.</h3> <p>
  1. As the user already shared the framework name, I'll first go through the build process in that framework & try to build a sample app in it & build <br />
  2. We can try searching for that specific error & see on what scenarios such error might occur. <br />
  3. Ask user if they've commited any changes in the code code & starts facing this issue? <br />
  4. If user is not ready to share the code with us, we can go on a call to understand the issue better & see if we could atleast narrow down where the error is. <br />
  5. If user share their atleast part of their code where we assume the error is to test on our side, we can then try & check with team.

<hr style={hrMargin} />

<h3>6.</h3> 
<p>As the user is frustrated it is not good idea to ask questions repeatedly, we can respond as below</p>
<p>Hi username <br />
  I can understand your situation here. <br />
 As per cehcking this on our side, we we're still not clear about the exact issue you're facing OR how your build process is. To debug this faster, Can we please quickly join over a Zoom/Teams call to discuss this better?
 Please join here : <i>Zoom Link</i>
<br />
 Regards
 Vinod
</p>
</p>

<hr style={hrMargin} />

<h3>7. </h3>
<p>
Subject: Re: Redirect from /blog path <br />

Dear [Customer's Name], <br />

Thank you for reaching out to our Helpdesk! <br />

To redirect visitors from the "/blog" path to "https://example.com", you can utilize either Vercel's routing configuration or serverless functions, depending on your project setup and requirements. <br />

Option 1: Vercel Routing Configuration <br />
If your project is hosted on Vercel and you're using their platform for routing, you can set up a rewrite or redirect rule in your project's vercel.json file.  <br />

Option 2: Serverless Function <br />
Alternatively, if you need more flexibility or want to handle the redirect logic dynamically, you can create a serverless function to handle the redirection. <br />

You can deploy this function to Vercel and configure it to handle requests to the "/blog" path. <br />

Please let us know if you need further assistance or have any other questions. We're here to help! <br />

Best regards, <br />
Vinod
</p>

<hr style={hrMargin} />
<h3>8. </h3> 
<p>
Subject: Re: Site Indexing Preferences

Dear [Customer's Name],

Thank you for reaching out to us!

To ensure that your website is not indexed by search engines, you can include a meta tag in the HTML of your website's pages to instruct search engine crawlers not to index the content. Here's how you can add the meta tag to the head section of your HTML:

&lt meta name="robots" content="noindex, nofollow" &gt

Regards
Vinod

</p>

<hr style={hrMargin} />

<h3>9.</h3> <p>As I've not worked with Vercel before i'm currently not sure what are all the frequent questions that customers ask. As I'm still exploring the product, I think I'll be learning & helping if I get to interact with more and more customers on a regular basis 🙂</p>

<h3>10.</h3>
<p>I think the question no. 7 & 9 are quite lean towards the product(not a bad thing) but it would be quite difficult to answer them considering the fact that I don't have experience in using the product. </p>
      </div>

<h2>
  Summary
</h2>

<p>
  I just wanted to let you know that I've answered most of the above questions by myself and there are some new things for moe like indexing, Edge function, serverless function, edge middleware and I'm exploring them 😊
</p>
    </main>
  );
}
