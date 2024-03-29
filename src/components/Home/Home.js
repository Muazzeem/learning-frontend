import './home.css';
import '@justinribeiro/lite-youtube';
import Teacher from "./teacher";
import Course from "../Course/course";
import Content from "../Content/content";
import Contact2 from "../Contact/contact2";
import PopUpContact from "../Contact/pop-up-contact";
import React, {useState} from 'react';
import ContactBase from "../Contact/contact-base";


function HomePage() {
    const [size, setSize] = useState()
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY
        setSize(scrolled)
    })

    return (<div className="container-fluid">
        <div className="home">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6 col-sm-12">
                    <div className="about">
                        <h1>ভূমিকা</h1>
                        <p>
                            কেমন হবে আপনি যদি আপনার ওয়েবসাইট এর জন্য ফ্রি REST API ব্যবহার করতে পারেন? আপনাকে প্রতি
                            মাসে, একটি নির্দিষ্ট সীমা পর্যন্ত, সার্ভার ও
                            ডাটাবেসের জন্য গুনতে হবে না কোনো টাকা আজীবনের জন্য। হ্যাঁ, আপনি ঠিকই পড়েছেন। এই কোর্সে আপনি
                            এমন কিছু
                            টেকনোলজি নিয়ে জানবেন।আপনি যে ওয়েবসাইটে ভিজিট করছেন সেটিও একটি সার্ভারলেস ওয়েবসাইট। আমাদের
                            এই কোর্সের
                            মাধ্যমে আপনিও এমন ওয়েবসাইট তৈরি করতে পারবেন একদম বিনামূল্যে। আপনি যদি অল্প কিছু প্রোগ্রামিং
                            জানেন যেমন:
                            python3.8, node.js তাহলে আপনিও হতে পারবেন ভালো একজন ব্যাকএন্ড ডেভেলপার। আমরা আছি আপনার
                            ক্যারিয়ারের পথে।
                        </p>
                    </div>
                    <div className="sm-player">
                        <div className='player-wrapper bg-white mt-sm-5'>
                            <lite-youtube videoid="-7Fd585bFr8"
                                          playlabel="Play: Intro AWS Serverless REST API development"></lite-youtube>
                        </div>
                        <div className={size > 210 ? "about" : "bla"}>
                            <PopUpContact/>
                        </div>
                        <div className="bg-white sort-details p-4">
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ইউটিউব ভিডিও
                                লেকচার
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                সেশন
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> লাইফ টাইম ভিডিও এক্সেস</div>
                            <div className="mt-3">
                                <span className="h5">কোর্স ফি: ৭৫০</span> <span className="h2 mb-4">৳</span> <br/>
                                </div>
                        </div>
                        <div className="bg-white details">
                            <div className="bg-white p-4">
                                <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ইউটিউব ভিডিও
                                লেকচার
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                সেশন
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> লাইফ টাইম ভিডিও এক্সেস</div>
                                <div className="mt-3">
                                    <span className="h5">কোর্স ফি: ৭৫০</span> <span className="h2 mb-4">৳</span> <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm-device">
                        <Teacher/>
                    </div>
                    <div className="lg-device">
                        <Content/>
                    </div>
                    <Course/>
                </div>
                <div className="col-lg-6 video-player">
                    <div className='player-wrapper bg-white mt-sm-5'>
                        <lite-youtube videoid="-7Fd585bFr8"
                                      playlabel="Play: Intro AWS Serverless REST API development"></lite-youtube>
                    </div>
                    <div className="bg-white">
                        <button type="button" className="btn reg-popup-btn w-100 btn-primary btn-lg mt-4 mb-sm-2"
                                data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            রেজিস্ট্রেশন
                        </button>
                    </div>
                    <div className="bg-white details">
                        <div className="bg-white p-4">
                            <div className="video-text"><i className="fa-solid fa-check"></i> ১০ ঘন্টা ইউটিউব ভিডিও
                                লেকচার
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> ৮ টি লেকচার
                                সেশন
                            </div>
                            <div className="video-text"><i className="fa-solid fa-check"></i> লাইফ টাইম ভিডিও এক্সেস</div>
                        </div>
                        <div className="text-end me-5">
                            <span className="h5">কোর্স ফি: ৭৫০</span><span className="h2 mb-4">৳</span> <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sm-device">
            <Content/>
        </div>
        <div className="lg-device mt-5">
            <Teacher/>
        </div>
        <Contact2/>
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">রেজিস্ট্রেশন</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="contact-modal-body modal-body">
                            <ContactBase/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={size < 210 ? "about" : "bla"}>
            <div className="fixed-bottom bottom-contact">
                <button type="button" className="btn reg-popup-btn w-100 btn-primary btn-lg mt-4 mb-sm-2"
                        data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    রেজিস্ট্রেশন করুন
                </button>
            </div>
        </div>
    </div>);
}

export default HomePage;