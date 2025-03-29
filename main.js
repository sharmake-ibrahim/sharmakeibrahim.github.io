    const display_copyright_year = document.querySelector('.copyright span');
    const d = new Date();
   let year = d.getFullYear();
    display_copyright_year.textContent = year
       

const Toggle = ()=> {
    var hamburger = document.querySelector('.hamburger-menu');
    const Ul = document.querySelector('ul');

   

        hamburger.addEventListener( "click", ()=>  {
            Ul.classList.toggle('show');
            hamburger.classList.toggle('active');
            
})


const UnorderedList = ()=> {
    const Ul = document.querySelector('ul');
    const li =  document.querySelectorAll('ul li')
    li.forEach( (link)=>{
        link.addEventListener('click', ()=> {
        Ul.classList.remove('show');
        hamburger.classList.remove("active");
        })
    })
}

UnorderedList()






}

Toggle();










const CopyAndPaste = () => {

    
    const copyBtn = document.querySelector('.copyBtn')
        
        copyBtn.addEventListener( "click", async ()=> {
            try {
                const content = document.querySelector('.contact-info h1').textContent;
                await navigator.clipboard.writeText(content);
                
                const copiedTxt = await navigator.clipboard.readText();
                console.log(copiedTxt)
                
            } catch (error) {
                console.log(error);
                
            }
        });

    
}

CopyAndPaste()




const NavigateLinks = ()=> {
    const navLinks = document.querySelectorAll(' li a');
    const sections = document.querySelectorAll('section');
        let currentSection = "home";
        Window.addEventListener("scroll", ()=> {

            sections.forEach( (section)=> {
                window.scrollY >= section.offsetTop ?  currentSection = section.id : ""

            })
        })

    navLinks.forEach( (link)=> {
        if(  link.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove("active");
            navLinks.classList.add("active")
        }
    })
}

NavigateLinks();