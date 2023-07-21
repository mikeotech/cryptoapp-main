import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IconApe, IconETH, IconEthereum, IconSettingBlack, ImageNFT } from '../../assets'
import { Button, Gap, HeaderBack } from '../../components'
import { colors } from '../../utils'
import { fonts } from '../../utils/fonts'

const Send = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack text='Send NFT' Icon={IconSettingBlack} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 24 }}>
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.text}>NFT</Text>
                            <Gap height={2} />
                            <Text style={styles.text2}>Bored ape yacht club #2819</Text>
                        </View>
                        <Image source={IconETH} style={styles.icon} />
                    </View>
                    <View style={styles.card2}>
                        <Image source={IconApe} style={styles.image} />
                        <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2, marginVertical: 24 }} />
                        <Text style={styles.text3}>From</Text>
                        <Gap height={2} />
                        <Text style={styles.text2}>0x994ed706F12D92a64cf81d13f6ab68</Text>
                        <Gap height={12} />
                        <View style={{ width: 36, height: 36, borderWidth: 1, borderColor: colors.grey2, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                            <View style={{ width: 14, height: 16, borderWidth: 1, borderColor: colors.grey }}/>
                        </View>
                        <Gap height={12} />
                        <Text style={styles.text3}>To</Text>
                        <Gap height={2} />
                        <Text style={styles.text2}>0x994ed706F12D92a64cf81d13f6ab68</Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: colors.grey2, marginVertical: 24 }} />
                        <Text style={styles.text3}>Fee</Text>
                        <Gap height={2} />
                        <Text style={styles.text2}>$9.35</Text>
                    </View>
                    <Gap height={24} />
                    <Button text='Send' backColor={colors.blue} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Send

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    card: {
        borderWidth: 1,
        borderColor: colors.grey2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card2: {
        borderWidth: 1,
        borderColor: colors.grey2,
        padding: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[800],
        color: colors.black
    },
    text2: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.black
    },
    text3: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.black
    },
    image: {
        width: 240,
        height: 240,
        alignSelf: 'center'
    },
    icon: {
        width: 32,
        height: 32,
        alignSelf: 'center'
    }
})