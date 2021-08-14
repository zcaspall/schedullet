import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";

const Month = () => {
    const monthList = ['January', 'February', 'March', 'April', 'May',
                       'June', 'July', 'August', 'September', 'October',
                       'November', 'December']
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const [notes, setNotes] = useState([]);

    return(
        <Card style={styles.month} >
            <Card.Title style={styles.date}>{monthList[currentMonth]} {currentYear}</Card.Title>
        </Card>
    );
};

const styles = StyleSheet.create({
    
});

export default Month;
