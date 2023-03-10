let card;
const componentData = [
    {
        title: 'CPU',
        img: 'https://images.unsplash.com/photo-1625315714730-d0830cd368bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        short: "Central Processing Unit",
        long: "The CPU is used for processing data and instructions. It is the brain of the computer.",
        url: "https://www.youtube.com/watch?v=vqs_0W-MSB0",
        id:"vqs_0W-MSB0"
    },
    {
        title: 'GPU',
        img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        short: "Graphics Processing Unit",
        long: "The GPU is used for processing graphics and images. It is the eyes of the computer.",
        url: "https://www.youtube.com/watch?v=SrAMBi_8tIk",
        id:"SrAMBi_8tIk"
    },
    {
        title: 'RAM',
        img: 'https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        short: "Random Access Memory",
        long: "The RAM is used for storing data and instructions. It is the memory of the computer.",
        url: "https://www.youtube.com/watch?v=6pp_krChw_A",
        id:"6pp_krChw_A"
    },
    {
        title: 'Motherboard',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        short: "Mainboard",
        long: "The motherboard is used for connecting all the components of the computer. It is the skeleton of the computer.",
        url: "https://www.youtube.com/watch?v=zxGqGCtPxn4",
        id:"zxGqGCtPxn4"
    }, {
        title: 'Power Supply',
        img: 'https://images.unsplash.com/photo-1675893857450-783969c8922f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        short: "Power Supply Unit",
        long: "The power supply is used for providing power to the computer. It is the heart of the computer.",
        url: "https://www.youtube.com/watch?v=i9ZnaA8DZDs",
        id: "i9ZnaA8DZDs"
    }, {
        title: 'HDD',
        img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        short: "Hard Disk Drive",
        long: "The HDD is used for storing data and instructions. It is the memory of the computer.",
        url: "https://www.youtube.com/watch?v=wtdnatmVdIg",
        id: "wtdnatmVdIg"
    },
    {
        title: 'SSD',
        img: 'https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        short: "Solid State Drive",
        long: "The SSD is used for storing data and instructions. It is the memory of the computer.",
        url: "https://youtu.be/5Mh3o886qpg",
        id: "5Mh3o886qpg"
    },
    {
        title: 'CPU Cooler',
        img: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        short: "CPU Cooling System",
        long: "The CPU cooler is used for cooling the CPU. It is the air conditioner of the computer.",
        url: "https://www.youtube.com/watch?v=ieMvtUpFENM",
        id: "ieMvtUpFENM"
    },
    {
        title: 'Fans',
        img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        short: "Computer Fans",
        long: "The fans are used for cooling the computer. They are the air conditioners of the computer.",
        url: "https://www.youtube.com/watch?v=W-cE_s_So4M",
        id: "W-cE_s_So4M"
    },
    {
        title: 'Liquid Cooler',
        img: 'https://images.unsplash.com/photo-1658671141384-c4317684a1a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        short: "Liquid Cooling System",
        long: "The liquid cooler is used for cooling the CPU. It is the air conditioner of the computer.",
        url: "https://www.youtube.com/watch?v=CNKkR-wc8Eg",
        id: "CNKkR-wc8Eg"
    },
    {
        title: 'Keyboard',
        img: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        short: "Computer Keyboard",
        long: "The keyboard is used for inputting data and instructions. It is the brain of the computer.",
        url: "https://www.youtube.com/watch?v=ewE8b7zzej0",
        id: "ewE8b7zzej0"
    },
    {
        title: 'Mouse',
        img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        short: "Computer Mouse",
        long: "The mouse is used for inputting data and instructions. It is the brain of the computer.",
        url: "https://www.youtube.com/watch?v=WsQV1boFCLk",
        id: "WsQV1boFCLk"
    },
    {
        title: 'Monitor',
        img: 'https://images.unsplash.com/photo-1616711906333-23cf8b122a38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
        short: "Computer Monitor",
        long: "The monitor is used for displaying data and instructions. It is the eyes of the computer.",
        url: "https://www.youtube.com/watch?v=uyLDA9QT8EY",
        id: "uyLDA9QT8EY"
    },
    {
        title: 'Speakers',
        img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
        short: "Computer Speakers",
        long: "The speakers are used for outputting sound. They are the voice of the computer.",
        url: "https://www.youtube.com/watch?v=jhg90zsjqt4",
        id: "jhg90zsjqt4"
    },

];


// for each  in componentData, create a new component
componentData.forEach(item => {
    let short = item.short
    let container = document.getElementById('container')
    // create class hardwreComponent with class overlay, title and subtitle inside overlay  
    const hardwareComponent = document.createElement('div')
    hardwareComponent.classList.add('hardwareComponent')
    hardwareComponent.innerHTML = `
        <figure class="snip1573">
  <img class="backgroundImage" src=${item.img} alt="sample89" />
  <figcaption>
    <div class="card-title">${item.title}</div>
  </figcaption>
</figure>
    `

    //add the component to the container
    container.appendChild(hardwareComponent);

    //add click event to the component
    hardwareComponent.addEventListener('click', clickOntile)

})

function clickOntile() {
    //get the title of the clicked component
    let title = this.querySelector('.card-title').innerHTML
    //check at which position the component is in the array
    let index = componentData.findIndex(item => item.title === title)
    index = index.toString()
    localStorage.setItem("index", index)

    window.location.href = `/overviewfullscreen.html`
}

function search() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('hardwareComponent');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
        }
    }
}


function getYoutubeDetails() {

    //set title
    document.getElementById('componenttitle').innerHTML = componentData[localStorage.getItem("index")].title;
    document.getElementById('componenttitle2').innerHTML = componentData[localStorage.getItem("index")].title;

    //set descriptionTop1 and descriptionTop1
    document.getElementById('descriptionTop1').innerHTML = componentData[localStorage.getItem("index")].short;
    document.getElementById('descriptionTop2').innerHTML = componentData[localStorage.getItem("index")].long;

    //set image src
    document.getElementById('componentImage').src = componentData[localStorage.getItem("index")].img;


    const apiKey = ''
    const videoId = componentData[localStorage.getItem("index")].id;

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const videoTitle = data.items[0].snippet.title;
            const videoDescription = data.items[0].snippet.description;

            //create dictionary of languages
            const languages = {
                "en": "English",
                "es": "Spanish",
                "fr": "French",
                "de": "German",
                "it": "Italian",
                "ja": "Japanese",
                "ko": "Korean",
                "pt": "Portuguese",
                "ru": "Russian",
                "zh": "Chinese"
            }

            //check if api is valid and if not set the title to "api error"
            if (data.error) {
                document.getElementById('title').innerHTML = "API error";
                return;
            }

            //get language code
            const languageCode = data.items[0].snippet.defaultAudioLanguage;
            //get full language name
            const language = languages[languageCode];

            document.getElementById('title').innerHTML = videoTitle;
            //set language with the language code
            document.getElementById("channelname").innerHTML = "Channel: " + data.items[0].snippet.channelTitle;
            document.getElementById('language').innerHTML = "Language: " + language;
            document.getElementById('description').innerText = "Description: \n" + videoDescription;
            //get the video thumbnail and set it as img src
            document.getElementById('thumbnail').src = data.items[0].snippet.thumbnails.medium.url;
        })
        .catch(error => {
            console.error('Error:', error);
        });


}

function goHome() {
    window.location.href = `/index.html`
}

function goWatchYoutube() {
    //open url in new tab
    window.open(componentData[localStorage.getItem("index")].url, '_blank');
}