import { db } from '~/server/db'

async function main() {
  const response = await Promise.all([
    db.shoppingItem.upsert({
      where: { itemName: 'AirPods Pro' },
      update: {},
      create: {
        itemName: 'AirPods Pro',
        itemSubtitle: 'Headphone',
        itemDescription: 'Best headphone',
        imageSrc:
          'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1694014871985',
        imageAlt: 'AirPods Pro',
        itemPrice: 8490,
        itemSpecialPrice: 7490,
        itemAvailableQuantity: 20
      },
    }),
    db.shoppingItem.upsert({
      where: { itemName: 'Tomica多美 No.114 豐田世紀Century' },
      update: {},
      create: {
        itemName: 'Tomica多美 No.114 豐田世紀Century',
        itemSubtitle: 'komica',
        itemDescription: 'TOMICA多美小汽車 創立於1970年， 前後共計發行超過600款以上各式的車款喔！ 於它是根據各種名牌真車按60-70比例縮小製成， 每年都會推出新款來替換舊有的一些款式， 這也就是TOMICA所使用的1－120編號的由來喔！ 所以TOMICA小汽車不光是孩子們的玩具， 也是大朋友們的收藏、收集品！ 外盒尺寸： 4cm*8cm*2.5cm 材質：塑膠 產地: 中國',
        imageSrc:
          'https://img.pchome.com.tw/cs/items/DEAS1IA900A9CU5/000001_1642745887.jpg',
        imageAlt: 'komica',
        itemPrice: 189,
        itemSpecialPrice: 161,
        itemAvailableQuantity: 50
      },
    }),
    db.shoppingItem.upsert({
      where: { itemName: 'Cifra 3 Table Clock' },
      update: {},
      create: {
        itemName: 'Cifra 3 Table Clock',
        itemSubtitle: 'Digital Clock',
        itemDescription: 'Cifra 3 is a table clock designed by Gino Valle at the end of the 60s, is built by Solari Lineadesign.  Cifra 3 is a clock with the system of a roller with horizontal leaves patented in 1966; it is recognized worldwide as an icon of 20th century design, to the extent that it became part of the permanent collection of the MoMA (Museum of Modern Art) in New York and the London Science Museum. Cifra 3 is an object that represents the perfect marriage between technology and creative design, between engineering and communicative force, that made the history of design is that always remain current.  Power Supply: 2 × 1,5 V LR20 (included). Time Adjustment: Manual.',
        imageSrc:
          'https://shop.mohd.it/media/catalog/product/cache/11b1b7f5d04077d123613fe5bd9b4f06/c/i/cifra-3-black.jpg',
        imageAlt: 'Digital Clock',
        itemPrice: 12888,
        itemAvailableQuantity: 10
      },
    }),
    await db.shoppingItem.upsert({
      where: { itemName: 'Chainsaw Man Pochita Collectible AirPods Pro Case' },
      update: {},
      create: {
        itemName: 'Chainsaw Man Pochita Collectible AirPods Pro Case',
        itemSubtitle: '耳機保護殼',
        itemDescription: '靈感源於驚悚電影與其文化，「恐懼俱樂部」系列推出多款珍藏版產品，包括融合了鏈鋸人中的人氣角色和圖案的手機殼、波奇塔珍藏版 AirPods 保護殼與更多值得你收藏的配件！',
        imageSrc:
          'https://cdn-stamplib.casetify.com/cms/image/f9da04249c64dbba67c0f3f6a4031292.jpg',
        imageAlt: '耳機保護殼',
        itemPrice: 2140,
        itemSpecialPrice: 2040,
        itemAvailableQuantity: 5
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
