import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Food Delivery',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/SucharithaPolimera/Food-Delivery-App'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Shopping',
      tags: ['Shopping', 'Development'],
      projectLink: 'https://github.com/SucharithaPolimera/Shopping-App/tree/main/01-starting-project'
    },
    {
      imgSrc: '/images/project-9.jpg',
      title: 'Quiz',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/SucharithaPolimera/Quiz-App'
    },
    {
      imgSrc: '/images/project-8.jpg',
      title: 'Investment Calculator',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/SucharithaPolimera/Investment-Calculator'
    },
    {
      imgSrc: '/images/project-10.jpg',
      title: 'Game',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/SucharithaPolimera/Tic-Tac-Toe'
    },
  ];

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">{works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                ))}</div>
            </div>
        </section>
    );
}
export default Work;