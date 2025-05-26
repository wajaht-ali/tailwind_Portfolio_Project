/* eslint-disable no-unused-vars */
import React from 'react'
import MimarLogo from "../assets/images/mimAR.png";
import SparkleoLogo from "../assets/images/sparkleo.svg";
import AlrightTechLogo from "../assets/images/Alright.svg";

const Timeline = () => {
    const experienceData = [
        {
            from: "Feb 2025",
            to: "Present",
            company: "mimAR Studios",
            role: "Junior Software Engineer",
            companyLogo: MimarLogo,
            description: "Working as fullstack developer, contributing to migration of backend services from Firebase to Node.js envirnoment for system scalability."
        },
        {
            from: "Nov 2024",
            to: "Feb 2025",
            company: "Sparkleo Technologies",
            role: "ASE Intern",
            companyLogo: SparkleoLogo,
            description: "Collaborated with the development team to contribute to building a web dashboard for data visualization from an IoT-embedded backend system."
        },
        {
            from: "Oct 2024",
            to: "Nov 2024",
            company: "Alright Tech",
            role: "ASE Intern",
            companyLogo: AlrightTechLogo,
            description: "Worked as MERN Stack Intern, assisted the Frontend team in smooth integration of RESTful APIs for an AI-based video generation platform."
        },
    ]
    return (
        <div>
            {experienceData.map((item, index) => (
                <div key={index}>
                    
                </div>
            ))}
        </div>
    )
}

export default Timeline