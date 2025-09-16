function isVideo(url: string) {
  const videoExtensions = [
    ".mp4",
    ".webm",
    ".ogg",
    ".mov",
    ".avi",
    ".mkv",
    ".flv",
    ".wmv",
  ];
  return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
}

export default isVideo;
