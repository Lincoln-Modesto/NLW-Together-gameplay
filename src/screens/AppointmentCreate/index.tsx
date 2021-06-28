import React, {useState} from 'react'
import {View,
        Text, ScrollView, KeyboardAvoidingView, Platform} from 'react-native'

import { v4 as uuidv4 } from 'uuid';

import { styles } from './styles'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'
import { Guilds } from '../Guilds'
import { GuildProps } from '../../components/Guild'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { useNavigation } from '@react-navigation/native'

 
export function ApointmentCreate(){
    
    const [category, setCategory] = useState('')
    const [openGuildsModal, setOpenGuildsModal] = useState(false)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [description, setDescription] = useState('')

    const navigation = useNavigation()

    function handleOpenGuildModal (){
        setOpenGuildsModal(true)
    }

    function handleCloseModal (){
        setOpenGuildsModal(false)
    }

    function handleGuildSelect (guildSelect: GuildProps){
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }

    function handleCategorySeletect(categoryId: string){
        setCategory(categoryId)
    }

    async function handleSave() {

        const newAppointment = {
            id: uuidv4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
        const appointments = storage? JSON.stringify(storage) : []

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment])
        )

        navigation.navigate('Home')
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
            <Background>
                <ScrollView>
                    <Header
                        title='Agendar partida'
                    />

                    <Text style={[styles.label, { marginBottom: 18, marginTop: 36, marginLeft: 24}]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySeletect}
                        categorySelected={category}/>

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuildModal}>

                            <View style={styles.select}>

                                {
                                    guild.icon ?  <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <View style={styles.image}/> 
                                }
                            
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>

                                <Feather
                                    color={theme.colors.heading}
                                    size={18}
                                    name='chevron-right'
                                />

                            </View>
                        </RectButton>
                    
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setDay}
                                        />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMonth}
                                        />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom: 12}]}>
                                    Hora e minuto
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                        />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                        />
                                </View>
                            </View>
                        
                        </View>
                        
                        <View style={styles.field}>
                            <Text style={[styles.label, { marginBottom: 12 }]}>
                                Descrição
                            </Text>
                            <Text style={styles.caracters}>
                            Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />
                        <View style={styles.footer}>
                            <Button 
                                title='Agendar'
                                onPress={handleSave}
                                />
                        </View>
                    
                    </View>
                </ScrollView>
            </Background>
            <ModalView 
            visible={openGuildsModal}
            closeModal={handleCloseModal}
            >
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>

        </KeyboardAvoidingView>
    )
}