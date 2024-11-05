import React from 'react';
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="terms-container container mx-auto p-6">
      {/* Home Button with Left Arrow Only */}
      <div className="mb-6 flex items-center">
          <Link to="/" className="inline-flex items-center px-4 py-2 text-white rounded transition duration-200">
              <svg
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                    d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"
                  />
              </svg>
          </Link>
      </div>   
      <h1 className="text-3xl font-bold mb-4">Terms of Service for freeSheetsAI.xyz Plugin – AI Integration with Google Sheets</h1>
      <p className="text-lg mb-4"><strong>Effective Date:</strong> 23rd September 2024.</p>
      <p className="mb-4">
        Thank you for using the freeSheetsAI.xyz Plugin. This Terms of Service agreement (the "Agreement") governs your access to and use of the App, which enables users to leverage AI within Google Sheets. By installing, accessing, or using the App, you agree to be bound by this Agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using the App, you agree to these Terms of Service. If you do not agree to these terms, do not use the App. We may update these terms from time to time, and continued use of the App following changes constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Description of the App</h2>
      <p className="mb-4">
        The App allows users to integrate AI-powered features within Google Sheets to enhance productivity, automate tasks, and gain insights. These features may include data analysis, automation scripts, content generation, and other AI-based functionalities.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Use of the App</h2>
      <p className="mb-4"><strong>Eligibility:</strong> The App is intended for use by individuals or organisations using Google Workspace. By using the App, you affirm that you are at least 18 years old or have the necessary permissions to install and use the App in an organisational setting.</p>
      <p className="mb-4"><strong>Licence:</strong> We grant you a non-exclusive, non-transferable, revocable licence to use the App in accordance with these Terms.</p>
      <p className="mb-4"><strong>Google Sheets Integration:</strong> The App operates within Google Sheets, and users are responsible for having an active Google Workspace account and complying with Google’s Terms of Service in conjunction with using this App.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. User Responsibilities</h2>
      <p className="mb-4"><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of any login credentials and for all activities that occur under your account.</p>
      <p className="mb-4"><strong>Data Usage:</strong> You retain ownership of your data uploaded, generated, or processed by the App. However, you grant us the right to access, store, and process your data solely for the purpose of providing the App’s services.</p>
      <p className="mb-4"><strong>Prohibited Activities:</strong> You may not use the App to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Violate any applicable laws or regulations.</li>
        <li>Engage in any harmful or fraudulent activities.</li>
        <li>Circumvent any technical limitations of the App or attempt to reverse-engineer the software.</li>
        <li>Use the AI features for generating inappropriate or harmful content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Privacy and Data Security</h2>
      <p className="mb-4"><strong>Data Collection:</strong> The App may collect certain data, including usage metrics, user inputs, and interaction data with Google Sheets. We will handle your data in accordance with our Privacy Policy.</p>
      <p className="mb-4"><strong>Third-Party Services:</strong> The App integrates with Google Sheets via the Google Workspace Marketplace API, and the App may interact with other third-party services. We are not responsible for the terms or policies of these third parties.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Payment and Subscription</h2>
      <p className="mb-4"><strong>Free Tier:</strong> The App may offer a free tier with limited functionality.</p>
      <p className="mb-4"><strong>Paid Subscription:</strong> For enhanced features, users may be required to purchase a subscription. Fees and billing terms will be provided at the point of purchase.</p>
      <p className="mb-4"><strong>Refunds:</strong> Subscription payments are non-refundable unless stated otherwise in applicable consumer protection laws.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
      <p className="mb-4"><strong>Ownership:</strong> We retain all rights, title, and interest in and to the App, including all intellectual property rights.</p>
      <p className="mb-4"><strong>User Data:</strong> You retain all rights to the data you input or generate via the App. However, you grant us the right to use anonymized, aggregated data for the purpose of improving our services.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Disclaimer of Warranties</h2>
      <p className="mb-4">
        The App is provided on an "as is" and "as available" basis. We disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The App will meet your specific requirements.</li>
        <li>The App will be uninterrupted, timely, secure, or error-free.</li>
        <li>The results obtained from the use of the App will be accurate or reliable.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, or other intangible losses resulting from:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The use or inability to use the App.</li>
        <li>Unauthorized access to or alteration of your data.</li>
        <li>Any other matter relating to the App.</li>
      </ul>
      <p className="mb-4">
        Our maximum liability to you shall not exceed the fees paid by you for the App during the 12 months preceding the claim.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business. Upon termination, your license to use the App will be revoked.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">11. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms of Service, please contact us at <a href="mailto:freddy@aadu.agency" className="text-blue-500 hover:underline">freddy@aadu.agency</a>.
      </p>
      <p className="mb-4">
        By installing or using the App, you acknowledge that you have read, understood, and agreed to these Terms of Service.
      </p>

      <footer className="mt-8">
        <p className="font-bold">freeSheetsAI.xyz Team</p>
        <p>agencyAadu</p>
        <p>6/196, Thotiyankadu, Pazhmapuram, Karur, Tamil Nadu, India - 639136.</p>
        <p><a href="mailto:freddy@aadu.agency" className="text-blue-500 hover:underline">freddy@aadu.agency</a></p>
      </footer>
    </div>
  );
};

export default TermsOfService;
