import Carousel from "../../components/Carousel/Carousel";
import DashList from "../../components/DashList/DashList";
import ProductListing from "../../components/ProductListing/ProductListing";
const ElecProducts = [
  { id: 1, url: "/Carousel/0511ba08d5abe9aa.jpg.webp" },
  { id: 2, url: "/Carousel/1316eb53d6f52c71.jpg.webp" },
  { id: 3, url: "/Carousel/69841ae2338de519.jpeg.webp" },
  { id: 4, url: "/Carousel/a76db078b31108e1.jpeg.webp" },
  { id: 3, url: "/Carousel/cf3eceea3f859d00.jpeg.webp" },
  { id: 3, url: "/Carousel/dd484f1b19c67712.jpg.webp" },
  { id: 3, url: "/Carousel/f7b74e32c435adb6.jpg.webp" },
];
export default function Dashboard() {
  return (
    <>
      <DashList />
      <Carousel />
      <ProductListing />
    </>
  );
}
