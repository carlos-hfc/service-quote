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
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

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
import { RadioButton, RadioButtonInner } from "@/components/RadioButton"
import { Status } from "@/components/Status"
import { COLORS } from "@/theme"
import { formatCurrencyNumber } from "@/utils/format-number"

import { styles } from "./styles"

export function Quote({ navigation }: NativeStackScreenProps<RouteList>) {
  const [isOpenAddServiceModal, setIsOpenAddServiceModal] = useState(false)

  return (
    <ScrollView style={styles.container}>
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
            <InputField placeholder="Título" />
          </InputRoot>

          <InputRoot>
            <InputField placeholder="Cliente" />
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

          <View style={styles.listStatus}>
            <RadioButton style={styles.status}>
              <RadioButtonInner />
              <Status status="draft" />
            </RadioButton>

            <RadioButton style={styles.status}>
              <RadioButtonInner />
              <Status status="approved" />
            </RadioButton>

            <RadioButton style={styles.status}>
              <RadioButtonInner />
              <Status status="sent" />
            </RadioButton>

            <RadioButton style={styles.status}>
              <RadioButtonInner />
              <Status status="declined" />
            </RadioButton>
          </View>
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
            <View style={styles.service}>
              <View style={styles.serviceInfo}>
                <Text
                  style={styles.serviceTitle}
                  numberOfLines={1}
                >
                  Design de interfaces
                </Text>
                <Text
                  style={styles.serviceDescription}
                  numberOfLines={1}
                >
                  Criação de wireframe
                </Text>
              </View>

              <View>
                <View style={styles.servicePrice}>
                  <Text style={styles.serviceCurrency}>R$</Text>
                  <Text style={styles.serviceValue}>
                    {formatCurrencyNumber(23000)}
                  </Text>
                </View>

                <Text style={styles.serviceQty}>Qt: 1</Text>
              </View>

              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsOpenAddServiceModal(true)}
              >
                <Edit3Icon
                  size={16}
                  color={COLORS["purple-base"]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Button
            text="Adicionar serviço"
            icon={PlusIcon}
            variant="secondary"
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
            <Text style={styles.qtyTotal}>8 itens</Text>
            <Text style={styles.subtotalValue}>
              R$ {formatCurrencyNumber(23000)}
            </Text>
          </View>

          <View style={styles.discount}>
            <Text style={styles.discountText}>Desconto</Text>
            <InputRoot style={styles.discountField}>
              <InputField inputMode="numeric" />
              <InputAdornment>%</InputAdornment>
            </InputRoot>
            <Text style={styles.discountValue}>
              - R$ {formatCurrencyNumber(200)}
            </Text>
          </View>

          <View style={styles.total}>
            <Text style={styles.totalText}>Valor total</Text>

            <View style={styles.totalValues}>
              <Text style={styles.totalPrice}>
                R$ {formatCurrencyNumber(23000)}
              </Text>

              <View style={styles.servicePrice}>
                <Text style={styles.serviceCurrency}>R$</Text>
                <Text style={styles.totalQuotePrice}>
                  {formatCurrencyNumber(23000)}
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
        />
      </View>

      <BottomModal
        open={isOpenAddServiceModal}
        onClose={() => setIsOpenAddServiceModal(false)}
      >
        <BottomModalHeader title="Serviço" />
        <BottomModalContent>
          <InputRoot>
            <InputField />
          </InputRoot>

          <InputRoot>
            <InputField multiline />
          </InputRoot>

          <View style={styles.addService}>
            <InputRoot style={styles.addServiceValue}>
              <InputAdornment>R$</InputAdornment>
              <InputField inputMode="numeric" />
            </InputRoot>

            <InputRoot style={styles.addServiceQty}>
              <TouchableOpacity>
                <MinusIcon
                  size={20}
                  color={COLORS["purple-base"]}
                />
              </TouchableOpacity>
              <InputField
                inputMode="numeric"
                textAlign="center"
              />
              <TouchableOpacity>
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
          />
        </BottomModalFooter>
      </BottomModal>
    </ScrollView>
  )
}
