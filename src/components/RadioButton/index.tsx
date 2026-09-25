import { createContext, useContext, useState } from "react"
import {
  GestureResponderEvent,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native"

import { COLORS } from "@/theme"

import { styles } from "./styles"

interface RadioButtonContextProps {
  isChecked: boolean
  setIsChecked(value: boolean): void
}

const RadioButtonContext = createContext({} as RadioButtonContextProps)

type RadioButtonProps = TouchableOpacityProps
type RadioButtonInnerProps = ViewProps & {
  innerColor?: string
  selectedColor?: string
}
type RadioButtonTextProps = TextProps

export function RadioButton({ style, onPress, ...props }: RadioButtonProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleSelectOption(event: GestureResponderEvent) {
    setIsChecked(true)
    if (onPress) onPress(event)
  }

  return (
    <RadioButtonContext.Provider value={{ isChecked, setIsChecked }}>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={handleSelectOption}
        {...props}
      />
    </RadioButtonContext.Provider>
  )
}

export function RadioButtonInner({
  style,
  selectedColor = COLORS["purple-base"],
  innerColor = COLORS.white,
  ...props
}: RadioButtonInnerProps) {
  const { isChecked } = useContext(RadioButtonContext)

  const selected = isChecked && {
    backgroundColor: selectedColor,
    borderColor: selectedColor,
  }

  return (
    <View
      style={[styles.radio, style, selected]}
      {...props}
    >
      {isChecked && (
        <View style={[styles.inner, { backgroundColor: innerColor }]} />
      )}
    </View>
  )
}

export function RadioButtonText({ style, ...props }: RadioButtonTextProps) {
  return (
    <Text
      style={[styles.text, style]}
      {...props}
    />
  )
}
