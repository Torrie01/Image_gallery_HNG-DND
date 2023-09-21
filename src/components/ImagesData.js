const images = [
  {
    "id": 1,
    "path": "/images/image1.jpg",
    "tags": ["minions", "painting"]
  },
  {
    "id": 2,
    "path": "/images/image2.jpg",
    "tags": ["research", "wildlife"]
  },
  {
    "id": 3,
    "path": "/images/image3.jpg",
    "tags": ["sky", "scrapper"]
  },
  {
    "id": 4,
    "path": "/images/image4.jpg",
    "tags": ["school", "mood"]
  },
  {
    "id": 5,
    "path": "/images/image5.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 6,
    "path": "/images/image6.jpg",
    "tags": ["food", "cuisine"]
  },
  {
    "id": 7,
    "path": "/images/image7.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 8,
    "path": "/images/image8.jpg",
    "tags": ["people", "play"]
  },
  {
    "id": 9,
    "path": "/images/image9.jpg",
    "tags": ["nature", "scape"]
  },
  {
    "id": 10,
    "path": "/images/image10.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 11,
    "path": "/images/image11.jpg",
    "tags": ["city", "urban"]
  },
  {
    "id": 12,
    "path": "/images/image12.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 13,
    "path": "/images/image13.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 14,
    "path": "/images/image14.jpg",
    "tags": ["food", "cuisine"]
  },
  {
    "id": 15,
    "path": "/images/image15.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 16,
    "path": "/images/image16.jpg",
    "tags": ["architect", "portrait"]
  },
  {
    "id": 17,
    "path": "/images/image17.jpg",
    "tags": ["nature", "culinary"]
  },
  {
    "id": 18,
    "path": "/images/image18.jpg",
    "tags": ["animals", "workshop"]
  },
  {
    "id": 19,
    "path": "/images/image19.jpg",
    "tags": ["town", "urban"]
  },
  {
    "id": 20,
    "path": "/images/image20.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 21,
    "path": "/images/image21.jpg",
    "tags": ["workshop", "wildlife"]
  },
  {
    "id": 22,
    "path": "/images/image22.jpg",
    "tags": ["food", "culinary"]
  },
  {
    "id": 23,
    "path": "/images/image23.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 24,
    "path": "/images/image24.jpg",
    "tags": ["people", "portrait"]
  },
  {
    "id": 25,
    "path": "/images/image25.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 26,
    "path": "/images/image26.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 27,
    "path": "/images/image27.jpg",
    "tags": ["city", "urban"]
  },
  {
    "id": 28,
    "path": "/images/image28.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 29,
    "path": "/images/image29.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 30,
    "path": "/images/image30.jpg",
    "tags": ["water", "beach"]
  },
  {
    "id": 31,
    "path": "/images/image31.jpg",
    "tags": ["troop", "splash"]
  },
  {
    "id": 32,
    "path": "/images/image32.jpg",
    "tags": ["people", "paradise"]
  },
  {
    "id": 33,
    "path": "/images/image33.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 34,
    "path": "/images/image34.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 35,
    "path": "/images/image35.jpg",
    "tags": ["city", "urban"]
  },
  {
    "id": 36,
    "path": "/images/image36.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 37,
    "path": "/images/image37.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 38,
    "path": "/images/image38.jpg",
    "tags": ["food", "cuisine"]
  },
  {
    "id": 39,
    "path": "/images/image39.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 40,
    "path": "/images/image40.jpg",
    "tags": ["people", "portrait"]
  },
  {
    "id": 41,
    "path": "/images/image41.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 42,
    "path": "/images/image42.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 43,
    "path": "/images/image43.jpg",
    "tags": ["city", "urban"]
  },
  {
    "id": 44,
    "path": "/images/image44.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 45,
    "path": "/images/image45.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 46,
    "path": "/images/image46.jpg",
    "tags": ["food", "cuisine"]
  },
  {
    "id": 47,
    "path": "/images/image47.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 48,
    "path": "/images/image48.jpg",
    "tags": ["paradise", "amaze"]
  },
  {
    "id": 49,
    "path": "/images/image49.jpg",
    "tags": ["nature", "landscape"]
  },
  {
    "id": 50,
    "path": "/images/image50.jpg",
    "tags": ["play", "happy"]
  },
  {
    "id": 51,
    "path": "/images/image51.jpg",
    "tags": ["town", "places"]
  },
  {
    "id": 52,
    "path": "/images/image52.jpg",
    "tags": ["star", "landscape"]
  },
  {
    "id": 53,
    "path": "/images/image53.jpg",
    "tags": ["building", "material"]
  },
  {
    "id": 54,
    "path": "/images/image54.jpg",
    "tags": ["food", "cuisine"]
  },
  {
    "id": 55,
    "path": "/images/image55.jpg",
    "tags": ["travel", "adventure"]
  },
  {
    "id": 56,
    "path": "/images/image56.jpg",
    "tags": ["people", "portrait"]
  },
  {
    "id": 57,
    "path": "/images/image57.jpg",
    "tags": ["nature", "land"]
  },
  {
    "id": 58,
    "path": "/images/image58.jpg",
    "tags": ["animals", "wildlife"]
  },
  {
    "id": 59,
    "path": "/images/image59.jpg",
    "tags": ["city", "urban"]
  },
  {
    "id": 60,
    "path": "/images/image60.jpg",
    "tags": ["neutral", "scape"]
  }
];

  export default images
  