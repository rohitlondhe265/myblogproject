export const metadata = {
  title: {
    absolute: "Disclaimer",
  },
  robots: {
    index: false,
    nocache: true,
  },
};
export default function page() {
  return (
    <div className="bg-skin-on-fill p-6 rounded-lg shadow-lg md:max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Disclaimer</h1>
      <p className="">
        The information provided on CareerPages.me is for general informational
        purposes only. We make every effort to ensure the accuracy and
        reliability of the information on our website, but we make no
        representations or warranties of any kind, express or implied, about the
        completeness, accuracy, reliability, suitability, or availability with
        respect to the website or the information, products, services, or
        related graphics contained on the website for any purpose.
      </p>
      <p className=" mt-4">
        Any reliance you place on such information is strictly at your own risk.
        In no event will we be liable for any loss or damage, including without
        limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of,
        or in connection with, the use of this website.
      </p>
      <p className=" mt-4">
        Through this website, you can link to other websites that are not under
        the control of CareerPages.me. We have no control over the nature,
        content, and availability of those sites. The inclusion of any links
        does not necessarily imply a recommendation or endorse the views
        expressed within them.
      </p>
      <p className=" mt-4">
        Every effort is made to keep the website up and running smoothly.
        However, CareerPages.me takes no responsibility for, and will not be
        liable for, the website being temporarily unavailable due to technical
        issues beyond our control.
      </p>
      <p className=" mt-4">
        If you have any questions about our disclaimer, please contact us at
        disclaimer@careerpages.me.
      </p>
    </div>
  );
}
