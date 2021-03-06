import React from "react";
import "../../styles/ApplyDescription.scss";

function ApplyDescription() {
  return (
    <div className="applyDesc">
      <p className="primary__heading-text">
        সদিচ্ছা ফাউন্ডেশন একটি অলাভজনক প্রতিষ্ঠান হওয়ার একজন সদস্যকে অবশ্যই
        স্বার্থহীনভাবে মানবতার জন্য কাজ করে যেতে হবে। যেহেতু আমাদের প্রতিষ্ঠানের
        যাবতীয় অর্থ সম্পদ আমাদের সদস্যদের তরফ থেকে আসে। সেহেতু আপনাকে অবশ্যই
        আপনার সাধ্য অনুযায়ী একটি নির্দিষ্ট অর্থের পরিমান ঠিক করে দিতে হবে যা
        আপনি মাস শেষে স্বাচ্ছন্দে দান করতে পারবেন।
      </p>
      <ul>
        <li>
          ডোনারের জন্য প্রতিমাসে অর্থ প্রদান বাধ্যতামূলক। কিন্তু, কোনো ইভেন্টে
          শারীরিকভাবে উপস্থিত থাকা বাধ্যতামূলক নয়।
        </li>
        <li>
          সেচ্ছাসেবক জন্য প্রতিমাসে অর্থ প্রদান বাধ্যতামূলক নয়। কিন্তু, কোনো
          ইভেন্টে শারীরিকভাবে উপস্থিত থাকা বাধ্যতামূলক।
        </li>
      </ul>
    </div>
  );
}

export default ApplyDescription;
