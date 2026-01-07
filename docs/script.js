
// ! Side NAV BAR ! //

const navbarItems = [
  {
    title: null,
    items: {
      Home: "home-5-line",
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
