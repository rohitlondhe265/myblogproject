export const metadata = {
  title: {
    absolute: "Terms And Conditions",
  },
  robots: {
    index: false,
    nocache: true,
  },
};
export default function page() {
  return (
    <div className="bg-skin-on-fill p-6 rounded-lg shadow-lg md:max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
      <p className="">
        These terms and conditions outline the rules and regulations for the use
        of CareerPages.me's website.
      </p>
      <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="">
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use CareerPages.me if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>
      <h2 className="text-xl font-semibold mt-4">2. Content</h2>
      <p className="">
        The content of this website is for general informational purposes only.
        We reserve the right to change or remove content without notice.
      </p>
      <h2 className="text-xl font-semibold mt-4">3. User Accounts</h2>
      <p className="">
        If you create an account on this website, you are responsible for
        maintaining the security of your account and are fully responsible for
        all activities that occur under your account.
      </p>
      <h2 className="text-xl font-semibold mt-4">4. Privacy</h2>
      <p className="">
        We handle user data according to our Privacy Policy. By using this
        website, you agree to our data practices as described therein.
      </p>
      <h2 className="text-xl font-semibold mt-4">5. Changes to Terms</h2>
      <p className="">
        We may revise these terms and conditions at any time. By using this
        website, you agree to be bound by the current version of these terms and
        conditions.
      </p>
      <p className=" mt-4">
        If you have any questions about our terms and conditions, please contact
        us at contact.careerpages@gmail.com .
      </p>
    </div>
  );
}
