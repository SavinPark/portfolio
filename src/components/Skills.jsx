function Skills() {

    const skills = ['HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Vuetify',
                    'JavaScript', 'jQuery', 'React', 'Vue.js',
                    'Git', 'Github',
                    'Figma', 'Adobe Photoshop',
                    'MySQL', 'Java', 'Spring', 'Python',];
    return(
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {
                    skills.map((ele, idx) => {
                        return (
                            <li key={idx}>
                                <div className="skill-name">{ele}</div>
                                <div className="ability-bar">
                                    <div className="ability-percent"></div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Skills;