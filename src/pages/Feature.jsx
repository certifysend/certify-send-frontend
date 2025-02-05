const features = [
  {
    title: "Automated Certificate Generation",
    description:
      "Say goodbye to manual processes! Our platform allows you to create and customize certificates in bulk, saving you time and reducing errors.",
    icon: "/img/feature1.png",
  },
  {
    title: "Seamless Email Delivery",
    description:
      "Instantly send certificates directly to recipients' inboxes. Ensure that every participant receives their achievement promptly and professionally.",
    icon: "/img/feature2.png",
  },
  {
    title: "Registration Forms for Webinars",
    description:
      "Easily set up custom registration forms for your online webinars. Collect attendee information and manage registrations effortlessly.",
    icon: "/img/feature3.png",
  },
  {
    title: "Automated Emails & Reminders",
    description:
      "Keep your participants informed with automated confirmation emails and reminders for upcoming virtual sessions, ensuring high attendance rates.",
    icon: "/img/feature4.png",
  },
  {
    title: "Secure & Reliable",
    description:
      "Our platform ensures the highest level of security for your data and certificates, so you can trust that your information is safe.",
    icon: "/img/feature5.png",
  },
  {
    title: "Analytics & Tracking",
    description:
      "Monitor delivery status and engagement rates with built-in analytics, helping you understand how your certificates are received and track webinar attendance.",
    icon: "/img/feature6.png",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto md:px-32 px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] text-[#37393F] font-normal leading-[43.2px] tracking-[-0.04em] text-center decoration-skip-ink-none">
            Discover Powerful Features
          </h2>
          <p className="mt-4 font-normal leading-[1.6] max-w-3xl mx-auto text-[18px] text-center text-[#53545C]">
            Our platform is designed to simplify and enhance every step of your certification and webinar management
            journey. From automation to analytics, Certifysend empowers you to deliver excellence with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col rounded-lg border-t border-solid border-[#EAECF0]"
            >
              <img src={feature.icon || "/placeholder.svg"} alt="" className="w-full h-64 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-[20px] font-inter font-normal leading-[24px] tracking-[-0.02em] text-left text-[#53545C] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[14px] font-inter font-normal leading-[20.3px] text-left text-[#8B8D97]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

