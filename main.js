

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
