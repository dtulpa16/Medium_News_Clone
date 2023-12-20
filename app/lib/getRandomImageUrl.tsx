export function getRandomImageUrl() {
    const imageUrls = [
      "https://css-tricks.com/wp-content/uploads/2021/04/wpn-20210416.jpg",
      "https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg",
      "https://www.thestreet.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTY4NjUwMzc3NzM1MjUxODYz/image-placeholder-title.png",
      "/news-placeholder-minmal.png",
      "/news-placeholder-pink.png",
      "/news-placeholder-purple.png",
      "/news-placeholder-red.png",
      "/news-placeholder-white.png",
      "/news-placeholder-yellow.png",
    ];
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }