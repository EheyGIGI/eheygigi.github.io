const sectionIds = ['#home', '#about', '#skills', '#about', '#testimonial', 'contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => 
    document.querySelector(`[href="${id}"]`)
);

const visibleSections = sectionIds.map(()=> false); //기본적으로 비워줌

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => {observer.observe(section)});

function observerCallback(entries){
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        console.log(entry.target.id);
        //console.log(index);
        // console.log(entry.target);
        // console.log(entry.isIntersecting);
        // console.log(entry.intersectionRatio);
    })
}