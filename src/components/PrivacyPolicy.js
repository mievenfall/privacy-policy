import React from 'react';
import "./PrivacyPolicy.css"

function PrivacyPolicy() {
  return (
    <div className='pp-content'>
      <h1>Privacy Policy</h1>
      <p>
        This privacy policy outlines the information we collect, how we use and protect that information, and your rights regarding your personal data.
      </p>

      <h2>Information Collection and Use</h2>
      <p>
        The developer is not collecting any personal information or browsing data through the Extension. The Extension needs permission to read basic tab data (title, URL) in order to group tabs. However, none of this generic tab data is stored or transmitted outside the user's browser.
      </p>
      <p>
        The Extension does not collect, store, or share any personally identifiable information. There are no advertisements or sales of data in the Extension.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        The Developer may update this privacy policy from time to time. You can review the most current version of the policy at any time by visiting this page. Continued use of this Extension after any changes constitutes acceptance of the amended privacy policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about this privacy policy, please contact the Developer at mngoc2603@gmail.com.  
      </p>
    </div>
  );
}

export default PrivacyPolicy;