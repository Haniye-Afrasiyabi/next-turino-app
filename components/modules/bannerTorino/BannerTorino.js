import Image from "next/image";

function BannerTorino() {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/BannerTorino/BannerTorino.webp"
        width={1440}
        height={350}
        style={{ width: "100%", height: "auto" }}  // نسبت تصویر حفظ میشه
        className="w-full h-[350px]"
        alt="بنر تورینو"
        priority
      />
    </div>
  );
}

export default BannerTorino;
