import Container from "@/components/Container";

import React from "react";

const Legal = () => {
  return (
    <Container>
      <div className="text-center mb-8 mt-16 sm:mt-30">
        <h3 className="text-3xl font-medium text-primary-black mb-4">
          Legal Compliance & Registration
        </h3>
        <p className="text-lg text-secondary-black">
          We take pride in our commitment to compliance, transparency, and
          ethical practice
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8">
          <h4 className="text-xl font-medium text-primary-black mb-4">
            Uganda Registration
          </h4>
          <div className="space-y-2 text-secondary-black">
            <p>
              <strong>Registration No.:</strong> 8003 492 445 4805
            </p>
            <p>
              <strong>TIN:</strong> 1042 890 643
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8">
          <h4 className="text-xl font-medium text-primary-black mb-4">
            Nigeria Registration
          </h4>
          <div className="space-y-2 text-secondary-black">
            <p>
              <strong>Registration No.:</strong> 8465 963
            </p>
            <p>
              <strong>TIN:</strong> 331 595 68-0001
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Legal;
