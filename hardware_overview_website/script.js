const componentData = [
        {
            title: 'CPU',
            img: 'https://images.unsplash.com/photo-1625315714730-d0830cd368bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
            short: "Central Processing Unit",
            long: "The CPU is used for processing data and instructions. It is the brain of the computer."
        },
        {
            title: 'GPU',
            img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            short: "Graphics Processing Unit",
            long: "The GPU is used for processing graphics and images. It is the eyes of the computer."
        },
        {
            title: 'RAM',
            img: 'https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            short: "Random Access Memory",
            long: "The RAM is used for storing data and instructions. It is the memory of the computer."
        },
        {
            title: 'Motherboard',
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "Mainboard",
            long: "The motherboard is used for connecting all the components of the computer. It is the skeleton of the computer."
        },
        {
            title: 'Power Supply',
            img: 'https://images.unsplash.com/photo-1675893857450-783969c8922f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            short: "Power Supply Unit",
            long: "The power supply is used for providing power to the computer. It is the heart of the computer."
        },
        {
            title: 'HDD',
            img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            short: "Hard Disk Drive",
            long: "The HDD is used for storing data and instructions. It is the memory of the computer."
        },
        {
            title: 'SSD',
            img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "Solid State Drive",
            long: "The SSD is used for storing data and instructions. It is the memory of the computer."
        },
        {
            title: 'Case',
            img: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            short: "Computer Case",
            long: "The case is used for housing all the components of the computer. It is the body of the computer."
        },
        {
            title: 'CPU Cooler',
            img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "CPU Cooling System",
            long: "The CPU cooler is used for cooling the CPU. It is the air conditioner of the computer."
        },
        {
            title: 'Fans',
            img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            short: "Computer Fans",
            long: "The fans are used for cooling the computer. They are the air conditioners of the computer."
        },
        {
            title: 'Liquid Cooler',
            img: 'https://images.unsplash.com/photo-1658671141384-c4317684a1a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "Liquid Cooling System",
            long: "The liquid cooler is used for cooling the CPU. It is the air conditioner of the computer."
        },
        {
            title: 'Keyboard',
            img: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "Computer Keyboard",
            long: "The keyboard is used for inputting data and instructions. It is the brain of the computer."
        },
        {
            title: 'Mouse',
            img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
            short: "Computer Mouse",
            long: "The mouse is used for inputting data and instructions. It is the brain of the computer."
        },
        {
            title: 'Monitor',
            img: 'https://images.unsplash.com/photo-1616711906333-23cf8b122a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
            short: "Computer Monitor",
            long: "The monitor is used for displaying data and instructions. It is the eyes of the computer."
        },
        {
            title: 'Speakers',
            img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            short: "Computer Speakers",
            long: "The speakers are used for outputting data and instructions. They are the ears of the computer."
        },
        {
            title: 'Webcam',
            img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            short: "Computer Webcam",
            long: "The webcam is used for inputting data and instructions. It is the brain of the computer."
        },
        {
            title: 'Microphone',
            img: 'https://images.unsplash.com/photo-1648522168443-101452948e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            short: "Computer Microphone",
            long: "The microphone is used for inputting data and instructions. It is the brain of the computer."
        },
        {
            title: 'Headset',
            img: 'https://images.unsplash.com/photo-1633933304443-bd5715bacb1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            short: "Computer Headset",
            long: "The headset is used for inputting data and instructions. It is the brain of the computer."
        },
    
    ];
    

// for each  in componentData, create a new component
componentData.forEach(item => {
    let container = document.getElementById('container')
    // create class hardwreComponent with class overlay, title and subtitle inside overlay  
    const hardwareComponent = document.createElement('div')
    hardwareComponent.classList.add('hardwareComponent')
    hardwareComponent.innerHTML = `
        <div class="overlay">
            <div class="title">${item.title}</div>
            <div class="subtitle">${item.short}</div>
            <div class="long">${item.long}</div>
        </div>
    `
    // background image
    hardwareComponent.style.backgroundImage = `url(${item.img})`
    

    //add the component to the container
    container.appendChild(hardwareComponent);

})


// when you hover over a component, display the long description and hide the short description
const hardwareComponents = document.querySelectorAll('.hardwareComponent')
hardwareComponents.forEach(component => {
    /*make the text change when you hover over the component*/
        component.addEventListener('mouseover', () => {
        component.querySelector('.subtitle').style.display = 'none'
        component.querySelector('.long').style.display = 'block'
        })
        component.addEventListener('mouseout', () => {
        component.querySelector('.subtitle').style.display = 'block'
        component.querySelector('.long').style.display = 'none'
        })

    /*make the component clickable and open a new tab with the wikipedia page of the component*/
        component.addEventListener('click', () => {
        window.open(`https://en.wikipedia.org/wiki/${component.querySelector('.subtitle').innerText}`, '_blank')
        })
})