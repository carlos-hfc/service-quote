import { CheckIcon } from "lucide-react-native"
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

interface CheckboxContextProps {
  isChecked: boolean
  setIsChecked(value: boolean): void
}

const CheckboxContext = createContext({} as CheckboxContextProps)

type CheckboxProps = TouchableOpacityProps
type CheckboxInnerProps = ViewProps & {
  innerColor?: string
  selectedColor?: string
}
type CheckboxTextProps = TextProps

export function Checkbox({ style, onPress, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleSelectOption(event: GestureResponderEvent) {
    setIsChecked(prev => !prev)
    if (onPress) onPress(event)
  }

  return (
    <CheckboxContext.Provider value={{ isChecked, setIsChecked }}>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={handleSelectOption}
        {...props}
      />
    </CheckboxContext.Provider>
  )
}

export function CheckboxInner({
  style,
  selectedColor = COLORS["purple-base"],
  innerColor = COLORS.white,
  ...props
}: CheckboxInnerProps) {
  const { isChecked } = useContext(CheckboxContext)

  const selected = isChecked && {
    backgroundColor: selectedColor,
    borderColor: selectedColor,
  }

  return (
    <View
      style={[styles.checkbox, style, selected]}
      {...props}
    >
      {isChecked && (
        <CheckIcon
          color={innerColor}
          size={16}
        />
      )}
    </View>
  )
}

export function CheckboxText({ style, ...props }: CheckboxTextProps) {
  return (
    <Text
      style={[styles.text, style]}
      {...props}
    />
  )
}
