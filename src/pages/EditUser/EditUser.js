import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./editUserStyle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { } from "../../redux/actions/RecipeAction";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { storageOptions } from "../../redux/config/InitState";
import { editUserAction, getUserAction } from "../../redux/actions/AuthAction";

const EditUser = () => {
    const dispatch = useDispatch();
    const login = useSelector(state => state.login)
    const get_user = useSelector(state => state.get_user)
    const {data} = get_user
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        photo: ''
    })

    function cameraLaunch() {
        launchCamera({ storageOptions }, res => {
            if (res.didCancel) {
                console.info("User canceled")
            } else if (res.error) {
                console.error(res.errorMessage);
            } else {
                setSelectedImage(res.assets[0])
            }
        })
    }

    function imageLibraryLaunch() {
        launchImageLibrary({ storageOptions }, res => {
            if (res.didCancel) {
                console.info("User canceled")
            } else if (res.error) {
                console.error(res.errorMessage);
            } else {
                setSelectedImage(res.assets[0])
            }
        })
    }

    useEffect(() => {
        dispatch(getUserAction())
    }, [])

    useEffect(() => {
        if (data) {
            setUserData({
                name: data[0].name,
                photo: data[0].photo,
            });
        }
    }, [data])

    const editUser = () => {
        let editUserData = new FormData();
        editUserData.append("name", userData?.name);
        if (selectedImage) {
            editUserData.append("photo", { uri: selectedImage?.uri, name: selectedImage.fileName, type: selectedImage.type });
        }

        dispatch(editUserAction(editUserData, navigation.navigate));
    }

    function onEditUserChange(name, value) {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <ScrollView>
            <View style={styles.formAddRecipeStyle}>
                <Text style={styles.fontTitle}>Edit Your Account</Text>
                <TextInput inputMode="text" onChangeText={name => onEditUserChange('name', name)} defaultValue={userData?.name} placeholder="Name" style={styles.titleInput} />
                <View style={styles.uploadGroup}>
                    <TouchableOpacity style={styles.photoInput} onPress={cameraLaunch}>
                        <Text style={styles.uploadPhotoText}>Upload Photo from Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.photoInput} onPress={imageLibraryLaunch}>
                        <Text style={styles.uploadPhotoText}>Upload Photo from Gallery</Text>
                    </TouchableOpacity>
                </View>

                <Button title="UPDATE USER!" onPress={editUser}></Button>
            </View>
        </ScrollView>
    )
}

export default EditUser;