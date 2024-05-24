

const Toggle = ()=> {
    const menuContainer = document.querySelector('.menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu')
    const Ul = document.querySelector('ul');

    openMenu.classList.add('hidden');

        menuContainer.addEventListener( "click", ()=>  {
            Ul.classList.toggle('show');
            // console.log('menu clicked');
            

 })}

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
