const users = [
  {
    username: 'alex_dev',
    img: 'https://picsum.photos/seed/alex_dev/200',
    description:
      'Full-stack developer passionate about open-source and UI design.',
  },
  {
    username: 'sora_coder',
    img: 'https://picsum.photos/seed/sora_coder/200',
    description:
      'Building accessible web experiences and drinking too much matcha.',
  },
  {
    username: 'cyber_sam',
    img: 'https://picsum.photos/seed/cyber_sam/200',
    description:
      'Security enthusiast, ethical hacker, and nocturnal coffee drinker.',
  },
  {
    username: 'maya_designs',
    img: 'https://picsum.photos/seed/maya_designs/200',
    description: 'UI/UX Designer crafting human-centered digital experiences.',
  },
  {
    username: 'tech_guru99',
    img: 'https://picsum.photos/seed/tech_guru99/200',
    description:
      'Reviewing the latest gadgets and writing cloud architecture guides.',
  },
  {
    username: 'luna_sky',
    img: 'https://picsum.photos/seed/luna_sky/200',
    description:
      'Astrophotographer capturing the cosmos one long exposure at a time.',
  },
  {
    username: 'david_codes',
    img: 'https://picsum.photos/seed/david_codes/200',
    description:
      'Backend engineer focused on distributed systems and performance.',
  },
  {
    username: 'pixel_artisan',
    img: 'https://picsum.photos/seed/pixel_artisan/200',
    description: 'Creating retro 8-bit game assets and indie games.',
  },
  {
    username: 'elena_v',
    img: 'https://picsum.photos/seed/elena_v/200',
    description:
      'Data scientist turning complex metrics into actionable insights.',
  },
  {
    username: 'marcus_w',
    img: 'https://picsum.photos/seed/marcus_w/200',
    description:
      'Mobile developer creating smooth native iOS and Android apps.',
  },
  {
    username: 'chloe_bakes',
    img: 'https://picsum.photos/seed/chloe_bakes/200',
    description: 'Pastry chef sharing sourdough tips and dessert recipes.',
  },
  {
    username: 'zen_coder',
    img: 'https://picsum.photos/seed/zen_coder/200',
    description:
      'Finding simplicity in complex algorithms and daily mindfulness.',
  },
  {
    username: 'robert_frosty',
    img: 'https://picsum.photos/seed/robert_frosty/200',
    description: 'Outdoor adventurer, trail runner, and nature writer.',
  },
  {
    username: 'sophia_ml',
    img: 'https://picsum.photos/seed/sophia_ml/200',
    description:
      'AI researcher exploring neural networks and natural language processing.',
  },
  {
    username: 'kevin_beats',
    img: 'https://picsum.photos/seed/kevin_beats/200',
    description: 'Music producer, sound engineer, and analog synth collector.',
  },
  {
    username: 'nina_writes',
    img: 'https://picsum.photos/seed/nina_writes/200',
    description: 'Sci-fi novelist, coffee lover, and fiction workshop host.',
  },
  {
    username: 'liam_photo',
    img: 'https://picsum.photos/seed/liam_photo/200',
    description: 'Street photographer documenting urban stories across Europe.',
  },
  {
    username: 'emma_green',
    img: 'https://picsum.photos/seed/emma_green/200',
    description: 'Sustainability advocate sharing eco-friendly living habits.',
  },
  {
    username: 'oliver_fit',
    img: 'https://picsum.photos/seed/oliver_fit/200',
    description:
      'Personal trainer emphasizing functional movement and holistic health.',
  },
  {
    username: 'ava_creates',
    img: 'https://picsum.photos/seed/ava_creates/200',
    description: '3D artist rendering surreal landscapes in Blender.',
  },
  {
    username: 'noah_db',
    img: 'https://picsum.photos/seed/noah_db/200',
    description:
      'Database administrator maintaining high availability PostgreSQL clusters.',
  },
  {
    username: 'isabella_travels',
    img: 'https://picsum.photos/seed/isabella_travels/200',
    description: 'Digital nomad working remotely from cafes around the globe.',
  },
  {
    username: 'ethan_devops',
    img: 'https://picsum.photos/seed/ethan_devops/200',
    description:
      'Automating deployments, managing Kubernetes, and breaking builds.',
  },
  {
    username: 'mia_crafts',
    img: 'https://picsum.photos/seed/mia_crafts/200',
    description:
      'DIY enthusiast making handmade pottery and minimalist home decor.',
  },
  {
    username: 'lucas_gamer',
    img: 'https://picsum.photos/seed/lucas_gamer/200',
    description: 'Esports strategist, casual streamer, and RPG collector.',
  },
  {
    username: 'charlotte_law',
    img: 'https://picsum.photos/seed/charlotte_law/200',
    description:
      'IP lawyer specializing in tech startups and open-source licenses.',
  },
  {
    username: 'benjamin_notes',
    img: 'https://picsum.photos/seed/benjamin_notes/200',
    description:
      'Classical pianist and music historian writing about the Baroque era.',
  },
  {
    username: 'amelia_botanist',
    img: 'https://picsum.photos/seed/amelia_botanist/200',
    description: 'Plant collector turning apartments into indoor jungles.',
  },
  {
    username: 'mason_rust',
    img: 'https://picsum.photos/seed/mason_rust/200',
    description:
      'Systems developer building fast, memory-safe command-line tools.',
  },
  {
    username: 'harper_trends',
    img: 'https://picsum.photos/seed/harper_trends/200',
    description:
      'Fashion stylist exploring sustainable textiles and vintage markets.',
  },
  {
    username: 'logan_crypto',
    img: 'https://picsum.photos/seed/logan_crypto/200',
    description:
      'Blockchain researcher analyzing decentralized finance protocols.',
  },
  {
    username: 'evelyn_words',
    img: 'https://picsum.photos/seed/evelyn_words/200',
    description:
      'Copywriter and brand strategist helping founders tell their story.',
  },
  {
    username: 'james_coaching',
    img: 'https://picsum.photos/seed/james_coaching/200',
    description:
      'Leadership coach helping early-stage founders scale their teams.',
  },
  {
    username: 'abigail_astro',
    img: 'https://picsum.photos/seed/abigail_astro/200',
    description: 'Physics student documenting space exploration milestones.',
  },
  {
    username: 'alexander_builds',
    img: 'https://picsum.photos/seed/alexander_builds/200',
    description: 'Woodworker crafting modern minimalist furniture.',
  },
  {
    username: 'emily_paws',
    img: 'https://picsum.photos/seed/emily_paws/200',
    description: 'Veterinarian sharing pet care tips and rescue stories.',
  },
  {
    username: 'daniel_finance',
    img: 'https://picsum.photos/seed/daniel_finance/200',
    description: 'Educator demystifying personal finance and index investing.',
  },
  {
    username: 'elizabeth_art',
    img: 'https://picsum.photos/seed/elizabeth_art/200',
    description:
      'Oil painter experimenting with light, texture, and impressionism.',
  },
  {
    username: 'henry_tea',
    img: 'https://picsum.photos/seed/henry_tea/200',
    description: 'Tea sommelier exploring single-origin harvests worldwide.',
  },
  {
    username: 'scarlett_film',
    img: 'https://picsum.photos/seed/scarlett_film/200',
    description:
      'Indie filmmaker documenting untold stories in short documentaries.',
  },
]

