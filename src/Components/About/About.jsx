/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.ibb.co/T1RNwPh/pngtree-start-up-team-working-flat-design-style-png-image-5870928-transparent-Craiyon.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        EduTrade <br/>
                        </h2>
                        <h3 className='text-2xl text-gray-900 font-bold md:text-3xl'>Simplifying Educational Resource Exchange for Students</h3>
                        <p className="mt-6 text-gray-600 text-base">
                        EduTrade is a platform dedicated to simplifying the exchange of educational resources. Whether you're looking to buy, rent, or sell textbooks, notes, or past question papers, EduTrade empowers students to access materials they need in an affordable and efficient way. Our goal is to foster a collaborative learning environment where resources are easily accessible for everyone.
                        </p>
                        <p className="mt-4 text-gray-600 text-base">
                        <p className='font-semibold text-lg'>Why EduTrade?</p> Traditional methods of acquiring educational materials can be costly and time-consuming. EduTrade provides a solution by creating a marketplace where students can exchange resources directly. This saves both time and money, while also promoting a sustainable practice of reusing valuable educational materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}