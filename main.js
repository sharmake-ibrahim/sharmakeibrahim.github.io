

const Toggle = ()=> {
    const menuContainer = document.querySelector('.menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const openMenu = document.querySelector('.open-menu')
    const Ul = document.querySelector('ul');

    openMenu.classList.add('hidden');

        menuContainer.addEventListener( "click", ()=> {
            Ul.classList.toggle('show');
            // console.log('menu clicked');
            // closeMenu.style.display= "none";
            // openMenu.style.display= "block";

        //     openMenu.addEventListener('click', ()=> {
        //         Ul.classList.toggle('show');
        //         closeMenu.style.display= "block";
        //         openMenu.style.display= "block";
        //     })
        // })

        closeMenu.addEventListener("click", () => {
            Ul.classList.add('show');   // Show the ul
            Ul.style.display = 'block'; // Ensure ul is visible
            closeMenu.classList.add('hidden'); // Hide closeMenu
            openMenu.classList.remove('hidden'); // Show openMenu
        });
    
        openMenu.addEventListener("click", () => {
            Ul.classList.remove('show'); // Hide the ul
            Ul.style.display = 'none';   // Ensure ul is hidden
            closeMenu.classList.remove('hidden'); // Show closeMenu
            openMenu.classList.add('hidden'); // Hide openMenu
        });

        }



)}

Toggle();