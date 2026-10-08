import {
  CheckIcon,
  PlusIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react-native"
import { useState } from "react"
import { FlatList, Text, View } from "react-native"

import {
  BottomModal,
  BottomModalContent,
  BottomModalFooter,
  BottomModalHeader,
} from "@/components/BottomModal"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Checkbox, CheckboxInner } from "@/components/Checkbox"
import { InputField, InputIcon, InputRoot } from "@/components/Input"
import {
  RadioButton,
  RadioButtonInner,
  RadioButtonText,
} from "@/components/RadioButton"
import { Status } from "@/components/Status"

import { styles } from "./styles"

const data = [
  {
    title: "Desenvolvimento de aplicativo de loja online",
    customerName: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "approved",
  },
  {
    title: "Desenvolvimento de aplicativo de loja online",
    customerName: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "sent",
  },
  {
    title: "Desenvolvimento de aplicativo de loja online",
    customerName: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "draft",
  },
  {
    title: "Desenvolvimento de aplicativo de loja online",
    customerName: "Soluções Tecnológicas Beta",
    price: 22300,
    status: "declined",
  },
]

export function Home() {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Orçamentos</Text>
          <Text style={styles.subtitle}>Você tem 1 item(s) em rascunho</Text>
        </View>

        <Button
          icon={PlusIcon}
          text="Novo"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <InputRoot>
            <InputIcon icon={SearchIcon} />
            <InputField placeholder="Título ou cliente" />
          </InputRoot>

          <Button
            icon={SlidersHorizontalIcon}
            variant="secondary"
            onPress={() => setIsOpenFilterModal(true)}
          />
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => <Card data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>

      <BottomModal
        open={isOpenFilterModal}
        onClose={() => setIsOpenFilterModal(false)}
      >
        <BottomModalHeader title="Filtrar e ordenar" />

        <BottomModalContent>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Status</Text>

            <View style={styles.filterItems}>
              <Checkbox>
                <CheckboxInner />
                <Status status="draft" />
              </Checkbox>

              <Checkbox>
                <CheckboxInner />
                <Status status="sent" />
              </Checkbox>

              <Checkbox>
                <CheckboxInner />
                <Status status="approved" />
              </Checkbox>

              <Checkbox>
                <CheckboxInner />
                <Status status="declined" />
              </Checkbox>
            </View>
          </View>

          <View style={styles.filter}>
            <Text style={styles.filterText}>Ordenação</Text>

            <View style={styles.filterItems}>
              <RadioButton>
                <RadioButtonInner />
                <RadioButtonText>Mais recente</RadioButtonText>
              </RadioButton>

              <RadioButton>
                <RadioButtonInner />
                <RadioButtonText>Mais antigo</RadioButtonText>
              </RadioButton>

              <RadioButton>
                <RadioButtonInner />
                <RadioButtonText>Maior valor</RadioButtonText>
              </RadioButton>

              <RadioButton>
                <RadioButtonInner />
                <RadioButtonText>Menor valor</RadioButtonText>
              </RadioButton>
            </View>
          </View>
        </BottomModalContent>

        <BottomModalFooter>
          <Button
            text="Resetar filtros"
            variant="secondary"
          />
          <Button
            text="Aplicar"
            icon={CheckIcon}
          />
        </BottomModalFooter>
      </BottomModal>
    </View>
  )
}
