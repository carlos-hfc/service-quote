import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {
  CheckIcon,
  CreditCardIcon,
  Edit3Icon,
  FileTextIcon,
  MinusIcon,
  PlusIcon,
  StoreIcon,
  TagIcon,
  TrashIcon,
} from "lucide-react-native"
import { useRef, useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { RouteList } from "@/@types/navigation"
import {
  BottomModal,
  BottomModalContent,
  BottomModalFooter,
  BottomModalHeader,
} from "@/components/BottomModal"
import { Button } from "@/components/Button"
import { InputAdornment, InputField, InputRoot } from "@/components/Input"
import { QuoteHeader } from "@/components/QuoteHeader"
import {
  RadioButton,
  RadioButtonInner,
  RadioGroup,
} from "@/components/RadioButton"
import { Status, StatusType } from "@/components/Status"
import { COLORS } from "@/theme"
import { formatCurrencyNumber } from "@/utils/format-number"

import { styles } from "./styles"

const INITIAL_STATE_SERVICE = {
  name: "",
  description: "",
  price: 0,
  qty: 1,
}

const INITIAL_STATE = {
  title: "",
  customerName: "",
  status: "" as StatusType,
  services: [] as (typeof INITIAL_STATE_SERVICE)[],
  discount: 0,
}

export function Quote({ navigation }: NativeStackScreenProps<RouteList>) {
  const inputsRef = useRef<Array<TextInput | null>>([])

  const [isOpenAddServiceModal, setIsOpenAddServiceModal] = useState(false)
  const [form, setForm] = useState(INITIAL_STATE)
  const [service, setService] = useState(INITIAL_STATE_SERVICE)
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(
    null,
  )

  function onNextFocus(index: number) {
    inputsRef.current[index]?.focus()
  }

  function selectStatus(status: StatusType) {
    setForm(prev => ({
      ...prev,
      status,
    }))
  }

  function updateServiceQty(value: number) {
    setService(prev =>
      prev.qty === 1 && value < 0 ? prev : { ...prev, qty: prev.qty + value },
    )
  }

  function editService(value: typeof service, index: number) {
    setService(value)
    setEditingServiceIndex(index)
    setIsOpenAddServiceModal(true)
  }

  function onSubmitService() {
    if (editingServiceIndex !== null) {
      const oldServices = form.services.filter(
        (_, index) => editingServiceIndex !== index,
      )

      setForm(prev => ({
        ...prev,
        services: [
          ...oldServices.slice(0, editingServiceIndex),
          service,
          ...oldServices.slice(editingServiceIndex),
        ],
      }))
    } else {
      setForm(prev => ({ ...prev, services: [...prev.services, service] }))
    }

    setIsOpenAddServiceModal(false)
    setEditingServiceIndex(null)
    setService(INITIAL_STATE_SERVICE)
  }

  function onSubmit() {
    console.log(form)
  }

  const subtotal = form.services.reduce((acc, current) => {
    acc += current.price * current.qty

    return acc
  }, 0)

  const discount = subtotal * (form.discount / 100)

  const total = subtotal - discount

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <QuoteHeader />

        <View style={styles.form}>
          <View style={styles.fieldset}>
            <View style={styles.legend}>
              <StoreIcon
                size={16}
                color={COLORS["purple-base"]}
              />
              <Text style={styles.legendText}>Informações gerais</Text>
            </View>

            <InputRoot>
              <InputField
                placeholder="Título"
                value={form.title}
                onChangeText={value =>
                  setForm(prev => ({ ...prev, title: value }))
                }
                returnKeyType="next"
                ref={element => {
                  inputsRef.current[0] = element
                }}
                onSubmitEditing={() => onNextFocus(1)}
              />
            </InputRoot>

            <InputRoot>
              <InputField
                placeholder="Cliente"
                value={form.customerName}
                onChangeText={value =>
                  setForm(prev => ({ ...prev, customerName: value }))
                }
                ref={element => {
                  inputsRef.current[1] = element
                }}
              />
            </InputRoot>
          </View>

          <View style={styles.fieldset}>
            <View style={styles.legend}>
              <TagIcon
                size={16}
                color={COLORS["purple-base"]}
              />
              <Text style={styles.legendText}>Status</Text>
            </View>

            <RadioGroup
              value={form.status}
              onValueChange={selectStatus}
              style={styles.listStatus}
            >
              <RadioButton
                style={styles.status}
                value="draft"
              >
                <RadioButtonInner />
                <Status status="draft" />
              </RadioButton>

              <RadioButton
                style={styles.status}
                value="approved"
              >
                <RadioButtonInner />
                <Status status="approved" />
              </RadioButton>

              <RadioButton
                style={styles.status}
                value="sent"
              >
                <RadioButtonInner />
                <Status status="sent" />
              </RadioButton>

              <RadioButton
                style={styles.status}
                value="declined"
              >
                <RadioButtonInner />
                <Status status="declined" />
              </RadioButton>
            </RadioGroup>
          </View>

          <View style={styles.fieldset}>
            <View style={styles.legend}>
              <FileTextIcon
                size={16}
                color={COLORS["purple-base"]}
              />
              <Text style={styles.legendText}>Serviços inclusos</Text>
            </View>

            <View style={styles.listServices}>
              {form.services.map((service, index) => (
                <View
                  key={index}
                  style={styles.service}
                >
                  <View style={styles.serviceInfo}>
                    <Text
                      style={styles.serviceTitle}
                      numberOfLines={1}
                    >
                      {service.name}
                    </Text>
                    <Text
                      style={styles.serviceDescription}
                      numberOfLines={1}
                    >
                      {service.description}
                    </Text>
                  </View>

                  <View>
                    <View style={styles.servicePrice}>
                      <Text style={styles.serviceCurrency}>R$</Text>
                      <Text style={styles.serviceValue}>
                        {formatCurrencyNumber(service.price)}
                      </Text>
                    </View>

                    <Text style={styles.serviceQty}>Qt: {service.qty}</Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => editService(service, index)}
                  >
                    <Edit3Icon
                      size={16}
                      color={COLORS["purple-base"]}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <Button
              text="Adicionar serviço"
              icon={PlusIcon}
              variant="secondary"
              onPress={() => setIsOpenAddServiceModal(true)}
            />
          </View>

          <View style={styles.fieldset}>
            <View style={styles.legend}>
              <CreditCardIcon
                size={16}
                color={COLORS["purple-base"]}
              />
              <Text style={styles.legendText}>Investimento</Text>
            </View>

            <View style={styles.subtotal}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.qtyTotal}>
                {form.services.length} item(s)
              </Text>
              <Text style={styles.subtotalValue}>
                R$ {formatCurrencyNumber(subtotal)}
              </Text>
            </View>

            <View style={styles.discount}>
              <Text style={styles.discountText}>Desconto</Text>
              <InputRoot style={styles.discountField}>
                <InputField
                  inputMode="numeric"
                  textAlign="center"
                  value={String(form.discount)}
                  onChangeText={value =>
                    setForm(prev => ({ ...prev, discount: Number(value) }))
                  }
                />
                <InputAdornment>%</InputAdornment>
              </InputRoot>
              <Text style={styles.discountValue}>
                - R$ {formatCurrencyNumber(discount)}
              </Text>
            </View>

            <View style={styles.total}>
              <Text style={styles.totalText}>Valor total</Text>

              <View style={styles.totalValues}>
                <Text style={styles.totalPrice}>
                  R$ {formatCurrencyNumber(subtotal)}
                </Text>

                <View style={styles.servicePrice}>
                  <Text style={styles.serviceCurrency}>R$</Text>
                  <Text style={styles.totalQuotePrice}>
                    {formatCurrencyNumber(total)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            text="Cancelar"
            variant="secondary"
            onPress={() => navigation.goBack()}
          />
          <Button
            text="Salvar"
            icon={CheckIcon}
            onPress={onSubmit}
          />
        </View>

        <BottomModal
          open={isOpenAddServiceModal}
          onClose={() => setIsOpenAddServiceModal(false)}
        >
          <BottomModalHeader title="Serviço" />
          <BottomModalContent>
            <InputRoot>
              <InputField
                placeholder="Serviço"
                value={service.name}
                onChangeText={value =>
                  setService(prev => ({ ...prev, name: value }))
                }
              />
            </InputRoot>

            <InputRoot>
              <InputField
                multiline
                placeholder="Descrição"
                value={service.description}
                onChangeText={value =>
                  setService(prev => ({ ...prev, description: value }))
                }
              />
            </InputRoot>

            <View style={styles.addService}>
              <InputRoot style={styles.addServiceValue}>
                <InputAdornment>R$</InputAdornment>
                <InputField
                  inputMode="numeric"
                  value={String(service.price)}
                  onChangeText={value =>
                    setService(prev => ({ ...prev, price: Number(value) }))
                  }
                />
              </InputRoot>

              <InputRoot style={styles.addServiceQty}>
                <TouchableOpacity>
                  <MinusIcon
                    size={20}
                    color={COLORS["purple-base"]}
                    onPress={() => updateServiceQty(-1)}
                  />
                </TouchableOpacity>
                <InputField
                  inputMode="numeric"
                  textAlign="center"
                  value={String(service.qty)}
                  onChangeText={value =>
                    setService(prev => ({ ...prev, qty: Number(value) }))
                  }
                />
                <TouchableOpacity onPress={() => updateServiceQty(1)}>
                  <PlusIcon
                    size={20}
                    color={COLORS["purple-base"]}
                  />
                </TouchableOpacity>
              </InputRoot>
            </View>
          </BottomModalContent>
          <BottomModalFooter>
            <Button
              icon={TrashIcon}
              variant="danger"
            />
            <Button
              text="Salvar"
              icon={CheckIcon}
              onPress={onSubmitService}
            />
          </BottomModalFooter>
        </BottomModal>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
