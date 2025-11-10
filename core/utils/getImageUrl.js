export const getImageUrl = (image) => {
  if (!image) return "";
  return image.startsWith("http")
    ? image.replace("http://localhost:6501", process.env.NEXT_PUBLIC_BASE_URL)
    : `${process.env.NEXT_PUBLIC_BASE_URL}/${image.replace(/^\/?/, "")}`;
};
