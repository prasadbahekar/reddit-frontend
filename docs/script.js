
// ! Side NAV BAR ! //

const navbarItems = [
  {
    title: null,
    items: {
      Home: "home-5-fill",
      Popular: "share-circle-line",
      Explore: "dice-line",
      All: "apps-2-add-line",
      "Start a Community": "add-line",
    }
  },

  {
    title: "GAMES ON REDDIT",
    items: {
      Honk: {
        type: "image",
        src: "https://styles.redditmedia.com/t5_e5k98u/styles/communityIcon_30h25pf0lplf1.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=00425316d32febb23d8e28775d9b62310da40bdc"
      },
      "Farm Merge Valley": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_94o1jc/styles/communityIcon_ulh81pgpik7g1.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=62485decb5e0260d8ead3d9d36e45b80944c737b"
      },
      "Quiz Planet": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_e4ho82/styles/communityIcon_empvy2tel7cf1.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=d210a8f7484feca8a7fbde32dde72f020cd0e6ed"
      },
      "Discover More Games": "gamepad-line",
    }
  },

  {
    title: "CUSTOM FEEDS",
    items: {
      "Create Custom Feed": "add-line",
    }
  },

  {
    title: "RECENT",
    items: {
      "r/Minecraft": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_2r05i/styles/communityIcon_d57tsf7cazif1.png?width=128&frame=1&auto=webp&s=c9f9aa524613676efc61f227f939b6115d52cb72"
      },
      "r/Corsair": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_2tqmj/styles/communityIcon_x4uyob0u3jq51.png?width=128&frame=1&auto=webp&s=681a5427c8488a3900c9861e91ddacb4049d0889"
      },
      "r/RedditGames": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_2r77s/styles/communityIcon_lm5i4gbnyyue1.png?width=128&frame=1&auto=webp&s=61219f81bc6004a360671c836e486497a3fb3f16"
      },
    }
  },

  {
    title: "COMMUNITIES",
    items: {
      "Manage Communities" : "settings-3-line",
      "r/Minecraft": {
        type: "image",
        src: "https://styles.redditmedia.com/t5_2r05i/styles/communityIcon_d57tsf7cazif1.png?width=128&frame=1&auto=webp&s=c9f9aa524613676efc61f227f939b6115d52cb72"
      },
    }
  },

  {
    title: "RESOURCES",
    items: {
      "About Reddit": "reddit-line",
      Advertise: "megaphone-line",
      "Developer Platform": "codepen-line",
      "Reddit Pro": "pie-chart-line",
      "Help" : "question-line",
      "Blog" : "news-line",
      "Careers" : "suitcase-line",
      "Press" : "user-voice-line"
    }
  },
];

const sidebar = document.querySelector("nav.sidebar");

navbarItems.forEach((section, index) => {
  const sectionDiv = document.createElement("div");
  sectionDiv.className = "flex flex-col gap-3";

  // Section title
  if (section.title) {
    const headerBtn = document.createElement("button");
    headerBtn.className =
      "flex items-center justify-between text-gray-700 rounded-xl hover:bg-gray-300 w-full cursor-pointer";

    headerBtn.innerHTML = `
      <span class="text-xs capitalize tracking-wider">${section.title}</span>
      <i class="ri-arrow-up-s-line text-lg"></i>
    `;

    sectionDiv.appendChild(headerBtn);
  }

  if (section.title == "GAMES ON REDDIT") {
    sectionDiv.innerHTML += `<div class="card w-full bg-[#facc16] rounded-2xl flex p-2 pl-3 items-center mb-2 gap-2.5">
                <img src="https://styles.redditmedia.com/t5_fa0bbd/styles/communityIcon_d2b9480ju12g1.jpg" class="h-10" alt="">
                <div>
                    <h3 class="text-sm font-medium">Pocket Grids</h3>
                    <p class="text-xs">Mini crosswords</p>
                    <p class="text-[10px] text-gray-700 mt-1">3.3M monthly players</p>
                </div>
            </div>`
  }

  // Section items
  Object.entries(section.items).forEach(([label, value]) => {
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.className =
      "w-full text-left flex items-center gap-3.5 text-sm";

    // Icon-based item
    if (typeof value === "string") {
      anchor.innerHTML = `
        <i class="ri-${value} text-xl px-1.5"></i>
        <span class="text-sm text-gray-800">${label}</span>
      `;
    }

    // Image-based item (subscriptions)
    if (typeof value === "object" && value.type === "image") {
      anchor.innerHTML = `
        <img src="${value.src}" class="h-8 rounded-full" />
        <span class="text-sm text-gray-800">${label}</span>
      `;
    }

    sectionDiv.appendChild(anchor);
  });

  sidebar.appendChild(sectionDiv);

  // Divider (except last section)
  if (index !== navbarItems.length - 1) {
    const hr = document.createElement("hr");
    hr.className = "text-gray-300";
    sidebar.appendChild(hr);
  }
});


// ! FEED GENERATION !

