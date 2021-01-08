import React, { useState } from "react";
import "../styles/Help.scss";
import "../styles/Form.scss";
import wallet from "../assets/images/wallet.svg";

// Components
import NavForViewer from "../components/NavForViewer";
import FormPageStyle from "../components/FormPageStyle";

function Help() {
    const [name, setName] = useState("");
    const [medium, setMedium] = useState("self");
    const [description, setDescription] = useState("");

    return (
        <div className="help">
            <NavForViewer />
            <div className="help__content">
                {/* HEADING */}
                <h1 className="primary__heading">সাহায্যের জন্য আবেদন করুন</h1>
                <p className="primary__heading-text">
                    সাহায্যের আবেদনের জন্য অবশ্যই আপনার সঠিক তথ্যাদি ও আপনার
                    সাহায্য চাওয়ার বিস্তারিত কারন লিখুন। আমাদের টিম যতোদ্রুত
                    সম্ভব আপনার তথ্য যাচাই করে আপনাকে জানিয়ে দিবে আপনার
                    সাহায্যটি গ্রহন হয়েছে কি না? এবং আমরা আপনাকে কতোটুকু সাহায্য
                    করতে পারবো?
                </p>

                {/* HELP FORM */}
                <div className="form-block">
                    <form>
                        <input type="text" placeholder="সাহায্যের বিষয়" />
                        <div className="input-block">
                            <input
                                type="text"
                                placeholder="আবেদনকারির নাম"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <input type="text" placeholder="ফোন নাম্বার" />
                        </div>
                        <div className="selectOptions">
                            <select
                                value={medium}
                                onChange={(e) => setMedium(e.target.value)}
                            >
                                <option value="self">মাধ্যমঃ নিজে</option>
                                <option value="member">মাধ্যমঃ সদস্য</option>
                            </select>
                            <div className="arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-chevron-down"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div className="input-block">
                            <input type="text" placeholder="গ্রাম" />
                            <input type="text" placeholder="পোষ্ট" />
                        </div>
                        <div className="input-block">
                            <input type="text" placeholder="থানা" />
                            <input type="text" placeholder="জেলা" />
                        </div>
                        <textarea
                            rows="10"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <button>সাবমিট</button>
                    </form>
                </div>
            </div>

            <FormPageStyle image={wallet} component="apply" />
        </div>
    );
}

export default Help;
