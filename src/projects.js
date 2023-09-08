'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.projects');

// Logic handling for filtering Categories
categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;

    if(filter == null){return;}
    
    handleActiveSelection(event.target);
    filterProjects(filter);
});

//replacing active mode when it's clicked
function handleActiveSelection(target){
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

//Filtering projects
function filterProjects(filter){
    projects.forEach((project) => {
        if(filter ==='all' || filter === project.dataset.type){
            project.style.display = 'block';
        }else{
            project.style.display = 'none';
        }
    });

    //Set Animation effects
    projectContainer.classList.add('anim-out');

    //Off Animation effects
    setTimeout(()=>{
        projectContainer.classList.remove('anim-out');
    }, 250)
}