posts = [
  {
    profile : "https://styles.redditmedia.com/t5_2r05i/styles/communityIcon_d57tsf7cazif1.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=ca418b6dbcc780eaebdb6f29a0866e22a973848b",
    name : "r/Minecraft",
    time : "21 hr.",
    title : "CRAFTY and FURNACE",
    image : "https://preview.redd.it/crafty-and-furnace-v0-dsaz3jn1lqbg1.jpg?width=1080&crop=smart&auto=webp&s=a6165e81e20463bb0fb75c38054d3dd83118e54d",
    votes : "1.6k",
    comments : "87"
  },
  {
    profile : "https://styles.redditmedia.com/t5_2qh44/styles/communityIcon_1vctc2ym3zt51.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=e5c465941b0b45291433c29fe38b43a097f66d0e",
    name : "r/youtube",
    time : "2 d",
    title : "WHAT (by Spu7nix) A 1.2 M HOUR VIDEO!?",
    image : "https://preview.redd.it/crafty-and-furnace-v0-dsaz3jn1lqbg1.jpg?width=1080&crop=smart&auto=webp&s=a6165e81e20463bb0fb75c38054d3dd83118e54d",
    votes : "1.6k",
    comments : "87"
  },
  {
    profile : "https://styles.redditmedia.com/t5_2v5ru/styles/communityIcon_vparsr8ainpa1.png?width=96&height=96&frame=1&auto=webp&crop=96%3A96%2Csmart&s=12b9a20a470b99e403837987bb500a44260fd6d0",
    name : "r/LinusTechTips",
    time : "2 d",
    title : "CRAFTY and FURNACE",
    image : "https://preview.redd.it/if-it-can-survive-usps-it-can-survive-anything-v0-bamog8eeusbg1.jpg?width=1080&crop=smart&auto=webp&s=d1d64fcf1dd9e3c1281d8ab00876e8447eda2d08",
    votes : "627",
    comments : "59"
  },
]

const postsContainer = document.querySelector(".posts");

function getString(obj) {
  const result = `
    <div class="post w-full flex flex-col gap-2 p-4 hover:bg-gray-50 rounded-2xl">
      <div class="details flex justify-between items-center w-full">
          <div class="flex gap-2 items-center">
              <img class="h-6 rounded-full" src="${obj.profile}" alt="">
              <p class="text-xs font-medium">${obj.name}<span class="font-normal text-gray-600"> &bull; ${obj.time} ago</span></p>
          </div>
          <a href="#"><i class="ri-more-fill"></i></a>
      </div>
      <a href="#"><h2 class="text-lg font-medium">${obj.title}</h2></a>
      <div class="media w-full h-128 flex justify-center border border-[#bbb] rounded-2xl">
          <img class="h-full max-h-full" src="${obj.image}" alt="">
      </div>
      <div class="flex gap-2">
          <div class="votes flex items-center gap-2 py-1 px-4 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <a href="#"><i class="text-xl ri-arrow-up-circle-line hover:text-red-400"></i></a>
              <p class="text-sm font-medium">${obj.votes}</p>
              <a href="#"><i class="text-xl ri-arrow-down-circle-line hover:text-gray-600"></i></a>
          </div>
          <div class="flex items-center gap-1 font-medium py-1 px-4 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <i class="ri-chat-3-line text-xl"></i>
              <p class="text-sm">${obj.comments}</p>
          </div>
          <div class="flex items-center gap-1 font-medium py-1 px-4 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <i class="ri-award-line text-xl"></i>
          </div>
          <div class="flex items-center gap-1 font-medium py-1 px-4 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200">
              <i class="ri-share-forward-line text-xl"></i>
              <p class="text-sm">Share</p>
          </div>
      </div>
    </div>
  `
  return result;
}

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  postsContainer.innerHTML += getString(post);
}


// ! RECENT POSTS !


recentPosts = [
  {
    channel : "https://styles.redditmedia.com/t5_2v5ru/styles/communityIcon_vparsr8ainpa1.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=74a703f601a9da07b343037de83b60d01a15fc22",
    name : "r/LinusTechTips",
    title : "If it can survive USPS, it can Survive Anything",
    time : "2d",
    votes : "627",
    comments : "59",
    img : "https://b.thumbs.redditmedia.com/6I0cVgHXSvmxPmOY4RnbS5vBBwEq7bFiQpf_DvpFoSk.jpg"
  },
  {
    channel : "https://styles.redditmedia.com/t5_2qh44/styles/communityIcon_1vctc2ym3zt51.png?width=48&height=48&frame=1&auto=webp&crop=48%3A48%2Csmart&s=e5c465941b0b45291433c29fe38b43a097f66d0e",
    name : "r/youtube",
    title : "WHAT (by Spu7nix) A 1.2 M HOUR VIDEO!?",
    time : "3d",
    votes : "717",
    comments : "28",
    img : "https://b.thumbs.redditmedia.com/U6-ncR792-6YyKX0Ar2m0nsQsbgUV0BFEr-JP9KHoVI.jpg"
  },
]


function generateRecentPosts (obj) {
  return `
    <div class="post flex justify-between gap-6">
      <div>
          <div class="flex gap-2 items-center mb-2">
              <img class="h-6 rounded-full cursor-pointer" src="${obj.channel}" alt="">
              <p class="text-xs text-gray-700"><span class="hover:underline cursor-pointer">${obj.name}</span><span class="font-normal text-gray-600"> &bull; ${obj.time} ago</span></p>
          </div>
          <h4 class="text-sm font-medium text-gray-600 mb-4 cursor-pointer hover:underline">${obj.title}</h4>
          <p class="text-xs text-gray-600">${obj.votes} upvotes <span class="font-normal text-gray-600"> &bull; ${obj.comments} comments</span></p>
      </div>
      <div class="h-20 w-20 shrink-0">
          <img class="h-full w-full rounded" src="${obj.img}" alt="">
      </div>
    </div>
  `
}

const recentPostsContainer = document.querySelector(".recent-posts");

for (let i = 0; i < recentPosts.length; i++) {
  const post = recentPosts[i];
  recentPostsContainer.innerHTML += generateRecentPosts(post);
  if (i != recentPosts.length - 1) {recentPostsContainer.innerHTML += '<hr class="m-0 text-gray-300">'}
}