const videosArray = [
    {
        id: 1,
        title: "Learn JavaScript in 30 Minutes",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Code Academy",
        views: "1M views"
    },
    {
        id: 2,
        title: "Mastering CSS Grid in 2024",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Design Tips",
        views: "500K views"
    },
    {
        id: 3,
        title: "How to Build a YouTube Clone",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Web Dev Simplified",
        views: "750K views"
    },
    {
        id: 4,
        title: "Vue.js Crash Course for Beginners",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Vue Mastery",
        views: "200K views"
    },
    {
        id: 5,
        title: "React vs Vue: Which to Choose?",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "JS Wars",
        views: "300K views"
    },
    {
        id: 6,
        title: "Top 10 VS Code Extensions",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Dev Tools",
        views: "900K views"
    },
    {
        id: 7,
        title: "Understanding Node.js Event Loop",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Node School",
        views: "400K views"
    },
    {
        id: 8,
        title: "Introduction to NestJS",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Backend Pro",
        views: "150K views"
    },
    {
        id: 9,
        title: "How DNS Works - Computer Networks",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Tech Explained",
        views: "800K views"
    },
    {
        id: 10,
        title: "Build a Full Stack App with Vue & Express",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Full Stack Dev",
        views: "1.2M views"
    },
    {
        id: 11,
        title: "Docker for Beginners - Full Course",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Cloud Dev",
        views: "350K views"
    },
    {
        id: 12,
        title: "Nginx Configuration Guide",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Server Side",
        views: "275K views"
    },
    {
        id: 13,
        title: "PostgreSQL vs MySQL - Which is Better?",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Database Explained",
        views: "600K views"
    },
    {
        id: 14,
        title: "Understanding REST APIs with Express",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "API Dev",
        views: "400K views"
    },
    {
        id: 15,
        title: "JavaScript ES2024 Features",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "JS Updates",
        views: "500K views"
    },
    {
        id: 16,
        title: "Debugging JavaScript like a Pro",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Code Debug",
        views: "220K views"
    },
    {
        id: 17,
        title: "Async/Await in JavaScript Explained",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Async Master",
        views: "900K views"
    },
    {
        id: 18,
        title: "Top 5 UI Libraries for Vue.js",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Design Dev",
        views: "450K views"
    },
    {
        id: 19,
        title: "Best Practices for Secure APIs",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "Security Dev",
        views: "300K views"
    },
    {
        id: 20,
        title: "GraphQL vs REST: Which is Better?",
        thumbnail: "https://avatars.mds.yandex.net/i?id=dcc563386d02622c2934dd2d153604d4-4984053-images-thumbs&n=13",
        channel: "API Wars",
        views: "700K views"
    }
];

let videos = [];

function fetch() {
    const storage = localStorage.getItem('videos');
    videos = JSON.parse(storage) || videosArray;
}

fetch();
