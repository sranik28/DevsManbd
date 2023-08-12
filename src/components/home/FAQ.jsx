"use client"

import React, { useState } from 'react';

const FAQ = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    const accordionItems = [
        {
            title: 'Accordion Item #1',
            content:
                'This is the first item\'s accordion body. It is shown by default...',
        },
        {
            title: 'Accordion Item #2',
            content:
                'This is the second item\'s accordion body. It is hidden by default...',
        },
        {
            title: 'Accordion Item #3',
            content:
                'This is the third item\'s accordion body. It is hidden by default...',
        },
    ];

    return (
        <div className='container mt-20' id="accordionExample ">
            <h2 className='text-3xl font-bold text-center mb-14 '>Frequently Asked  <span className='text-[#068fff]'>Question</span></h2>
            {accordionItems.map((item, index) => (
                <div
                    key={index}
                    className={` ${index === activeAccordion ? 'rounded-t-lg' : ''
                        } border-neutral-200  bg-white ${index === activeAccordion ? '' : 'dark:border-neutral-600'
                        }`}
                >
                    <h2 className="mb-0">
                        <button
                            className={`group relative flex w-full items-center ${index === activeAccordion ? 'rounded-t-[15px]' : 'rounded-none'
                                } border-0 duration-300 transition-opacity bg-white px-5 py-4 text-left text-xl font-semibold text-neutral-800  ${index === activeAccordion ? 'hover:z-[2] focus:z-[3]  focus:outline-none ' : ''
                                }`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={index === activeAccordion ? 'true' : 'false'}
                        >
                            {item.title}
                            <span
                                className={`ml-auto h-5 w-5 shrink-0 rotate-${index === activeAccordion ? '[-180deg]' : '0'
                                    } fill-[#336dec] transition-transform duration-200 ease-in-out ${index !== activeAccordion ? 'dark:group-[[data-te-collapse-collapsed]]:fill-white' : ''
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    {index === activeAccordion && (
                        <div className="px-5 py-4">
                            <strong>{item.content}</strong>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;
