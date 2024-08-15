import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Tobias Piraino | Backend Software Engineer
      </h1>
      <p className="mb-10">
        {`Hey there! I’m Tobias Piraino, a passionate Backend Software Engineer with a knack for 
        creating efficient, scalable systems.`}
      </p>
      <h3 className="mb-4 text-2xl font-semibold tracking-tighter">
        A Bit About My Tech Stack
      </h3>
      <p className="mb-10">
        {`I thrive in environments where I can work with Node.js, Express.js, Fastify.js,
        JavaScript, TypeScript, Nest.js, SQL, NoSQL, TypeORM, AWS and GCloud. These tools
        have become second nature to me, allowing me to craft robust solutions that
        meet the demands of modern applications.`}
      </p>
      <h3 className="mb-4 text-2xl font-semibold tracking-tighter">
        What Else Do I Bring to the Table?
      </h3>
      <p className="mb-10">
        {`Beyond my core expertise, I’ve also dabbled in Python, Power BI, Java, and 
        Spring. These additional skills help me stay versatile and ready to tackle 
        diverse challenges that come my way.`}
      </p>
      <h3 className="mb-4 text-2xl font-semibold tracking-tighter">
        Soft Skills That Make a Difference
      </h3>
      <p className="mb-10">
        {`’m a firm believer that technical skills alone aren’t enough to excel. That’s why 
        I’ve honed my soft skills in Jira, Trello, Scrum, 6S, Pipelines, and Slack. These 
        tools and methodologies ensure smooth communication and effective project 
        management, which are just as crucial as writing clean code.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
