module.exports.girdlist = async (ctx) => {
  ctx.body = {
    status: 200,
    girdlist: [{
        id: 1,
        img_src: "/images/nav1.png"
      },
      {
        id: 2,
        img_src: "/images/nav2.png"
      },
      {
        id: 3,
        img_src: "/images/nav3.png"
      },
      {
        id: 4,
        img_src: "/images/nav4.png"
      },
      {
        id: 5,
        img_src: "/images/nav5.png"
      },
      {
        id: 6,
        img_src: "/images/nav6.png"
      }
    ]
  }
}