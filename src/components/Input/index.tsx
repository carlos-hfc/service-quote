import { LucideIcon } from "lucide-react-native"
import { createContext, useContext, useState } from "react"
import {
  BlurEvent,
  FocusEvent,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  View,
  ViewProps,
} from "react-native"

import { COLORS } from "@/theme"

import { styles } from "./styles"

interface InputContextProps {
  isFocused: boolean
  setIsFocused(value: boolean): void
  hasError?: boolean
}

const InputContext = createContext({} as InputContextProps)

type InputRootProps = ViewProps & {
  hasError?: boolean
}
type InputFieldProps = TextInputProps
type InputIconProps = {
  icon: LucideIcon
  size?: number
}
type InputAdornmentProps = TextProps

export function InputRoot({
  style,
  hasError = false,
  ...props
}: InputRootProps) {
  const [isFocused, setIsFocused] = useState(false)

  const borderColor = hasError
    ? COLORS["danger-base"]
    : isFocused
      ? COLORS["purple-base"]
      : COLORS["gray-300"]

  return (
    <InputContext.Provider value={{ isFocused, setIsFocused, hasError }}>
      <View
        style={[styles.container, { borderColor }, style]}
        {...props}
      />
    </InputContext.Provider>
  )
}

export function InputField({
  style,
  onFocus,
  onBlur,
  ...props
}: InputFieldProps) {
  const { setIsFocused } = useContext(InputContext)

  function handleFocus(event: FocusEvent) {
    setIsFocused(true)
    if (onFocus) onFocus(event)
  }

  function handleBlur(event: BlurEvent) {
    setIsFocused(false)
    if (onBlur) onBlur(event)
  }

  return (
    <TextInput
      style={[styles.field, style]}
      placeholderTextColor={COLORS["gray-500"]}
      selectionColor={COLORS["purple-base"]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  )
}

export function InputIcon({ icon: IconComponent, size = 20 }: InputIconProps) {
  const { isFocused, hasError } = useContext(InputContext)

  const color = hasError
    ? COLORS["danger-base"]
    : isFocused
      ? COLORS["purple-base"]
      : COLORS["gray-600"]

  return (
    <IconComponent
      size={size}
      color={color}
    />
  )
}

export function InputAdornment({ style, ...props }: InputAdornmentProps) {
  const { isFocused, hasError } = useContext(InputContext)

  const color = hasError
    ? COLORS["danger-base"]
    : isFocused
      ? COLORS["purple-base"]
      : COLORS["gray-600"]

  return (
    <View style={styles.adornment}>
      <Text
        style={[styles.adornmentText, { color }, style]}
        {...props}
      />
    </View>
  )
}
