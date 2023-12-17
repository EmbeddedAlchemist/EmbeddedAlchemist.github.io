const img_profile_src = 'https://avatars.githubusercontent.com/u/91362332';

const img_profile = document.getElementById('img_profile');

img_profile.setAttribute('src', img_profile_src);


function wheel_event() {
    const root = document.querySelector(":root");
    var targetX = 0;
    root.addEventListener('wheel', e => {
        e.preventDefault();
        targetX += e.deltaY;
        if (targetX < 0)
            targetX = 0;
        // else if (targetX > root.clientWidth)
        //     targetX = root.clientWidth;
        console.log(root.scrollLeft, targetX)
        root.scrollTo(targetX, root.scrollTop);
    }, {passive:false})

}

window.addEventListener('load', e => {
    // const hostname = window.location.hostname;
    //wheel_event();
    const hostname = "embeddedalchemist.github.io";
    // fetch(`https://finicounter.eu.org/counter?host=${hostname}`)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((response) => { 
    //         console.log(response);
    //     })
})
