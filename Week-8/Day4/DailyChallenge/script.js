class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; 
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const Video1 = new Video("Video 1", "Uploader 1", 120);
Video1.watch();

const Video2 = new Video("Video 2", "Uploader 2", 180);
Video2.watch();

const videoData = [
    { title: "Video 1", uploader: "Uploader 1", time: 120 },
    { title: "Video 2", uploader: "Uploader 2", time: 180 },
    { title: "Video 3", uploader: "Uploader 3", time: 240 },
    { title: "Video 4", uploader: "Uploader 4", time: 300 },
    { title: "Video 5", uploader: "Uploader 5", time: 150 }
];

const videoInstance = [];
videoData.forEach((data) => {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstance.push(video)
});

console.log(videoInstance);


