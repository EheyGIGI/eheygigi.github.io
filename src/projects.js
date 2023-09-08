'use strict';

// Logic handling for Category filtering
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;
    if(filter == null){return;}
    
    projects.forEach((project) => {
        if(filter ==='all' || filter === project.dataset.type){
            project.computedStyleMap.display = 'block';
        }else{
            project.computedStyleMap.display = 'none';
        }
    });
});

