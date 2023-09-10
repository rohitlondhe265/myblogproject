import Form from "./Form";

export const metadata = {
  title: {
    absolute: "Contact Page",
  },
  description: "Get in touch with Us",
  robots: {
    index: false,
    nocache: true,
  },
};

export default function page() {
  return (
    <div className="bg-skin-on-fill p-6 rounded-lg shadow-lg md:max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="">
        We'd love to hear from you! Please feel free to reach out to us with any
        questions, comments, or feedback.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p className="">Email: contact.careerpages@gmail.com</p>
        <p className="">Phone: +91 9405635794</p>
      </div>
      <Form />
    </div>
  );
}
