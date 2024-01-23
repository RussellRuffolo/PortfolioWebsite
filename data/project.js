export const project = [
    {
        projectName: 'DISCIN',
        imageLink: 'discin.png',
        link: 'https://discinvr.com',
        description: 'DISCIN is a virtual reality disc golf game developed with Unity for the Meta Quest. To build a complete VR game from the ground up, I took on many projects. I built/implemented a custom physically simulated disc flight model using existing scientific literature and a differential equation solver library. I also built our UI/UX and gameplay loop. Graphical peformance is an important bottleneck in VR, so I implemented my own foliage shader and billboarding system for our trees. This project has been an amazing learning experience, and I am very excited to finally release DISCIN. It is currently available in Alpha distribution through the Meta Quest App Lab.',
        tags: ['Unity', 'C#', 'VR'],
      },
    {
        projectName: 'Crashtodon',
        imageLink: 'mastodon.jpg',
        link: 'https://crashtodon.net',
        description: 'Crashtodon is an instance of the open source social network Mastodon. I have been hosting Crashtodon on a Digital Ocean server since March of 2022, and it sees daily traffic from my friends and family. Mastodon\'s tech stack is Ruby, Node.js, PostreSQL and Redis. I built Crashtodon from source and succesfully federated it with the global Mastodon network.',
        tags: ['Ruby', 'Node.js', 'PostgreSQL', 'Redis'],
    },
    {
        projectName: 'PA Bridges',
        imageLink: 'pabridges.png',
        link: 'https://pabridges.net',
        description: 'PA Bridges is a geospatial visualization made using Federal Highway Administration bridge data. This project was a hackathon-style exercise in building a full-stack application in one day. To achieve this I first implemented a simple API using Node.js and SQLite. I then used combined this with Mapbox\'s public API for a web maps and markers to place the bridges on the map.',
        tags: ['Node.js', 'SQLite', 'Nginx'], 
    }
  ]