// ------------ Daily Challenge : Creating Objects ------------

// In this exercise, you will use object oriented programming concepts 
// to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
//      - title (a string)
//      - uploader (a string, the person who uploaded it)
//      - time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//    “uploader parameter watched all time parameter of title parameter!”

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of '${this.title}'!`);
  }
};

// 3. Instantiate a new Video instance and call the watch() method.

const video1 = new Video("Funny Cats", "CatsOneLove", 300);
video1.watch();

// 4. Instantiate a second Video instance with different values.

const video2 = new Video("Playing Diablo IV for the first time", "GooffyGamer", 900);
video2.watch();

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//    Think of the best data structure to save this information within the array.

const videoData = [
  ["LifeHack #1 - Bathroom", "CherryLady", 120],
  ["LifeHack #2 - Kitchen", "CherryLady", 240],
  ["This prank is stupid", "BobbyDin2005", 840],
  ["More funny cats", "CatsOneLove", 400],
  ["Meditation exercises", "NotGuru", 630]
];

// 6. Bonus: Loop through the array to instantiate those instances.

const videoInstances = [];
for (let data of videoData) {
  const [title, uploader, time] = data;
  const video = new Video(title, uploader, time);
  videoInstances.push(video);
}

for (let video of videoInstances) {
  video.watch();
}