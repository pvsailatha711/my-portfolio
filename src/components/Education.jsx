import { useEffect } from 'react'

function Education() {
    const educationData = [
        {
            institution: "The University of Texas at Dallas",
            degree: "Master of Science in Computer Science",
            location: "Dallas, TX",
            gpa: "GPA: 3.81/4.0 | Dean's Graduate Scholarship",
            date: "August 2024 - May 2026"
        },
        {
            institution: "Koneru Lakshmaiah University",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            location: "Guntur, Andhra Pradesh, India",
            gpa: "GPA: 3.65/4.0",
            date: "July 2018 - May 2022"
        }
    ];

    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        return () => {
            revealElements.forEach(element => {
                revealObserver.unobserve(element);
            });
        };
    }, []);

    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card card reveal">
                            <h3>{edu.institution}</h3>
                            <p className="education-degree">{edu.degree}</p>
                            <p className="education-location">{edu.location}</p>
                            <p className="education-gpa">{edu.gpa}</p>
                            <p className="education-date">{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
