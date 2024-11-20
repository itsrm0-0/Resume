import React from 'react';
import Content from './content';
import Skills from './skill';


const LeftSection = () => {
    return <section className="w-1/2  border-r-8" >
       <Content/>
       <Skills/>
    </section>
}
export default LeftSection