import React from 'react';
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy container mx-auto p-6 bg-white">
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

            <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy for freeSheetsAI.xyz Plugin – AI Integration with Google Sheets</h1>
            <p className="mb-4 text-gray-600"><strong>Effective Date:</strong> 1st Oct 2024</p>
            <p className="mb-4 text-gray-700">
                This privacy policy explains how freeSheetsAI.xyz ("we," "us," or "our") collects, uses, and protects information obtained through the sHelp.fyi Google Sheets add-on (the "Add-On"), which interacts with the GROQ API and OpenAI API.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
            <p className="mb-4 text-gray-700">
                When you use the Add-On, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>
                    <strong>User Properties:</strong> We store user-specific API keys and service names through Google Apps Script's PropertiesService. This data is used to provide the functionality of the Add-On and is stored locally within your Google account.
                </li>
                <li>
                    <strong>Usage Data:</strong> We may collect information about your interactions with the Add-On, including which features you use and the frequency of use. This data is used to improve our services.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Use of Information</h2>
            <p className="mb-4 text-gray-700">
                We may use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>To provide and maintain the functionality of the Add-On.</li>
                <li>To improve and personalize your experience with the Add-On.</li>
                <li>To analyze usage patterns and enhance our services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Data Sharing and Disclosure</h2>
            <p className="mb-4 text-gray-700">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>
                    <strong>Third-Party APIs:</strong> The Add-On integrates with the GROQ API and OpenAI API. These third-party services may collect and process data according to their own privacy policies. We encourage you to review these policies.
                </li>
                <li>
                    <strong>Legal Compliance:</strong> We may disclose your information to comply with applicable laws, regulations, or legal requests.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Security of Your Information</h2>
            <p className="mb-4 text-gray-700">
                We implement reasonable security measures to protect your information from unauthorized access or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Your Rights</h2>
            <p className="mb-4 text-gray-700">
                Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
                <li>The right to access your personal information.</li>
                <li>The right to request corrections to inaccurate information.</li>
                <li>The right to request deletion of your information.</li>
            </ul>
            <p className="mb-4 text-gray-700">
                To exercise these rights, please contact us at <a href="mailto:hello@aadu.agency" className="text-blue-600 hover:underline">hello@aadu.agency</a>.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-gray-700">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically for updates.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Contact Us</h2>
            <p className="mb-4 text-gray-700">
                If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="mb-4 text-gray-700">
                <strong>agencyAadu</strong><br />
                <a href="mailto:hello@aadu.agency" className="text-blue-600 hover:underline">hello@aadu.agency</a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
