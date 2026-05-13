const DEFAULT_IMAGE = "/assets/images/default-image.png";

export const encodeUrl = (
  url: string,
  defaultImage = DEFAULT_IMAGE
): string => {
  if (!url) return defaultImage;
  try {
    const { origin, pathname } = new URL(url);
    const normalizedPath = pathname
      .split("/")
      .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
      .join("/");
    return origin + normalizedPath;
  } catch {
    return defaultImage;
  }
};

export const onImageError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  defaultImage = DEFAULT_IMAGE
) => {
  e.currentTarget.src = defaultImage;
};
