import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useMemo,
} from "react"
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

interface RadioContextProps {
  selectedValue: string | number
  onSelect(value: string | number): void
}

const RadioContext = createContext({} as RadioContextProps)

type RadioGroupProps = ViewProps & {
  value: string | number
  onValueChange(value: any): void
}

type RadioButtonProps = TouchableOpacityProps & {
  value: string | number
}

type RadioButtonInnerProps = ViewProps & {
  innerColor?: string
  selectedColor?: string
  isChecked?: boolean
}
type RadioButtonTextProps = TextProps

export function RadioGroup({
  onValueChange,
  value,
  ...props
}: RadioGroupProps) {
  const valueMemo = useMemo(() => {
    return {
      selectedValue: value,
      onSelect: onValueChange,
    }
  }, [onValueChange, value])

  return (
    <RadioContext.Provider value={valueMemo}>
      <View {...props} />
    </RadioContext.Provider>
  )
}

export function RadioButton({
  style,
  onPress,
  value,
  ...props
}: RadioButtonProps) {
  const { selectedValue, onSelect } = useContext(RadioContext)

  function handleSelectOption(event: GestureResponderEvent) {
    onSelect(value)
    if (onPress) onPress(event)
  }

  const isChecked = value === selectedValue

  const childrenWithProps = Children.map(props.children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { isChecked } as any)
    }

    return child
  })

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={handleSelectOption}
      {...props}
    >
      {childrenWithProps}
    </TouchableOpacity>
  )
}

export function RadioButtonInner({
  style,
  selectedColor = COLORS["purple-base"],
  innerColor = COLORS.white,
  isChecked,
  ...props
}: RadioButtonInnerProps) {
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
