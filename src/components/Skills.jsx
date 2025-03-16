import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/es6.jpg',
      label: 'ES6',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/jquery.png',
      label: 'JQuery',
      desc: 'Javascript Library'
    },
    {
      imgSrc: '/images/bootstrap.jpg',
      label: 'Bootstrap',
      desc: 'User interface'
    },
    {
      imgSrc: '/images/html5.png',
      label: 'HTML5',
      desc: 'Structure'
    },
    {
      imgSrc: '/images/php.png',
      label: 'PHP',
      desc: 'Language'
    },
    {
      imgSrc: '/images/.net.jpg',
      label: '.Net Framework',
      desc: 'Backend'
    },
    {
      imgSrc: '/images/unity.png',
      label: 'Unity',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/jira.jpg',
      label: 'Jira',
      desc: 'Task tool'
    },
    {
      imgSrc: '/images/confluence.jpg',
      label: 'Confluence',
      desc: 'Documentation tool'
    },
    {
      imgSrc: '/images/bitbucket.jpg',
      label: 'Bitbucket',
      desc: 'Development tool'
    },
    {
      imgSrc: '/images/jenkins.png',
      label: 'Jenkins',
      desc: 'Development tool'
    },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/mysql.png',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skills = () => {
    return(
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                    ))}
                </div>
            </div>
        </section>
    );  
}

export default Skills;