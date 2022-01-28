import React, { useContext, useEffect, useState } from "react"
import { BotStateContext } from "../../context/BotStateContext"
import { ScrollView, StyleSheet, View, Dimensions } from "react-native"
import { Text } from "react-native-elements"
import TitleDivider from "../../components/TitleDivider"
import Checkbox from "../../components/Checkbox"
import NumericInput from "react-native-numeric-input"

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
    },
    subtitle: {
        marginBottom: 5,
        marginLeft: 2,
        fontSize: 12,
        opacity: 0.7,
    },
})

const Adjustments = () => {
    const bsc = useContext(BotStateContext)

    const renderStart = () => {
        return (
            <View>
                <TitleDivider title="Calibration" hasIcon={false} />

                <Checkbox
                    text="Enable Calibration Adjustments"
                    subtitle="Enable adjustment of tries for Calibration."
                    isChecked={bsc.settings.adjustment.enableCalibrationAdjustment}
                    onPress={() => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, enableCalibrationAdjustment: !bsc.settings.adjustment.enableCalibrationAdjustment } })}
                />

                {bsc.settings.adjustment.enableCalibrationAdjustment ? (
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Home Calibration</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustCalibration}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustCalibration: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Home calibration occurs when the bot is first started and attempts to find and save the location of the game window.</Text>
                    </View>
                ) : null}
            </View>
        )
    }

    const renderGeneral = () => {
        return (
            <View>
                <TitleDivider title="General Image Searching" hasIcon={false} />

                <Checkbox
                    text="Enable General Image Searching Adjustments"
                    subtitle="Enable adjustment of tries for General."
                    isChecked={bsc.settings.adjustment.enableGeneralAdjustment}
                    onPress={() => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, enableGeneralAdjustment: !bsc.settings.adjustment.enableGeneralAdjustment } })}
                />

                {bsc.settings.adjustment.enableGeneralAdjustment ? (
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>General Image Template Matching for Buttons</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustButtonSearchGeneral}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustButtonSearchGeneral: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for button template matching. This will be overwritten by the specific settings down below if applicable.</Text>
                        <Text style={{ marginBottom: 10 }}>General Image Template Matching for Headers</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustHeaderSearchGeneral}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustHeaderSearchGeneral: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for header template matching. This will be overwritten by the specific settings down below if applicable.</Text>
                    </View>
                ) : null}
            </View>
        )
    }

    const renderSupportSummonSelection = () => {
        return (
            <View>
                <TitleDivider title="Support Summon Selection Screen" hasIcon={false} />

                <Checkbox
                    text="Enable Summon Selection Screen Adjustments"
                    subtitle="Enable adjustment of tries for Support Summon Selection Screen."
                    isChecked={bsc.settings.adjustment.enableSupportSummonSelectionScreenAdjustment}
                    onPress={() =>
                        bsc.setSettings({
                            ...bsc.settings,
                            adjustment: { ...bsc.settings.adjustment, enableSupportSummonSelectionScreenAdjustment: !bsc.settings.adjustment.enableSupportSummonSelectionScreenAdjustment },
                        })
                    }
                />

                {bsc.settings.adjustment.enableSupportSummonSelectionScreenAdjustment ? (
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Arrival at Support Summon Selection screen</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustSupportSummonSelectionScreen}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustSupportSummonSelectionScreen: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries to check if the bot arrived at the Support Summon Selection screen.</Text>
                    </View>
                ) : null}
            </View>
        )
    }

    const renderCombatMode = () => {
        return (
            <View>
                <TitleDivider title="Combat Mode" hasIcon={false} />

                <Checkbox
                    text="Enable Combat Mode Adjustments"
                    subtitle="Enable adjustment of tries for Combat Mode Adjustments."
                    isChecked={bsc.settings.adjustment.enableCombatModeAdjustment}
                    onPress={() =>
                        bsc.setSettings({
                            ...bsc.settings,
                            adjustment: { ...bsc.settings.adjustment, enableCombatModeAdjustment: !bsc.settings.adjustment.enableCombatModeAdjustment },
                        })
                    }
                />

                {bsc.settings.adjustment.enableCombatModeAdjustment ? (
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10 }}>Arrival at Combat Screen</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustCombatStart}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustCombatStart: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for checking when the bot arrives at the Combat Screen.</Text>
                        <Text style={{ marginBottom: 10 }}>Skill Usage</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustSkillUsage}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustSkillUsage: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for checking when a skill is used.</Text>
                        <Text style={{ marginBottom: 10 }}>Summon Usage</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustSummonUsage}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustSummonUsage: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for checking when a Summon is used.</Text>
                        <Text style={{ marginBottom: 10 }}>Waiting for Reload</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustWaitingForReload}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustWaitingForReload: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>
                            Set the default number of tries for checking when a reload is finished, whether or not the bot ends up back at the Combat screen or the Loot Collection screen.
                        </Text>
                        <Text style={{ marginBottom: 10 }}>Waiting for Attack</Text>
                        <NumericInput
                            type="plus-minus"
                            leftButtonBackgroundColor="#eb5056"
                            rightButtonBackgroundColor="#EA3788"
                            rounded
                            valueType="integer"
                            minValue={1}
                            maxValue={999}
                            value={bsc.settings.adjustment.adjustWaitingForAttack}
                            onChange={(value) => bsc.setSettings({ ...bsc.settings, adjustment: { ...bsc.settings.adjustment, adjustWaitingForAttack: Number(value) } })}
                            containerStyle={{ marginBottom: 10, alignSelf: "center" }}
                            totalWidth={Dimensions.get("screen").width * 0.9}
                            totalHeight={50}
                        />
                        <Text style={styles.subtitle}>Set the default number of tries for checking when an attack is finished after the Attack button is pressed.</Text>
                    </View>
                ) : null}
            </View>
        )
    }

    return (
        <View style={styles.root}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                    <Text h4 style={{ marginBottom: 10 }}>
                        Adjust the default number of tries for the following situations.
                    </Text>

                    {renderStart()}

                    {renderGeneral()}

                    {renderSupportSummonSelection()}

                    {renderCombatMode()}
                </View>
            </ScrollView>
        </View>
    )
}

export default Adjustments