function showUsers(arr) {
  const container = document.getElementById('cardsContainer')
  container.innerHTML = '' // Clear container

  arr.forEach((user) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = user.img
    img.classList.add('bg-img')

    const blurredLayer = document.createElement('div')
    blurredLayer.classList.add('blurred-layer')

    const content = document.createElement('div')
    content.classList.add('content')

    const name = document.createElement('h3')
    name.textContent = user.username

    const description = document.createElement('p')
    description.textContent = user.description

    content.appendChild(name)
    content.appendChild(description)

    card.appendChild(img)
    card.appendChild(blurredLayer)
    card.appendChild(content)

    // Append to container grid
    container.appendChild(card)
  })
}

showUsers(users)

//debounce function to limit the rate of search execution
function debounce(fn, delay = 300) {
  let timer

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

const inp = document.querySelector('#searchInput')
const handleSearch = debounce(function () {
  const searchTerm = inp.value.trim().toLowerCase()

  const filteredContainsUser = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchTerm) ||
      user.description.toLowerCase().includes(searchTerm)
    )
  })

  const filteredStartWithUser = users.filter((user) => {
    return user.username.toLowerCase().startsWith(searchTerm)
  })

  const notFound = document.querySelector('.notFound')
  notFound.innerHTML = ''
  if (filteredStartWithUser.length === 0) {
    if (filteredContainsUser.length === 0) {
      notFound.innerHTML = `<h1>No related content found for "${searchTerm}"</h1>`
    } else {
      notFound.innerHTML = `<h1>No username found for "${searchTerm}"</h1>`
    }
  }

  const filtered = [
    ...new Set([...filteredStartWithUser, ...filteredContainsUser]),
  ]

  showUsers(filtered)
})

inp.addEventListener('input', handleSearch)
