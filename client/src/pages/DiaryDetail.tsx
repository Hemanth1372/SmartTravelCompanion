import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Sample diary data
const diaryDetails = {
  "1": {
    id: "1",
    title: "Darjeeling - The queen of eastern Himalayas",
    destination: "Darjeeling", // Added destination field
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=60",
    category: "Nature",
    author: "Travel Expert",
    date: "May 10, 2023",
    content: `
      <p>Darjeeling, nestled in the foothills of the Himalayas, is a breathtaking hill station known for its tea plantations, stunning views of Mount Kanchenjunga, and the famous Darjeeling Himalayan Railway.</p>
      
      <h3>Morning (7:00 AM - 10:00 AM)</h3>
      <p>Start your day early with a visit to Tiger Hill to witness the spectacular sunrise over the Kanchenjunga range. The golden rays illuminating the snow-capped peaks create a magical experience that's worth the early wake-up call.</p>
      
      <h3>Mid-day (10:30 AM - 2:00 PM)</h3>
      <p>Visit the iconic Happy Valley Tea Estate to learn about tea production and sample some of the world's finest Darjeeling tea. The rolling hills covered with tea bushes offer perfect photo opportunities.</p>
      
      <h3>Afternoon (2:30 PM - 5:30 PM)</h3>
      <p>Take a ride on the famous Darjeeling Himalayan Railway, also known as the "Toy Train." This UNESCO World Heritage Site offers a nostalgic journey through the mountains with breathtaking views.</p>
      
      <h3>Evening (6:00 PM - 8:00 PM)</h3>
      <p>Explore the vibrant Mall Road, the heart of Darjeeling town. Shop for local handicrafts, enjoy street food, and soak in the colonial charm of this hill station as the day comes to an end.</p>
    `,
    highlights: [
      "Tiger Hill - Spectacular sunrise views of Kanchenjunga",
      "Happy Valley Tea Estate - World-famous Darjeeling tea",
      "Darjeeling Himalayan Railway - UNESCO World Heritage Site",
      "Mall Road - Shopping and local cuisine",
      "Batasia Loop - Scenic viewpoint with War Memorial",
    ],
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1709116140564-e4b00b3dba05?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2068",
      "https://images.unsplash.com/photo-1706031614360-8f599347a373?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
      "https://images.unsplash.com/photo-1558005137-d9619a5c539f?auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1733259712004-3f2423864052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    ],
  },
  "2": {
    id: "2",
    title:
      "8 hours in Guwahati - The spiritual significance of this Kamrupas trip",
    destination: "Guwahati", // Added destination field
    image:
      "https://images.unsplash.com/photo-1623776025811-fd139155a39b?auto=format&fit=crop&w=500&q=60",
    category: "Spiritual",
    author: "Travel Expert",
    date: "June 15, 2023",
    content: `
      <p>Guwahati, the gateway to Northeast India, is a city steeped in spiritual significance and natural beauty. Even with just 8 hours to spare, you can experience the essence of this ancient city.</p>
      
      <h3>Morning (8:00 AM - 11:00 AM)</h3>
      <p>Begin your spiritual journey at the sacred Kamakhya Temple, one of the oldest of the 51 Shakti Peethas. Perched atop Nilachal Hill, this temple is dedicated to the goddess Kamakhya and is a center for Tantric practices. The temple's architecture and spiritual ambiance make it a must-visit.</p>
      
      <h3>Mid-day (11:30 AM - 2:00 PM)</h3>
      <p>Head to the mighty Brahmaputra River for a river cruise. The panoramic views of the city and the Umananda Temple on Peacock Island, the world's smallest inhabited riverine island, are breathtaking. The island houses a temple dedicated to Lord Shiva.</p>
      
      <h3>Afternoon (2:30 PM - 4:30 PM)</h3>
      <p>Visit the Assam State Museum to understand the rich cultural heritage of the region. The museum houses a collection of sculptures, artifacts, and manuscripts that tell the story of Assam's history.</p>
      
      <h3>Evening (5:00 PM - 8:00 PM)</h3>
      <p>Conclude your day at the serene Basistha Ashram, located at the foothills of the Shillong Plateau. This ancient temple and ashram, dedicated to sage Basistha, is surrounded by lush greenery and natural springs, offering a peaceful end to your spiritual journey.</p>
    `,
    highlights: [
      "Kamakhya Temple - One of the oldest Shakti Peethas",
      "Brahmaputra River Cruise - Panoramic views of the city",
      "Umananda Temple - World's smallest inhabited riverine island",
      "Assam State Museum - Rich cultural heritage",
      "Basistha Ashram - Ancient temple surrounded by natural springs",
    ],
    images: [
      "https://images.unsplash.com/photo-1689947674001-f9a8a08f0480?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1722538277327-ce76b2f3de22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://plus.unsplash.com/premium_photo-1691031429084-894ffad104ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://plus.unsplash.com/premium_photo-1697729603596-90888a05a6bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1708670092244-f964d12fa9f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  "3": {
    id: "3",
    title: "Nature on Wheels - Cycling tour through Jaipur",
    destination: "Jaipur", // Added destination field
    image:
      "https://images.unsplash.com/photo-1651569411954-b843950d0c1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    category: "Adventure",
    author: "Travel Expert",
    date: "July 5, 2023",
    content: `
      <p>Jaipur, the Pink City, is not just about palaces and forts. Experience the city from a different perspective with a cycling tour that takes you through its natural landscapes and hidden gems.</p>
      
      <h3>Morning (6:00 AM - 9:00 AM)</h3>
      <p>Begin your cycling adventure early morning at Nahargarh Biological Park. The cool morning air and the serene environment make for a perfect start as you pedal through the park observing local wildlife and flora.</p>
      
      <h3>Mid-day (9:30 AM - 12:30 PM)</h3>
      <p>Cycle to the Jal Mahal and around Man Sagar Lake. The palace standing in the middle of the lake creates a picturesque backdrop for your cycling journey. Take a break here to enjoy the view and refuel.</p>
      
      <h3>Afternoon (1:00 PM - 4:00 PM)</h3>
      <p>Continue your tour to the Aravalli hills surrounding Jaipur. The rugged terrain offers an exciting challenge for cycling enthusiasts while providing panoramic views of the city below.</p>
      
      <h3>Evening (4:30 PM - 6:30 PM)</h3>
      <p>Conclude your cycling tour at the Central Park of Jaipur, the city's largest green space. Relax amidst the lush gardens and reflect on your day's adventure as the sun sets over the Pink City.</p>
    `,
    highlights: [
      "Nahargarh Biological Park - Wildlife and nature trails",
      "Jal Mahal and Man Sagar Lake - Scenic water views",
      "Aravalli Hills - Challenging terrain and panoramic vistas",
      "Central Park - Urban green space and relaxation",
      "Pink City streets - Cultural immersion on two wheels",
    ],
    images: [
      "https://images.unsplash.com/photo-1704980525572-71e6aaab66dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1680733432129-a634077c9048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
    ],
  },
  4: {
    id: 4,
    title: "Island hopping in Andaman - A tropical paradise",
    destination: "Andaman", // Added destination field
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=500&q=60",
    category: "Beach",
    author: "Travel Expert",
    date: "August 20, 2023",
    content: `
      <p>The Andaman Islands, with their pristine beaches, crystal-clear waters, and vibrant marine life, offer an unforgettable island-hopping experience. Discover the beauty of these tropical gems in the Bay of Bengal.</p>
      
      <h3>Day 1: Port Blair</h3>
      <p>Start your island adventure in Port Blair, the capital city. Visit the historic Cellular Jail, a colonial prison turned national memorial, and enjoy the Light and Sound show in the evening that narrates the struggle for India's independence.</p>
      
      <h3>Day 2: Havelock Island</h3>
      <p>Ferry to Havelock Island, home to the famous Radhanagar Beach, often rated as one of Asia's best beaches. The white sands and turquoise waters create a perfect setting for relaxation and water activities like snorkeling and scuba diving.</p>
      
      <h3>Day 3: Neil Island</h3>
      <p>Continue to Neil Island, a smaller and less crowded gem. Explore the natural rock formations at Howrah Bridge, relax at Bharatpur Beach, and witness stunning sunsets at Laxmanpur Beach.</p>
      
      <h3>Day 4: Ross Island</h3>
      <p>Visit Ross Island, once the administrative headquarters of the British. Now reclaimed by nature, the island showcases ruins of colonial buildings entwined with massive tree roots, creating a hauntingly beautiful landscape.</p>
    `,
    highlights: [
      "Radhanagar Beach - Asia's finest white sand beach",
      "Cellular Jail - Historical colonial prison",
      "Neil Island - Natural rock formations and quiet beaches",
      "Ross Island - Colonial ruins reclaimed by nature",
      "Marine life - Vibrant coral reefs and diverse aquatic species",
    ],
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1712515497052-0b16bbdbfb4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?auto=format&fit=crop&w=500&q=60",
    ],
  },
  5: {
    id: 5,
    title: "Adventure in Vizag - Exploring the coastal city",
    destination: "Vizag", // Added destination field
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=500&q=60",
    category: "Adventure",
    author: "Travel Expert",
    date: "September 10, 2023",
    content: `
      <p>Visakhapatnam, or Vizag, is a coastal city blessed with hills, beaches, and valleys. This unique geography makes it a perfect destination for adventure enthusiasts looking for diverse experiences.</p>
      
      <h3>Morning (7:00 AM - 10:00 AM)</h3>
      <p>Begin your adventure with a trek to Kailasagiri Hill. The panoramic views of the city and the Bay of Bengal from the top are worth the climb. Don't miss the giant statues of Lord Shiva and Goddess Parvati at the summit.</p>
      
      <h3>Mid-day (10:30 AM - 2:00 PM)</h3>
      <p>Head to Rushikonda Beach for water sports activities. Try your hand at jet skiing, parasailing, or banana boat rides in the clear blue waters of the Bay of Bengal.</p>
      
      <h3>Afternoon (2:30 PM - 5:30 PM)</h3>
      <p>Explore the natural wonders of Borra Caves, one of the largest caves in India. The million-year-old limestone formations create an otherworldly landscape underground.</p>
      
      <h3>Evening (6:00 PM - 8:00 PM)</h3>
      <p>Conclude your adventure day with a serene boat ride in the Kambalakonda Wildlife Sanctuary. Spot local wildlife and birds as you glide through the peaceful waters surrounded by lush greenery.</p>
    `,
    highlights: [
      "Kailasagiri Hill - Panoramic city views",
      "Rushikonda Beach - Water sports paradise",
      "Borra Caves - Ancient limestone formations",
      "Kambalakonda Wildlife Sanctuary - Boating and wildlife",
      "Araku Valley - Tribal culture and coffee plantations",
    ],
    images: [
      "https://images.unsplash.com/photo-1655979521437-ae1875109d79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1760119547266-b5cc027a86e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "http://images.unsplash.com/photo-1555237627-74a0c63888fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1683363028862-f4e26cbb1706?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    ],
  },
  6: {
    id: 6,
    title:
      "Likabali to Mechuka - A journey through Arunachal Pradesh's hidden gems",
    destination: "Mechuka", // Added destination field (using the final destination)
    image:
      "https://images.unsplash.com/photo-1672399444836-3f2d667ded8e?auto=format&fit=crop&w=500&q=60",
    category: "Nature",
    author: "Travel Expert",
    date: "October 5, 2023",
    content: `
      <p>Arunachal Pradesh, the 'Land of the Dawn-Lit Mountains,' offers some of India's most untouched natural landscapes. The journey from Likabali to Mechuka takes you through pristine forests, mountain passes, and remote villages.</p>
      
      <h3>Day 1: Likabali to Along</h3>
      <p>Begin your journey from Likabali, the gateway to Arunachal Pradesh. Drive through lush green forests and small tribal villages to reach Along, a charming town nestled in the hills. Visit the Doni Polo Vidya Bhawan, a center for indigenous faith.</p>
      
      <h3>Day 2: Along to Pasighat</h3>
      <p>Continue to Pasighat, situated on the banks of the mighty Siang River. Explore the Daying Ering Wildlife Sanctuary, home to various endangered species. The sunset views over the Siang River are spectacular.</p>
      
      <h3>Day 3: Pasighat to Yingkiong</h3>
      <p>Drive to Yingkiong, passing through dense forests and numerous streams. Visit the confluence of Siang and Yamne rivers, a sight of natural beauty. Interact with the local Adi tribe and learn about their unique customs and traditions.</p>
      
      <h3>Day 4: Yingkiong to Mechuka</h3>
      <p>The final leg takes you to Mechuka, a stunning valley close to the Indo-Tibet border. Surrounded by snow-capped mountains and pine forests, Mechuka feels like a piece of paradise. Visit the ancient Samten Yongcha monastery and enjoy the pristine beauty of this remote Himalayan valley.</p>
    `,
    highlights: [
      "Siang River - One of India's mightiest rivers",
      "Daying Ering Wildlife Sanctuary - Biodiversity hotspot",
      "Tribal villages - Cultural immersion with Adi and Memba tribes",
      "Samten Yongcha monastery - Ancient Buddhist heritage",
      "Mechuka Valley - Pristine Himalayan landscape",
    ],
    images: [
      "https://images.unsplash.com/photo-1567601092100-047450499f6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1205 ",
      "https://images.unsplash.com/photo-1720663520883-aeb55b215bfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1543046458-7f4ddc24c017?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1752860626248-482766e5a95f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1626961610276-1a540095a546?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    ],
  },
  7: {
    id: 7,
    title: "A spiritual travel guide to Gaya",
    destination: "Gaya", // Added destination field
    image:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=500&q=60",
    category: "Spiritual",
    author: "Travel Expert",
    date: "November 15, 2023",
    content: `
      <p>Gaya, located in Bihar, is one of the most important pilgrimage sites for Hindus and Buddhists alike. This ancient city is steeped in religious significance and spiritual energy.</p>
      
      <h3>Morning (6:00 AM - 10:00 AM)</h3>
      <p>Begin your spiritual journey at the sacred Vishnupad Temple, dedicated to Lord Vishnu. The temple houses a 40 cm long footprint of Lord Vishnu imprinted on solid rock. Witness the morning rituals and offerings made by devotees.</p>
      
      <h3>Mid-day (10:30 AM - 2:00 PM)</h3>
      <p>Visit Bodh Gaya, located just 13 km from Gaya. This is where Lord Buddha attained enlightenment under the Bodhi Tree. Explore the Mahabodhi Temple Complex, a UNESCO World Heritage Site, and meditate in its serene environment.</p>
      
      <h3>Afternoon (2:30 PM - 5:30 PM)</h3>
      <p>Explore the Dungeshwari Cave Temples, where Buddha spent time before reaching Bodh Gaya. The caves, also known as Mahakala Caves, offer a glimpse into Buddha's ascetic life and are perfect for quiet contemplation.</p>
      
      <h3>Evening (6:00 PM - 8:00 PM)</h3>
      <p>Conclude your spiritual day at the banks of the Falgu River to witness the evening Aarti (prayer ceremony). The river is considered sacred, and many pilgrims perform rituals here for their ancestors.</p>
    `,
    highlights: [
      "Vishnupad Temple - Lord Vishnu's footprint",
      "Mahabodhi Temple - Buddha's enlightenment site",
      "Bodhi Tree - Sacred fig tree of spiritual significance",
      "Dungeshwari Cave Temples - Buddha's ascetic life",
      "Falgu River - Sacred river for ancestral rituals",
    ],
    images: [
      "https://images.unsplash.com/photo-1710863805685-73058473ce7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      "https://plus.unsplash.com/premium_photo-1691086684103-a2d0319d79ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "https://images.unsplash.com/photo-1654701924987-7ef65ef78fb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      "https://plus.unsplash.com/premium_photo-1678853634436-f3ec577b618d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1712644992035-0be8e7dcfebb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932 ",
    ],
  },
  8: {
    id: 8,
    title:
      "Chandigarh's shopping extravaganza: unleashing the charms of retail therapy",
    destination: "Chandigarh", // Added destination field
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=500&q=60",
    category: "Shopping",
    author: "Travel Expert",
    date: "December 5, 2023",
    content: `
      <p>Chandigarh, India's first planned city, offers a unique shopping experience with its well-organized sectors, modern malls, and traditional markets. From luxury brands to local handicrafts, the city has something for every shopper.</p>
      
      <h3>Morning (10:00 AM - 1:00 PM)</h3>
      <p>Begin your shopping spree at Sector 17, the heart of Chandigarh's shopping district. This pedestrian-friendly plaza houses numerous showrooms, boutiques, and brand outlets. The spacious layout and organized structure make for a pleasant shopping experience.</p>
      
      <h3>Mid-day (1:30 PM - 4:00 PM)</h3>
      <p>Head to Elante Mall, one of the largest shopping malls in North India. With over 300 stores, it offers everything from international brands to local favorites. Take a break at the food court offering diverse culinary options.</p>
      
      <h3>Afternoon (4:30 PM - 6:30 PM)</h3>
      <p>Explore the Sector 22 market, known for its affordable fashion, electronics, and accessories. This is the place to hone your bargaining skills and find great deals on trendy items.</p>
      
      <h3>Evening (7:00 PM - 9:00 PM)</h3>
      <p>Conclude your shopping day at the Shastri Market in Sector 22, famous for its handicrafts, traditional clothing, and souvenirs. Pick up some Phulkari embroidery work, a specialty of the region, as a memento of your Chandigarh shopping adventure.</p>
    `,
    highlights: [
      "Sector 17 - Planned shopping plaza with premium brands",
      "Elante Mall - North India's shopping destination",
      "Sector 22 Market - Bargain shopping paradise",
      "Shastri Market - Traditional handicrafts and souvenirs",
      "Phulkari work - Punjab's traditional embroidery",
    ],
    images: [
      "https://plus.unsplash.com/premium_photo-1742493603848-8f5e42c7e703?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1075",
      "https://images.unsplash.com/photo-1670014493554-5e872c0bec16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=522",
      "https://images.unsplash.com/photo-1739363443125-97e4112ddbc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      "https://images.unsplash.com/photo-1679004589831-e932bdec5740?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685",
      "https://plus.unsplash.com/premium_photo-1679811672048-9d4b810a7588?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    ],
  },
};

const DiaryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Ensure the diary is retrieved correctly
  const diary =
    diaryDetails[Number(id) as keyof typeof diaryDetails] ||
    diaryDetails[id as keyof typeof diaryDetails];

  if (!diary) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" align="center">
          Diary not found
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Box>
      </Container>
    );
  }

  // Use the destination field from the diary object
  const destinationName = diary.destination || "Destination";
  const navigateDestination = `/create-trip?destination=${destinationName}`;

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 4 }}
      >
        Back to Diaries
      </Button>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          {diary.title}
        </Typography>

        {/* Info/Metadata Section - uses Flexbox */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            By {diary.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {diary.date}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              bgcolor: "error.main",
              color: "white",
              px: 1,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            {diary.category}
          </Typography>
        </Box>

        {/* Main Image */}
        <Box
          component="img"
          src={diary.image}
          alt={diary.title}
          sx={{
            width: "100%",
            height: 400,
            objectFit: "cover",
            borderRadius: 2,
            mb: 4,
          }}
        />

        {/* Highlights Section */}
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Highlights
        </Typography>
        <Box sx={{ mb: 4 }}>
          {diary.highlights.map((highlight, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 1 }}>
              • {highlight}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Content Section */}
        <Box
          dangerouslySetInnerHTML={{ __html: diary.content }}
          sx={{
            "& p": { mb: 2 },
            "& h3": { mt: 3, mb: 2, fontWeight: "bold" },
          }}
        />

        <Divider sx={{ my: 4 }} />

        {/* --- Photo Gallery (Flexbox) --- */}
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Photo Gallery
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2, // Replaces Grid spacing={2}
          }}
        >
          {diary.images.map((image, index) => (
            // Flex item replaces Grid item (xs=12, sm=6, md=4)
            <Box
              key={index}
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "calc(50% - 8px)", // 2 items per row (gap is 16px or 2 units)
                  md: "calc(33.33% - 13.33px)", // 3 items per row (gap is 16px or 2 units)
                },
                minWidth: 0,
                display: "flex",
              }}
            >
              <Card sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  // Image path referencing the public folder
                  image={image}
                  alt={`Gallery image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {diary.highlights[index]}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        {/* --- End Photo Gallery --- */}

        {/* Dynamic Plan Your Trip Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            // Use the dynamic destination name for the navigation
            onClick={() => navigate(navigateDestination)}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 50,
              fontWeight: "bold",
            }}
          >
            {`Plan Your Trip to ${destinationName}`}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DiaryDetail;
