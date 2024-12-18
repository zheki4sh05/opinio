import React from "react";
import { Box, Text, Pressable } from "native-base";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from "../../settings/constants/BonusModalStylesConstants";
import { defaultGrey } from "../../settings/constants/Colors";

const BonusModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Box style={styles.container}>
      <Box style={styles.topContainer}>
        <Box style={styles.leftContainer}>
          <Text style={styles.titleText}>Описание бонуса</Text>
        </Box>
        <Box style={styles.rightContainer}>
          <Pressable onPress={onClose}>
            <MaterialCommunityIcons name="close-thick" size={22} color={defaultGrey} />
          </Pressable>
        </Box>
      </Box>
      <Box style={styles.middleContainer}>
        {/* Дополнительное содержимое модального окна */}
      </Box>
    </Box>
  );
};

export default BonusModal;
