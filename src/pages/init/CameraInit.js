import { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

let storageOptions = {
  skipBackup: true,
  path: 'images'
}

export const cameraLaunch = () => {
  const [image_path, setImagePath] = useState('');

  launchCamera({storageOptions}, res => {
    if (res.didCancel) {
      console.info("User canceled")
    } else if (res.error) {
      console.error(res.errorMessage);
    } else {
      setImagePath(res.assets[0])
    }
  })
}

export const galleryLaunch = () => {
  const [image_path, setImagePath] = useState('');

  launchImageLibrary({storageOptions}, res => {
    if (res.didCancel) {
      console.info("User canceled")
    } else if (res.error) {
      console.error(res.errorMessage);
    } else {
      setImagePath(res.assets[0])
    }
  })
}