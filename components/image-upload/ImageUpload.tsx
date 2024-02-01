import React, { useRef, useState } from "react";
import { ImageUploadProps } from "@/types/upload-image";
import OutlineIcon from "../icons/outline-icons";
import { Video } from "lucide-react";
import FillIcon from "../icons/fill-icons";

const ImageUpload = ({
  onFileSelected,
  label,
  contentType,
}: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileType, setFileType] = useState("post");

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileType = file.type.split("/")[0];
      setFileSelected(true);
      setFileType(fileType);
      onFileSelected(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative flex">
      <input
        type="file"
        accept=".png,.jpeg,.jpg,.mp3,.mp4"
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div
        className="cursor-pointer rounded-md text-[0.8rem] dark:bg-dark-4 dark:text-light-2"
        onClick={handleUploadClick}
      >
        <div className="flex gap-1 dark:bg-dark-3 dark:text-light-2">
          {fileType !== "video" && label === "Cover Image" ? (
            <div className="flex h-10 w-fit cursor-pointer flex-row items-center rounded-md px-[0.8rem] py-[0.25rem] dark:bg-dark-4">
              <OutlineIcon.ImageIcon
                className={`w-[1rem] ${
                  fileType === "image"
                    ? "stroke-blue-80"
                    : "stroke-dark-4 dark:stroke-light-2"
                }`}
              />
              <p
                className={`pl-[0.625rem] text-[0.563rem] sm:text-[0.875rem] md:leading-[1.375rem] ${
                  fileType === "image"
                    ? "text-blue-80"
                    : "text-sc-2 dark:text-light-2"
                }`}
              >
                {label}
              </p>
            </div>
          ) : contentType === "Podcast" ? (
            <div className="flex h-10 w-fit cursor-pointer flex-row items-center rounded-md px-[0.8rem] py-[0.25rem] dark:bg-dark-4">
              <FillIcon.Podcasts
                className={`${
                  fileSelected
                    ? "fill-blue-80"
                    : "fill-dark-4 dark:fill-light-2"
                } `}
              />
              <p
                className={`pl-[0.625rem] text-[0.563rem] sm:text-[0.875rem] md:leading-[1.375rem] ${
                  fileType === "image"
                    ? "text-blue-80"
                    : "text-sc-2 dark:text-light-2"
                }`}
              >
                {label}
              </p>
            </div>
          ) : null}

          {fileType !== "image" && contentType === "Post" && (
            <div className="ml-4 flex h-10 w-fit cursor-pointer flex-row items-center rounded-md px-[0.8rem] py-[0.25rem] dark:bg-dark-4">
              <Video
                className={`w-[1rem] ${
                  fileType === "video"
                    ? "stroke-blue-80"
                    : "stroke-dark-4 dark:stroke-light-2"
                }`}
              />
              <p
                className={`pl-[0.625rem] text-[0.563rem] sm:text-[0.875rem] md:leading-[1.375rem] ${
                  fileType === "video"
                    ? "text-blue-80"
                    : "text-sc-2 dark:text-light-2"
                }`}
              >
                Video Upload
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
