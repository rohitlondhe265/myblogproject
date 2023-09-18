
const FAQSection = ({ faqData }) => {
  return (
    <div className="md:max-w-3xl md:mx-auto mt-6 md:p-3">
      <h1 className="text-2xl font-semibold mb-3">
        Frequently Asked Questions
      </h1>
      {faqData?.map((item, index) => (
        <div key={index} className="flex px-3 py-1 mb-2 bg-skin-on-fill">
          <div>
            <h6 className="font-semibold text-lg mb-2">
              <span className="mr-6">{index + 1}.</span>
              {item.question}
            </h6>
            <p className="mb-2 text-muted">
              <span className="mr-3 text-base">Ans.</span>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FAQSection;
