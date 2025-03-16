import ReviewCard from "./ReviewCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experience = [
    {
      content: "Driven DevOps intern with experience in using Jenkins, Jira, Confluence, and Bitbucket to streamline development and deployment processes. Proficient in supporting CI/CD pipelines, managing project workflows, and collaborating in agile environments. Eager to leverage strong problem-solving skills and tool knowledge to contribute to team efficiency and system reliability.",
      name: 'DevOps Intern',
      imgSrc: '/images/devops.jpg',
      company: 'Planon Software Pvt. Ltd'
    },
    {
      content: 'Detail-oriented Front-End intern with hands-on experience in developing user-friendly web interfaces using PHP, HTML, CSS, and ES6. Skilled in creating responsive and visually appealing websites, with a focus on clean code and optimized performance. Passionate about enhancing user experience and collaborating with teams to bring design concepts to life.',
      name: 'FrontEnd Intern',
      imgSrc: '/images/front-end.png',
      company: 'Planon Software Pvt. Ltd'
    },
    {
      content: 'Versatile Full Stack Developer with experience in both front-end and back-end technologies, including HTML, CSS, ES6, PHP, .NET, and MySQL. Proficient in building and maintaining robust web applications, and experienced with tools like Bitbucket, Jenkins, Jira, and Confluence for seamless version control, CI/CD, and agile project management. Adept at collaborating in cross-functional teams to deliver high-quality solutions while ensuring optimal performance and user experience.',
      name: 'Full Stack Associate Developer',
      imgSrc: '/images/full-stack.jpg',
      company: 'Planon Software Pvt. Ltd'
    },
  ];

const Review = () => {
  useGSAP(()=>{
    gsap.to(".scrub-slide",{
      scrollTrigger:{
        trigger:'.scrub-slide',
        start:'80% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000'
    });
  });
    return (
        <section id="experience" className="section overflow-hidden"> 
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Experiences
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {experience.map(({content, name, imgSrc, company}, key)=>(
                        <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Review;