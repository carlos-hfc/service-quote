import { XIcon } from "lucide-react-native"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"
import {
  Animated,
  Dimensions,
  Modal,
  ModalProps,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native"

import { COLORS } from "@/theme"

import { styles } from "./styles"

interface BottomModalContextProps {
  open: boolean
  onClose?(): void
}

const BottomModalContext = createContext({} as BottomModalContextProps)

interface BottomModalProps extends Omit<
  ModalProps,
  "visible" | "onRequestClose"
> {
  open: boolean
  onClose?(): void
}

type BottomModalHeaderProps = ViewProps & {
  title: string
}
type BottomModalContentProps = ViewProps
type BottomModalFooterProps = ViewProps

const { height } = Dimensions.get("window")

export function BottomModal({
  onClose,
  open = false,
  style,
  children,
  ...props
}: BottomModalProps) {
  const overlay = useRef(new Animated.Value(height)).current
  const container = useRef(new Animated.Value(height)).current

  const onOpen = useCallback(() => {
    Animated.parallel([
      Animated.timing(overlay, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(container, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }, [container, overlay])

  const handleClose = useCallback(() => {
    Animated.parallel([
      Animated.timing(overlay, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(container, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(onClose)
  }, [container, onClose, overlay])

  useEffect(() => {
    if (open) onOpen()
    else handleClose()
  }, [handleClose, onOpen, open])

  const value = useMemo(() => {
    return { open, onClose: handleClose }
  }, [handleClose, open])

  return (
    <BottomModalContext.Provider value={value}>
      <Modal
        transparent
        visible={open}
        onRequestClose={handleClose}
        animationType="none"
        {...props}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <Animated.View style={[styles.overlay, { opacity: overlay }]} />
        </TouchableWithoutFeedback>

        <Animated.View
          style={[styles.container, { transform: [{ translateY: container }] }]}
        >
          {children}
        </Animated.View>
      </Modal>
    </BottomModalContext.Provider>
  )
}

export function BottomModalHeader({
  style,
  title,
  ...props
}: BottomModalHeaderProps) {
  const { onClose } = useContext(BottomModalContext)

  return (
    <View
      style={[styles.header, style]}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>

      <XIcon
        onPress={onClose}
        size={24}
        color={COLORS["gray-600"]}
      />
    </View>
  )
}

export function BottomModalContent({
  style,
  ...props
}: BottomModalContentProps) {
  return (
    <View
      style={[styles.content, style]}
      {...props}
    />
  )
}

export function BottomModalFooter({ style, ...props }: BottomModalFooterProps) {
  return (
    <View
      style={[styles.footer, style]}
      {...props}
    />
  )
}
