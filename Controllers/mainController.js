const express = require("express");
const app = express();
const router = express.Router();

const getCategory = (category) => {
  switch (category) {
    case "adventures": {
      return [
        {
          id: 1,
          imageLink:
            "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
          title: "No Fly No Stress",
        },
        {
          id: 2,
          imageLink:
            "https://www.chasingthedonkey.com/wp-content/uploads/2021/04/Cleopatra-beach_Turkey_Cleopatra-Island_Depositphotos_265905366_s-2019-900x600.jpeg",
          title: "Under £549",
        },
        {
          id: 3,
          imageLink:
            "https://purewows3.imgix.net/images/articles/2018_05/nyc_yellow_taxi_in_times_square_hero.jpg?auto=format,compress&cs=strip",
          title: "Transatlantic",
        },
        {
          id: 4,
          imageLink: "https://www.wasatchpeaks.com/hubfs/Cruise2.jpg",
          title: "Cruise Deals",
        },
        {
          id: 5,
          imageLink:
            "https://motionarray.imgix.net/preview-460862-WtRkuEncg27J9fXw-large.jpg?w=660&q=60&fit=max&auto=format",
          title: "Best Sellers",
        },
        {
          id: 6,
          imageLink:
            "https://eoouae45rgb.exactdn.com/2021/07/Cruiseship%40660x550.jpg",
          title: "Luxury",
        },
        {
          id: 7,
          imageLink:
            "https://i2-prod.mirror.co.uk/incoming/article8791331.ece/ALTERNATES/s1200b/PROD-PO-New-cruise-ship.jpg",
          title: "Sail from the UK",
        },
        {
          id: 8,
          imageLink:
            "https://www.travelandleisure.com/thmb/JxB13uPqWRKZskraoGBDgG2p9kw=/1800x1200/filters:fill(auto,1)/seabourn-00-LRGCRUISEWB21-e28559e40be44266a75cbfc1e7574d97.jpg",
          title: "Last Deals",
        },
        {
          id: 9,
          imageLink:
            "https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/191119103222/card/best-british-islands-alderney-1-xl-hd.jpg",
          title: "British Isles",
        },
        {
          id: 10,
          imageLink:
            "https://www.royalcaribbean.com/blog/wp-content/uploads/2018/02/Allure-Of-The-Seas-Header-Option-1650x1408.jpg",
          title: "2023 Cruises",
        },
        {
          id: 11,
          imageLink:
            "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
          title: "2024 Cruises",
        },
        {
          id: 12,
          imageLink:
            "https://cdn.ceoworld.biz/wp-content/uploads/2019/05/Cruise-Liners.jpg",
          title: "2025 Cruises",
        },
        {
          id: 13,
          imageLink:
            "https://www.civitatis.com/blog/wp-content/uploads/2021/06/ballena-alaska-portada.jpg",
          title: "Alaska",
        },
        {
          id: 14,
          imageLink:
            "https://www.jet2holidays.com/-/media/jet2holidays/images/components/info%20cards/beach/next%20summer/summer%202022/types/family.jpg?h=250&w=450&la=en&hash=37F46EC14E269669F68B18F6D2A9E9B758DAF340",
          title: "Best Sellers",
        },
      ];
      break;
    }
    case "cruises": {
      return [
        {
          id: 1,
          imageLink:
            "https://www.israel21c.org/wp-content/uploads/2021/03/RCCL_Odyssey_PoolDeck.jpg",
          title:
            "8 Night Mediterranean Cruise Vision of the Seas Friday 14 October 2022 from £538pp ",
        },
        {
          id: 2,
          imageLink:
            "https://i.guim.co.uk/img/media/8eace687268eeda921642581623074a3ff64c42f/1219_1066_2958_1775/master/2958.jpg?width=1200&quality=85&auto=format&fit=max&s=119b802505d43141db927a8c90b4d14b",
          title:
            "3 Night Europe Cruise MSC Virtuosa SAturday 24 September 2022 from £306pp",
        },
        {
          id: 3,
          imageLink:
            "https://www.seabourn.com/content/dam/sbn/marketing-assets/deals/destination/se2025ebs-destination-1800x800.jpg.image.1008.754.low.jpg",
          title:
            "7 Night Europe Cruise Wonder of the Seas Thursday 13 October 2022 from £776pp",
        },
        {
          id: 4,
          imageLink:
            "https://media.cntraveler.com/photos/6008949d8ebb4b589a89b55a/16:9/w_2560%2Cc_limit/BR_D_Lisbon_07.jpg",
          title:
            "2 Night Europe Cruise Queen Mary 2 Sunday 16 October 2022 from £295pp",
        },
        {
          id: 5,
          imageLink:
            "https://motionarray.imgix.net/preview-460862-WtRkuEncg27J9fXw-large.jpg?w=660&q=60&fit=max&auto=format",
          title: "Best Sellers",
        },
      ];
      break;
    }

    case "blogposts": {
      return [
        {
          title: "UK Holidays Guide",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://www.expatica.com/app/uploads/sites/10/2014/05/bank-holidays.jpg",
        },
        {
          title: "Greek Holidays Guide",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://media.product.which.co.uk/prod/images/original/gm-a01ae6a6-e6e4-4eff-9392-3c0ab71d1876-lefkada1advice.jpg",
        },
        {
          title: "Do I have to tip or pay gratuities onboard?",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://media.istockphoto.com/photos/dining-at-the-beach-taverna-picture-id1217869695?k=20&m=1217869695&s=612x612&w=0&h=Faeefm5RrfCj-DWbD8kTUWV0C3G18Po2YBzZdT6Ss28=",
        },
        {
          title: "Travel you can really trust",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://content.tui.co.uk/adamtui/2017_9/6_9/21c10406-d87a-456a-841a-a7e60095f27a/shutterstock_631736717WebOriginalCompressed.jpg?i10c=img.resize(width:658);img.crop(width:658%2Cheight:370)",
        },
        {
          title: "What's a Cabin Category?",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://us.123rf.com/450wm/dimbar76/dimbar761709/dimbar76170900323/87252898-christmas-decoration-of-the-street-kuznetsk-bridge-in-moscow.jpg?ver=6",
        },
        {
          title: "How do I know which cruise terminal i am saili...",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/tahiti1.jpg",
        },
        {
          title: "UK Holidays Guide",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam ratione odio facere nes",
          image:
            "https://res.cloudinary.com/lastminute/image/upload/w_500,h_350,c_fill,q_auto,f_auto,dpr_2.0/c_limit,w_768,h_999999/v1649408416/Beach-Pool_View_eimpgu.jpg",
        },
        {
          title: "Greek Holidays Guide",
          body: "New to Cruising or a Seasoned Funseeker?Carnival is fun By MattRoberts from My Kind of Cruise",
          image: "https://www.responsibletravel.com/imagesClient/S_257364.jpg",
        },
      ];
    }

    default:
      return [];
  }
};

/* 
  * blog/:category:
  * This endpoint is responsible to handle all the requests of the application
  * In real case scenario this end point could do all the work at once to save network requests
  * eg. It would be better to have for loop adding all the required data and return them at once  
  * Parameters:category:String
  * Return Object

  */
router.get("/:category", (req, res) => {
  const { category } = req.params;
  res.send({ error: false, data: getCategory(category) });
});

module.exports = router;
