import React, { useState } from 'react';

function Resume(){
    const proficiencies = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Express.js',
        'RESTful APIs',
        'GraphQL',
        'Bootstrap',
        'Sequelize',
        'Mongoose',
        'Handlebars.js',
        'Jest',
        'React Testing Library',
        'Git',
        'GitHub',
        'Heroku',
        'jQuery',
        'serverside APIs',


      ];

    return(
        <section className='mx-4'>
            <p></p>
            <h2 className='text-center'>Resume</h2>
            <p></p>
            <h3>Proficiencies</h3>
            <ul>
            {proficiencies.map((proficiency) => (
                <li key={proficiency}>{proficiency}</li>
            ))}
            </ul>
    </section>
)}

export default Resume