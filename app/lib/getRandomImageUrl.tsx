export function getRandomImageUrl() {
    const imageUrls = [
      "https://i0.wp.com/vfxdownload.com/wp-content/uploads/2020/09/IMG_Preview-12.jpg?fit=590%2C300&ssl=1",
      "https://css-tricks.com/wp-content/uploads/2021/04/wpn-20210416.jpg",
      "https://tvnewsroom.org/wp-content/uploads/2021/05/GB-News-2.jpg",
      "https://www.mytemplatesshop.com/wp-content/uploads/2017/08/Daily-News-powerpoint-template-presentation.jpg",
      "https://www.thestreet.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTY4NjUwMzc3NzM1MjUxODYz/image-placeholder-title.png"
    ];
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }