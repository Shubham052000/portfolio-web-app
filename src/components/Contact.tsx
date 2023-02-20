const Contact = () => {
  return (
    <section id="contact" className="mt-40 text-lg mb-32">
      <h2 className="text-primary text-2xl font-semibold mb-10 flex flex-row underline underline-offset-4">
        <span>04. &nbsp;</span> Get In Touch
      </h2>
      <div className="container flex flex-row justify-between mx-auto lg:max-w-3xl bg-card px-10 py-5 rounded-lg">
        <form className="flex flex-col">
          <label>Name</label>
          <input className="h-8 rounded-md" />
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input id="email" className="h-8 rounded-md" />
          <label>Company/Organization</label>
          <input className="h-8 rounded-md" />
          <label>Message</label>
          <textarea className="rounded-lg" />
        </form>
        {/* some image */}
      </div>
    </section>
  );
};

export default Contact;
