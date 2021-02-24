import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Activity.scss";

function Activity() {
  return (
    <>
      <Navbar />
      <div className="organizationActivity">
        <div className="organizationActivity__banner"></div>

        <div className="organizationActivity__description">
          <h2>
            একজন শারীরিক প্রতিবন্ধীর চলাফেরার জন্য একটি হুইল চেয়ারের ব্যবস্থা
            গ্রহন{" "}
          </h2>
          <h3>
            গ্রাম: <span>খরসতি,</span> ডাকঘর: <span>ভাগনাগর কান্দি,</span>{" "}
            উপজেলা: <span>সিংড়া,</span>জেলা: <span>নাটোর</span>
          </h3>

          <div className="details">
            <div className="text">
              <span>মোঃ মিজানুর রহমান</span>, পেশায় একজন ক্ষুদ্র দোকানি এবং
              জন্মগত শারীরিক প্রতিবন্ধী। জন্মগতভাবে তার পা দুটো বাঁকা। যার জন্য
              তার হাটতে অসুবিধা হয় এবং উনি একা বেশি দূর হেটে যেতে পারেন না। তার
              দোকান বাড়ি থেকে প্রায় ০১ কিলোমিটার দূরে হওয়ায় একা ঠিকমতো দোকানে
              যেতে পারেন না এবং যার ফলে কারো না কারো সাহায্যে দোকানে যেতে হয়।
              এমনকি তিনি যদি আশেপাশেও কোথাও যেতেও চান তবে তাকে অন্যের সাহায্য
              নিতে হয়। অনিয়মিত দোকান যাওয়ায় তার সংসার চালানো কঠিন হয়ে পড়েছে।
              তাকে দোকানে রেখে আসা এবং নিয়ে আসার জন্য অন্য একজনের সাহায্যের
              প্রয়োজন হয়। এই অবস্থায় ওনার চলাফেরার জন্য একটি হুইল চেয়ারের দরকার
              যার সাহায্যে একা চলাফেরা করতে পারবেন এবং তার পারিবারিক স্বচ্ছলতা
              বজায় রাখতে পারবেন। দীর্ঘদিন ধরে বিভিন্ন খানে সাহায্য চেয়েও তিনি
              কোনো সাহায্য পান নি। আমাদের কাছে গত মাসে তার জন্য সাহায্যের আবেদন
              আসে। এমতাবস্থায় সদিচ্ছা ফাউন্ডেশন থেকে মিজানুর রহমান এর সাথে
              যোগাযোগ করে তাকে হুইল চেয়ার কিনে দেওয়ার আস্বাস দেওয়া হয়। যার
              ফলশ্রুতিতে আমরা একটি হুইল চেয়ার নিয়ে তার বাড়িতে গিয়ে হস্তান্তর
              করার পরিকল্পনা করি। মিজান ভাইয়ের অসহায় অবস্থা থেকে পরিত্রানের জন্য
              তাই আজই আপনার অর্থ সাহায্য আমাদের কাছে পৌছে দিন। আপনার সদিচ্ছা হতে
              পারে কারো বেঁচে থাকার অবলম্বন
            </div>
            <div className="amount">
              <div className="value">
                <div>
                    <h3>১০,০০০</h3>
                    <p>প্রয়োজনীয় অর্থ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            {/* <div className="buttons__box">
                <p>প্রয়োজনীয় ভলেন্টিয়ার ৬</p>
                <button>জয়েন</button>
            </div> */}
            <div className="buttons__box">
                <button>দান করুন</button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
