var movieObjects = [
  {
    title: "Aquaman",
    hasWatched: "seen",
    rating: 4.5
  },
  {
    title: "Batman Ninja",
    hasWatched: "seen",
    rating: 1
  },
  {
    title: "Birdbox",
    hasWatched: "seen",
    rating: 4.5
  },
  {
    title: "Bumblebee",
    hasWatched: "not seen",
    rating: 4
  }
];

function movieList(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(
      "You have " +
        arr[i].hasWatched +
        " " +
        arr[i].title +
        " - " +
        arr[i].rating +
        " stars"
    );
  }
}
