import { useState } from "react";
import { uploadPicture } from "../../api/imgur/uploadPicture";
import updateProfile from "../../api/profiles/updateProfile";
import { useAuthStore } from "../../store/userStore";
import { toast } from "sonner";

export function useUpdateProfile() {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [imgurError, setImgurError] = useState<string | null>(null);
  const [noroffApiError, setNoroffApiError] = useState<string | null>(null);

  // To update the profile in the localstorage
  const setAuth = useAuthStore((state) => state.setAuth);
  const username = useAuthStore((state) => state.username);
  const accessToken = useAuthStore((state) => state.accessToken);

  const handleFileChangeAndUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    profileField: "avatar" | "banner",
    updateCallback: (picture: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      alert("Please upload a JPEG or PNG image");
      return;
    }

    const toastId = toast.loading("Uploading picture...");
    setIsUploading(true);

    try {
      const picture = await uploadPicture(file);

      if (!picture.link) {
        setImgurError("Something went wrong uploading the image");
        throw new Error("Something went wrong uploading the image");
      }

      const update = await updateProfile({ [profileField]: picture.link });

      if (!update) {
        setNoroffApiError("Something went wrong updating the profile");
        throw new Error("Something went wrong updating the profile");
      }

      if ("data" in update) {
        updateCallback(picture.link);
      } else if ("errors" in update) {
        setNoroffApiError(update.errors[0].message);
        throw new Error(update.errors[0].message);
      }

      if (username && accessToken) {
        setAuth(username, accessToken);
      }

      toast.success("Image updated successfully!", { id: toastId });
    } catch (error) {
      toast.error(`Unknown error uploading image: ${error}`, { id: toastId });
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, imgurError, noroffApiError, handleFileChangeAndUpload };
}
