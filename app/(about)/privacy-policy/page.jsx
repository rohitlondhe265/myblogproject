export const metadata = {
  title: {
    absolute: "Privacy Policy",
  },
  robots: {
    index: false,
    nocache: true,
  },
};
export default function page() {
  return (
    <div className="bg-skin-on-fill p-6 rounded-lg shadow-lg md:max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="">
        This Privacy Policy describes how CareerPages.me collects, uses, and
        protects the personal information you provide to us when using our
        website.
      </p>
      <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
      <p className="">
        We may collect personal information such as your name and email address
        when you sign up for our newsletter or contact us.
      </p>
      <h2 className="text-xl font-semibold mt-4">
        How We Use Your Information
      </h2>
      <p className="">
        We use the information you provide to send you newsletters, respond to
        your inquiries, and improve our website.
      </p>
      <h2 className="text-xl font-semibold mt-4">Data Security</h2>
      <p className="">
        We are committed to protecting your data and have implemented security
        measures to safeguard your information.
      </p>
      <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
      <p className="">
        If you have any questions about our Privacy Policy, please contact us at
        contact.careerpages@gmail.com .
      </p>
    </div>
  );
}
