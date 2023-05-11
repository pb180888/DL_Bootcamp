// 1.Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}!`;
  }
}
// 3. Instantiate a new Video instance and call the watch() method.
const newVideo = new Video("21 centure", "Jhon", "2 hours");
console.log(newVideo, newVideo.watch());

// 4. Instantiate a second Video instance with different values.
const secondVideo = new Video("Kill Bill", "Sara", "1.5 hours");
console.log(secondVideo, secondVideo.watch());
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
const films = [
  {
    title: "Road",
    uploader: "Sam",
    time: " 200 min",
  },
  {
    title: "Titanik",
    uploader: "Ronald",
    time: "190 min",
  },
  {
    title: "Lose car for 60 seconds",
    uploader: "Klava",
    time: "213 min",
  },
  {
    title: "Black Car",
    uploader: "Jim",
    time: "136 min",
  },
  {
    title: "Police",
    uploader: "Paul",
    time: "180 min",
  },
];
console.log(Object.values(films));
// 6. Bonus: Loop through the array to instantiate those instances.
Object.values(films).forEach((item) => {
  uploader = item.uploader;
  title = item.title;
  time = item.time;
  let video = new Video(title, uploader, time);
  console.log(video, video.watch());
});
