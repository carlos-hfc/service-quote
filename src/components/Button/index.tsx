import { LucideIcon } from "lucide-react-native"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "danger"
  text?: string
  icon?: LucideIcon
}

export function Button({
  variant = "primary",
  style,
  children,
  text,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style, styles[variant]]}
      {...props}
    >
      {IconComponent && (
        <IconComponent
          size={24}
          color={styles[`text-${variant}`].color}
        />
      )}
      {text && (
        <Text style={[styles.text, styles[`text-${variant}`]]}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}
